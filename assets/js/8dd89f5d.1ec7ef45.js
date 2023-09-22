"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),y=p,v=f["".concat(l,".").concat(y)]||f[y]||s[y]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}const a={sidebar_label:"PuppeteerLifeCycleEvent"},i="PuppeteerLifeCycleEvent type",l={unversionedId:"api/puppeteer.puppeteerlifecycleevent",id:"version-21.3.4/api/puppeteer.puppeteerlifecycleevent",title:"PuppeteerLifeCycleEvent type",description:"Signature:",source:"@site/versioned_docs/version-21.3.4/api/puppeteer.puppeteerlifecycleevent.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteerlifecycleevent",permalink:"/api/puppeteer.puppeteerlifecycleevent",draft:!1,tags:[],version:"21.3.4",frontMatter:{sidebar_label:"PuppeteerLifeCycleEvent"},sidebar:"api",previous:{title:"PuppeteerLaunchOptions",permalink:"/api/puppeteer.puppeteerlaunchoptions"},next:{title:"PuppeteerNodeLaunchOptions",permalink:"/api/puppeteer.puppeteernodelaunchoptions"}},c={},u=[{value:"Signature:",id:"signature",level:4}],s={toc:u};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",p({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"puppeteerlifecycleevent-type"}),"PuppeteerLifeCycleEvent type"),(0,n.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"export type PuppeteerLifeCycleEvent =\n  /**\n   * Waits for the 'load' event.\n   */\n  | 'load'\n  /**\n   * Waits for the 'DOMContentLoaded' event.\n   */\n  | 'domcontentloaded'\n  /**\n   * Waits till there are no more than 0 network connections for at least `500`\n   * ms.\n   */\n  | 'networkidle0'\n  /**\n   * Waits till there are no more than 2 network connections for at least `500`\n   * ms.\n   */\n  | 'networkidle2';\n")))}f.isMDXComponent=!0}}]);