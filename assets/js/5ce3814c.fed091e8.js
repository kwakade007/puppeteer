"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66871],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},66147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"Mouse.dragEnter"},p="Mouse.dragEnter() method",i={unversionedId:"api/puppeteer.mouse.dragenter",id:"version-15.3.1/api/puppeteer.mouse.dragenter",title:"Mouse.dragEnter() method",description:"Dispatches a dragenter event.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.mouse.dragenter.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.dragenter",permalink:"/15.3.1/api/puppeteer.mouse.dragenter",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Mouse.dragEnter"},sidebar:"sidebar",previous:{title:"Mouse.dragAndDrop",permalink:"/15.3.1/api/puppeteer.mouse.draganddrop"},next:{title:"Mouse.dragOver",permalink:"/15.3.1/api/puppeteer.mouse.dragover"}},l={},u=[{value:"Parameters",id:"parameters",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mousedragenter-method"},"Mouse.dragEnter() method"),(0,a.kt)("p",null,"Dispatches a ",(0,a.kt)("inlineCode",{parentName:"p"},"dragenter")," event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Mouse {\n  dragEnter(target: Point, data: Protocol.Input.DragData): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.point"},"Point")),(0,a.kt)("td",{parentName:"tr",align:null},"point for emitting ",(0,a.kt)("code",null,"dragenter")," event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"Protocol.Input.DragData"),(0,a.kt)("td",{parentName:"tr",align:null},"drag data containing items and operations mask")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"))}d.isMDXComponent=!0}}]);