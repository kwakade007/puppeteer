"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={},o="Puppeteer Angular Schematic",p={unversionedId:"ng-schematics",id:"version-20.9.0/ng-schematics",title:"Puppeteer Angular Schematic",description:"Adds Puppeteer-based e2e tests to your Angular project.",source:"@site/versioned_docs/version-20.9.0/ng-schematics.md",sourceDirName:".",slug:"/ng-schematics",permalink:"/ng-schematics",draft:!1,tags:[],version:"20.9.0",frontMatter:{},sidebar:"docs",previous:{title:"Debugging",permalink:"/guides/debugging"},next:{title:"Chromium Support",permalink:"/chromium-support"}},s={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Options",id:"options",level:3},{value:"Creating a single test file",id:"creating-a-single-test-file",level:2},{value:"Running test server and dev server at the same time",id:"running-test-server-and-dev-server-at-the-same-time",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Sandbox",id:"sandbox",level:3},{value:"Unit Testing",id:"unit-testing",level:3}],d={toc:u};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"puppeteer-angular-schematic"}),"Puppeteer Angular Schematic"),(0,a.kt)("p",null,"Adds Puppeteer-based e2e tests to your Angular project."),(0,a.kt)("h2",r({},{id:"getting-started"}),"Getting started"),(0,a.kt)("p",null,"Run the command below in an Angular CLI app directory and follow the prompts."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note this will add the schematic as a dependency to your project.")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"ng add @puppeteer/ng-schematics\n")),(0,a.kt)("p",null,"Or you can use the same command followed by the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options"}),"options")," below."),(0,a.kt)("p",null,"Currently, this schematic supports the following test frameworks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://jasmine.github.io/"}),(0,a.kt)("strong",{parentName:"a"},"Jasmine"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://jestjs.io/"}),(0,a.kt)("strong",{parentName:"a"},"Jest"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://mochajs.org/"}),(0,a.kt)("strong",{parentName:"a"},"Mocha"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://nodejs.org/api/test.html"}),(0,a.kt)("strong",{parentName:"a"},"Node Test Runner")))),(0,a.kt)("p",null,"With the schematics installed you can run E2E tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"ng e2e\n")),(0,a.kt)("h3",r({},{id:"options"}),"Options"),(0,a.kt)("p",null,"When adding schematics to your project you can to provide following options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Option"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--isDefaultTester")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"When true, replaces default ",(0,a.kt)("inlineCode",{parentName:"td"},"ng e2e")," command."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--exportConfig")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"When true, creates an empty ",(0,a.kt)("a",r({parentName:"td"},{href:"https://pptr.dev/guides/configuration"}),"Puppeteer configuration")," file. (",(0,a.kt)("inlineCode",{parentName:"td"},".puppeteerrc.cjs"),")"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--testingFramework")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The testing framework to install along side Puppeteer."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"jasmine"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"jest"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"mocha"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"node"')),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--port")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The port to spawn server for E2E. If default is used ",(0,a.kt)("inlineCode",{parentName:"td"},"ng serve")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"ng e2e")," will not run side-by-side."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"4200"))))),(0,a.kt)("h2",r({},{id:"creating-a-single-test-file"}),"Creating a single test file"),(0,a.kt)("p",null,"Puppeteer Angular Schematic exposes a method to create a single test file."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'ng generate @puppeteer/ng-schematics:test "<TestName>"\n')),(0,a.kt)("h3",r({},{id:"running-test-server-and-dev-server-at-the-same-time"}),"Running test server and dev server at the same time"),(0,a.kt)("p",null,"By default the E2E test will run the app on the same port as ",(0,a.kt)("inlineCode",{parentName:"p"},"ng start"),".\nTo avoid this you can specify the port the an the ",(0,a.kt)("inlineCode",{parentName:"p"},"angular.json"),"\nUpdate either ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer")," (depending on the initial setup) to:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "e2e": {\n    "builder": "@puppeteer/ng-schematics:puppeteer",\n    "options": {\n      "commands": [...],\n      "devServerTarget": "sandbox:serve",\n      "testingFramework": "<TestingFramework>",\n      "port": 8080\n    },\n    ...\n}\n')),(0,a.kt)("p",null,"Now update the E2E test file ",(0,a.kt)("inlineCode",{parentName:"p"},"utils.ts")," baseUrl to:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const baseUrl = 'http://localhost:8080';\n")),(0,a.kt)("h2",r({},{id:"contributing"}),"Contributing"),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pptr.dev/contributing"}),"contributing guide")," to get an overview of what you need to develop in the Puppeteer repo."),(0,a.kt)("h3",r({},{id:"sandbox"}),"Sandbox"),(0,a.kt)("p",null,"For easier development we provide a script to auto-generate the Angular project to test against. Simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run sandbox -- --init\n")),(0,a.kt)("p",null,"After that to run ",(0,a.kt)("inlineCode",{parentName:"p"},"@puppeteer/ng-schematics")," against the Sandbox Angular project run:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run sandbox\n# or to auto-build and then run schematics\nnpm run sandbox -- --build\n")),(0,a.kt)("p",null,"To run the creating of single test schematic:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run sandbox:test\n")),(0,a.kt)("h3",r({},{id:"unit-testing"}),"Unit Testing"),(0,a.kt)("p",null,"The schematics utilize ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular-devkit/schematics/testing")," for verifying correct file creation and ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," updates. To execute the test suit:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run test\n")))}m.isMDXComponent=!0}}]);