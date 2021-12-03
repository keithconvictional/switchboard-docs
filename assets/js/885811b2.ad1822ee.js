"use strict";(self.webpackChunkswitchboard=self.webpackChunkswitchboard||[]).push([[664],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5104:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={},l="Command Line Interface",u={unversionedId:"deployments/cli",id:"deployments/cli",isDocsHomePage:!1,title:"Command Line Interface",description:"Setup",source:"@site/docs/deployments/cli.md",sourceDirName:"deployments",slug:"/deployments/cli",permalink:"/switchboard-docs/docs/deployments/cli",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/deployments/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setups",permalink:"/switchboard-docs/docs/deployments/setups"},next:{title:"Deploying to Amazon Web Services (AWS)",permalink:"/switchboard-docs/docs/deployments/aws/deploying-to-aws"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Config",id:"config",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"switchboard new\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"switchboard deploy aws Convictional--\x3eFunc1--\x3eSQS--\x3eFunc2--\x3eSQS--\x3eConvictional\n")),(0,c.kt)("h2",{id:"setup"},"Setup"),(0,c.kt)("h2",{id:"config"},"Config"),(0,c.kt)("p",null,"TODO"))}d.isMDXComponent=!0}}]);