(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1278:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(0)),u=a(n(909)),l=a(n(3)),c=a(n(911)),i=a(n(913));function a(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=l.default.bind(i.default),C=[{id:"Column-0",text:"Column 0",width:100},{id:"Column-1",text:"Column 1"},{id:"Column-2",text:"Column 2"}],_=[{id:"Column-3",text:"Column 3"},{id:"Column-4",text:"Column 4"},{id:"Column-5",text:"Column 5"},{id:"Column-6",text:"Column 6"},{id:"Column-7",text:"Column 7"},{id:"Column-8",text:"Column 8"},{id:"Column-9",text:"Column 9"},{id:"Column-10",text:"Column 10"},{id:"Column-11",text:"Column 11"},{id:"Column-12",text:"Column 12"}],w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,o,l=s(i);function i(){return f(this,i),l.apply(this,arguments)}return e=i,o=[{key:"buildRows",value:function(t,e){return new Array(e).fill().map((function(e,n){return{id:"".concat(t,"-").concat(n),ariaLabel:"Row ".concat(t,"-").concat(n),height:n%3==0?"3rem":void 0,cells:new Array(13).fill(0).map((function(t,e){return"Column-".concat(e)})).map((function(e){return{columnId:e,component:r.default.createElement(c.default,{text:"Row-".concat(n,", ").concat(e),label:"".concat(t,"-").concat(n,"-").concat(e)})}}))}}))}},{key:"buildSection",value:function(t,e){return{id:t,rows:i.buildRows(t,e)}}}],(n=[{key:"render",value:function(){return r.default.createElement("div",{id:"custom-height-data-grid",className:b("content-wrapper")},r.default.createElement(u.default,{id:"custom-height",pinnedColumns:C,overflowColumns:_,sections:[i.buildSection("section_0",30)],defaultColumnWidth:250,headerHeight:"5rem",rowHeight:"6rem",fill:!0}))}}])&&d(e.prototype,n),o&&d(e,o),i}(r.default.Component);e.default=w},911:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n(0)),r=c(n(1)),u=c(n(3)),l=c(n(912));function c(t){return t&&t.__esModule?t:{default:t}}var i=u.default.bind(l.default),a={text:r.default.string,label:r.default.string},f=function(t){var e=t.text,n=t.label;return o.default.createElement("div",{className:i("content-cell"),"data-cell-label":n},e)};f.propTypes=a;var d=f;e.default=d},912:function(t,e,n){"use strict";n.r(e),e.default={"content-cell":"ContentCellLayout__content-cell___zm8yP"}},913:function(t,e,n){"use strict";n.r(e),e.default={"content-wrapper":"ClinicalDataGridCommon-test-module__content-wrapper___1jZVp","content-overflow":"ClinicalDataGridCommon-test-module__content-overflow___3r32t"}}}]);