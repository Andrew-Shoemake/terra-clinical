(window.webpackJsonp=window.webpackJsonp||[]).push([[8,102,119,120],{878:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___1O_DS","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___30fIF",IconCritical:"IconCritical-module__IconCritical___3uSS9"}},879:function(e,t,a){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=_(a(1)),o=_(a(3)),u=a(85),c=_(a(898)),d=_(a(194)),i=a(289),s=_(a(899));function _(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],l=!0,n=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(l=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==u.return||u.return()}finally{if(n)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var h=o.default.bind(s.default),v={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,r=e.title,o=e.description,s=e.isExpanded,_=m((0,n.useState)(s),2),f=_[0],p=_[1],v=m((0,n.useState)(!1),2),g=v[0],w=v[1],E=n.default.useContext(u.ThemeContext),P=void 0!==l,N=function(){w(!g),f&&p(!f)},O=function(){p(!f),g&&w(!g)},T=function(e,t){e.nativeEvent.keyCode!==i.KEY_SPACE&&e.nativeEvent.keyCode!==i.KEY_RETURN||(e.preventDefault(),t())};return n.default.createElement("div",{className:h("template",E.className)},n.default.createElement("div",{className:h("header")},r&&n.default.createElement("h2",{className:h("title")},r)),n.default.createElement("div",{className:h("content")},o&&n.default.createElement("div",{className:h("description")},o),t),n.default.createElement("div",{className:h("footer")},a?n.default.createElement("div",{className:h("button-container")},P&&n.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return T(e,N)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},n.default.createElement(c.default,{className:h("chevron")}),n.default.createElement("span",null,"CSS"),n.default.createElement(d.default,{className:h("chevron")})),n.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":f}),onClick:O,onKeyDown:function(e){return T(e,O)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},n.default.createElement(c.default,{className:h("chevron")}),n.default.createElement("span",null,"Code"),n.default.createElement(d.default,{className:h("chevron")}))):null,n.default.createElement("div",null,g&&n.default.createElement("div",{className:h("css")},l),f&&n.default.createElement("div",{className:h("code")},a))))};g.propTypes=v,g.defaultProps={isExpanded:!1};var w=g;t.default=w},880:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___hvmq8","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___fYMNO",IconHigh:"IconHigh-module__IconHigh___3CyF_"}},881:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___3xHw9","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___3roC3",IconLow:"IconLow-module__IconLow___1w6qL"}},882:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___2QwOU","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___3NBal",IconAbnormal:"IconAbnormal-module__IconAbnormal___svAYN"}},883:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___1nW4g","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___2Fa49",IconDiamond:"IconDiamond-module__IconDiamond___uBbp-"}},885:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(16));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};u.displayName="IconComment",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},886:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),n=u(a(1)),r=u(a(3)),o=u(a(889));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(o.default),d={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},i=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,o=l.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(r))),u=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},o,u)};i.propTypes=d;var s=i;t.default=s},888:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),n=d(a(9)),r=d(a(3)),o=d(a(6)),u=d(a(16)),c=d(a(878));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var s=r.default.bind(c.default),_=function(e){var t=i({},e),a=l.default.useContext(o.default),r=(0,n.default)(s("IconCritical",a.className),e.className);return l.default.createElement(u.default,i({},t,{className:r}),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};_.displayName="IconCritical",_.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var f=_;t.default=f},889:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},890:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),n=d(a(9)),r=d(a(3)),o=d(a(6)),u=d(a(16)),c=d(a(880));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var s=r.default.bind(c.default),_=function(e){var t=i({},e),a=l.default.useContext(o.default),r=(0,n.default)(s("IconHigh",a.className),e.className);return l.default.createElement(u.default,i({},t,{className:r}),l.default.createElement("path",{fill:"#B53203",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 00-.8.3L.3 23.2a1.215 1.215 0 000 1.6l22.9 22.9a1.217 1.217 0 001.6 0l22.9-22.9a1.217 1.217 0 000-1.6L24.8.3A1.135 1.135 0 0024 0zm0 9L13 20h8v19h6V20h8z"}))};_.displayName="IconHigh",_.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var f=_;t.default=f},891:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),n=d(a(9)),r=d(a(3)),o=d(a(6)),u=d(a(16)),c=d(a(881));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var s=r.default.bind(c.default),_=function(e){var t=i({},e),a=l.default.useContext(o.default),r=(0,n.default)(s("IconLow",a.className),e.className);return l.default.createElement(u.default,i({},t,{className:r}),l.default.createElement("path",{fill:"#0053E6",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39l11-11h-8V9h-6v19h-8l11 11z"}))};_.displayName="IconLow",_.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var f=_;t.default=f},892:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),n=d(a(9)),r=d(a(3)),o=d(a(6)),u=d(a(16)),c=d(a(882));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var s=r.default.bind(c.default),_=function(e){var t=i({},e),a=l.default.useContext(o.default),r=(0,n.default)(s("IconAbnormal",a.className),e.className);return l.default.createElement(u.default,i({},t,{className:r}),l.default.createElement("path",{fill:"#654A08",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};_.displayName="IconAbnormal",_.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var f=_;t.default=f},894:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(16));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M24 0L3 42l-3 6h48L24 0zm-1.7 10.1l16 31.9H6.4l15.9-31.9z"}))};u.displayName="IconModified",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},895:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),n=d(a(9)),r=d(a(3)),o=d(a(6)),u=d(a(16)),c=d(a(883));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var s=r.default.bind(c.default),_=function(e){var t=i({},e),a=l.default.useContext(o.default),r=(0,n.default)(s("IconDiamond",a.className),e.className);return l.default.createElement(u.default,i({},t,{className:r}),l.default.createElement("path",{fill:"#78288C",d:"M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};_.displayName="IconDiamond",_.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var f=_;t.default=f},897:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(16));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M38 0H10a2 2 0 00-2 2v44a2 2 0 002 2h28a2 2 0 002-2V2a2 2 0 00-2-2zM15 41h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm8 14h-5V23h5zm0-25H11V3h26z"}))};u.displayName="IconCalculator",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},898:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(16));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},899:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},901:function(e,t,a){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=d(a(1)),o=d(a(3)),u=a(85),c=d(a(924));function d(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}var s=o.default.bind(c.default),_={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},f=function(e){var t=e.rows,a=(0,n.useContext)(u.ThemeContext);return n.default.createElement("table",{className:s("table",a.className)},n.default.createElement("thead",null,n.default.createElement("tr",{className:s("tr")},n.default.createElement("th",{className:s("th")},"Prop Name"),n.default.createElement("th",{className:s("th")},"Type"),n.default.createElement("th",{className:s("th")},"Is Required"),n.default.createElement("th",{className:s("th")},"Default Value"),n.default.createElement("th",{className:s("th")},"Description"))),n.default.createElement("tbody",null,t.map((function(e){return n.default.createElement("tr",{className:s("tr","props-tr"),key:e.name},n.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),n.default.createElement("td",{className:s(["td","props-td"])},e.type()),n.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),n.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),n.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};f.propTypes=_;var m=f;t.default=m},924:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___2OiA6","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}}}]);