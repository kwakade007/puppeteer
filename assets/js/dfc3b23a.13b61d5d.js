"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88980],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=i(t),v=o,m=g["".concat(c,".").concat(v)]||g[v]||u[v]||a;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var i=2;i<a;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23884:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_label:"Coverage.stopCSSCoverage"},p="Coverage.stopCSSCoverage() method",s={unversionedId:"api/puppeteer.coverage.stopcsscoverage",id:"api/puppeteer.coverage.stopcsscoverage",title:"Coverage.stopCSSCoverage() method",description:"Signature:",source:"@site/../docs/api/puppeteer.coverage.stopcsscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.stopcsscoverage",permalink:"/next/api/puppeteer.coverage.stopcsscoverage",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Coverage.stopCSSCoverage"},sidebar:"sidebar",previous:{title:"Coverage.startJSCoverage",permalink:"/next/api/puppeteer.coverage.startjscoverage"},next:{title:"Coverage.stopJSCoverage",permalink:"/next/api/puppeteer.coverage.stopjscoverage"}},c={},i=[{value:"Remarks",id:"remarks",level:2}],l={toc:i};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coveragestopcsscoverage-method"},"Coverage.stopCSSCoverage() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Coverage {\n  stopCSSCoverage(): Promise<CoverageEntry[]>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/next/api/puppeteer.coverageentry"},"CoverageEntry"),"[","]",">"),(0,o.kt)("p",null,"Promise that resolves to the array of coverage reports for all stylesheets."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"CSS Coverage doesn't include dynamically injected style tags without sourceURLs."))}u.isMDXComponent=!0}}]);