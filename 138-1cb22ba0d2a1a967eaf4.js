(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(0)),r=u(n(3)),a=u(n(903)),o=u(n(934));function u(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(o.default),f=l.default.createElement("div",{id:"headerTest--content",className:d("content")});t.default=function(){return l.default.createElement(a.default,{startContent:f,title:"Header with content on the left"})}},903:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=i(n(1)),o=i(n(9)),u=i(n(3)),d=i(n(6)),f=i(n(908));function i(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=u.default.bind(f.default),p={children:a.default.element,startContent:a.default.element,title:a.default.string,endContent:a.default.element,isSubheader:a.default.bool},b=function(e){var t,n=e.children,l=e.title,a=e.startContent,u=e.endContent,f=e.isSubheader,i=_(e,["children","title","startContent","endContent","isSubheader"]),c=(0,r.useContext)(d.default);l&&(t=r.default.createElement("div",{className:m("title-container")},r.default.createElement("h1",{className:m("title")},l)));var p=r.default.Children.map(n,(function(e){return r.default.cloneElement(e,{className:(0,o.default)([m("flex-collapse"),n.props.className])})})),b=(0,o.default)([m(["flex-header",{subheader:f},c.className]),i.className]);return r.default.createElement("header",s({},i,{className:b}),a&&r.default.createElement("div",{className:m("flex-end")},a),r.default.createElement("div",{className:m("flex-fill")},t),p,u&&r.default.createElement("div",{className:m("flex-end")},u))};b.propTypes=p,b.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1};var y=b;t.default=y},908:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___3dU2I","orion-fusion-theme":"Header-module__orion-fusion-theme___apYfW","flex-header":"Header-module__flex-header___-HGqM","flex-collapse":"Header-module__flex-collapse___2TKWS",subheader:"Header-module__subheader___1XLTv","flex-fill":"Header-module__flex-fill___1jtOT","flex-end":"Header-module__flex-end___2lzXN","title-container":"Header-module__title-container___2_6oY",title:"Header-module__title___3S3dA"}},934:function(e,t,n){"use strict";n.r(t),t.default={"start-content":"ClinicalHeaderCommon-test-module__start-content___3HGYK","end-content":"ClinicalHeaderCommon-test-module__end-content___2P6Yw",content:"ClinicalHeaderCommon-test-module__content___zGwU5"}}}]);