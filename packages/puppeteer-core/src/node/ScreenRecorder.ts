/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {PassThrough} from 'stream';

import type Protocol from 'devtools-protocol';
import {bufferTime} from 'rxjs';

import type {
  Observable,
  OperatorFunction,
} from '../../third_party/rxjs/rxjs.js';
import {
  bufferCount,
  filter,
  fromEvent,
  lastValueFrom,
  map,
  takeUntil,
  tap,
} from '../../third_party/rxjs/rxjs.js';
import {CDPSessionEvent} from '../api/CDPSession.js';
import type {BoundingBox} from '../api/ElementHandle.js';
import type {JSHandle} from '../api/JSHandle.js';
import type {Page} from '../api/Page.js';
import {debugError} from '../common/util.js';
import {guarded} from '../util/decorators.js';
import {asyncDisposeSymbol} from '../util/disposable.js';

/**
 * @public
 */
export interface ScreenRecorderOptions {
  /**
   * Specifies the region of the viewport to crop.
   */
  crop?: BoundingBox;
  /**
   * Scales the output video.
   *
   * For example, `0.5` will shrink the width and height of the output video by
   * half. `2` will double the width and height of the output video.
   *
   * @defaultValue `1`
   */
  scale?: number;
  /**
   * Specifies the speed to record at.
   *
   * For example, `0.5` will slowdown the output video by 50%. `2` will double
   * the speed of the output video.
   *
   * @defaultValue `1`
   */
  speed?: number;
}

/**
 * @public
 */
export class ScreenRecorder extends PassThrough {
  #page: Page;

  #recorder: Promise<
    JSHandle<
      readonly [
        MediaRecorder,
        CanvasCaptureMediaStreamTrack,
        ScreenRecorderOptions,
      ]
    >
  >;

  #controller = new AbortController();
  #lastFrame: Promise<readonly [string, number]>;

  /**
   * @internal
   */
  constructor(
    renderer: Page,
    target: Page,
    width: number,
    height: number,
    options: ScreenRecorderOptions = {}
  ) {
    super();

    this.#page = target;
    void this.#page.bringToFront();

    void renderer.exposeFunction('sendChunk', (chunk: string) => {
      this.write(chunk.slice(chunk.indexOf(',')), 'base64');
    });
    this.#recorder = renderer.evaluateHandle(
      async (width, height, options) => {
        const canvas = document.body.appendChild(
          document.createElement('canvas')
        );
        canvas.width = width;
        canvas.height = height;
        if (options.crop) {
          canvas.width = options.crop.width;
          canvas.height = options.crop.height;
        }
        if (options.scale) {
          canvas.width *= options.scale;
          canvas.height *= options.scale;
        }
        const stream = canvas.captureStream(0);

        const track = stream.getTracks()[0] as CanvasCaptureMediaStreamTrack;

        const reader = new FileReader();
        const recorder = new MediaRecorder(stream, {
          mimeType: 'video/webm;codecs=vp9',
        });
        recorder.addEventListener('dataavailable', async event => {
          if (event.data.size === 0) {
            return;
          }
          (window as any).sendChunk(
            await new Promise((resolve, _) => {
              reader.addEventListener('loadend', () => {
                return resolve(reader.result);
              });
              reader.readAsDataURL(event.data);
            })
          );
        });
        recorder.start(500);
        recorder.pause();
        return [recorder, track, options] as const;
      },
      width,
      height,
      options
    );

    const {client} = this.#page.mainFrame();
    client.once(CDPSessionEvent.Disconnected, () => {
      void this.stop().catch(debugError);
    });

    this.#lastFrame = lastValueFrom(
      (
        fromEvent(
          client,
          'Page.screencastFrame'
        ) as Observable<Protocol.Page.ScreencastFrameEvent>
      ).pipe(
        tap(event => {
          void client.send('Page.screencastFrameAck', {
            sessionId: event.sessionId,
          });
        }),
        filter(event => {
          return event.metadata.timestamp !== undefined;
        }),
        map(event => {
          return {
            frame: event.data,
            timestamp: event.metadata.timestamp!,
          };
        }),
        bufferCount(2, 1) as OperatorFunction<
          {frame: string; timestamp: number},
          [
            {frame: string; timestamp: number},
            {frame: string; timestamp: number},
          ]
        >,
        map(([{timestamp: previousTimestamp, frame}, {timestamp}]) => {
          return [frame, timestamp - previousTimestamp] as const;
        }),
        takeUntil(fromEvent(this.#controller.signal, 'abort')),
        bufferTime(2000),
        filter(frames => {
          return frames.length > 0;
        }),
        map(frames => {
          void this.#writeFrames(frames);
          return [frames.at(-1)![0], performance.now()] as const;
        })
      ),
      {defaultValue: ['', performance.now()] as const}
    );
  }

  @guarded()
  async #writeFrames(
    frames: Array<readonly [frame: string, duration: number]>
  ) {
    await (
      await this.#recorder
    ).evaluate(async ([recorder, track, {crop, speed, scale = 1}], frames) => {
      // Stop-motion recording! We resume the recorder for a calculated
      // duration. Then we pause it since recording is real-time.
      recorder.resume();
      for (const [frame, duration] of frames) {
        const response = await fetch(`data:image/png;base64,${frame}`);
        const blob = await response.blob();

        const {canvas} = track;
        const bitmap = await window.createImageBitmap(
          blob,
          // The extra parameters will crop the image.
          crop?.x ?? 0,
          crop?.y ?? 0,
          canvas.width / scale,
          canvas.height / scale
        );
        const context = canvas.getContext('2d')!;
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Scaling is done automatically here.
        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

        track.requestFrame();
        await new Promise(resolve => {
          setTimeout(resolve, duration * 1000 * (speed ?? 1));
        });
      }
      recorder.pause();
    }, frames);
  }

  /**
   * Stops the recorder.
   *
   * @public
   */
  @guarded()
  async stop(): Promise<void> {
    if (this.#controller.signal.aborted) {
      return;
    }
    // Stopping the screencast will flush the frames.
    await this.#page._stopScreencast().catch(debugError);

    this.#controller.abort();

    // Repeat the last frame for the remaining frames.
    const [buffer, timestamp] = await this.#lastFrame;
    await this.#writeFrames([[buffer, performance.now() - timestamp]]);

    await (
      await this.#recorder
    ).evaluate(([recorder, track]) => {
      const stopPromise = new Promise(resolve => {
        recorder.addEventListener('stop', resolve, {once: true});
      });
      track.stop();
      recorder.stop();
      return stopPromise;
    });
  }

  /**
   * @internal
   */
  async [asyncDisposeSymbol](): Promise<void> {
    await this.stop();
  }
}
