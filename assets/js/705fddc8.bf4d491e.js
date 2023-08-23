"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55935],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,b=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73940:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={sidebar_label:"errors"},p="errors variable",l={unversionedId:"api/puppeteer.errors",id:"version-21.1.0/api/puppeteer.errors",title:"errors variable",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-21.1.0/api/puppeteer.errors.md",sourceDirName:"api",slug:"/api/puppeteer.errors",permalink:"/api/puppeteer.errors",draft:!1,tags:[],version:"21.1.0",frontMatter:{sidebar_label:"errors"},sidebar:"api",previous:{title:"ErrorCode",permalink:"/api/puppeteer.errorcode"},next:{title:"EvaluateFunc",permalink:"/api/puppeteer.evaluatefunc"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Example",id:"example",level:2}],u={toc:c};function f(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"errors-variable"}),"errors variable"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,n.kt)("p",{parentName:"blockquote"},"Import error classes directly."),(0,n.kt)("p",{parentName:"blockquote"},"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"page.waitForSelector(selector[, options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,n.kt)("p",{parentName:"blockquote"},"For certain types of errors Puppeteer uses specific error classes. These classes are available via ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer.errors"),".")),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"errors: PuppeteerErrors;\n")),(0,n.kt)("h2",o({},{id:"example"}),"Example"),(0,n.kt)("p",null,"An example of handling a timeout error:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")))}f.isMDXComponent=!0}}]);