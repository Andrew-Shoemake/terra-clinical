(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1283:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(0)),u=a(n(909)),c=a(n(3)),i=a(n(911)),l=a(n(913));function a(t){return t&&t.__esModule?t:{default:t}}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=c.default.bind(l.default),b=[{id:"Column-0",width:200,text:"Column 0"},{id:"Column-1",width:200,text:"Column 1"},{id:"Column-2",width:200,text:"Column 2"}],w=[{id:"Column-3",width:200,text:"Column 3"},{id:"Column-4",width:200,text:"Column 4"},{id:"Column-5",width:200,text:"Column 5"},{id:"Column-6",width:200,text:"Column 6"}],v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(l,t);var e,n,o,c=d(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this,t)).state={sectionCount:1,sections:l.buildSections(1)},e}return e=l,o=[{key:"buildRows",value:function(t,e){return new Array(e).fill().map((function(e,n){return{id:"".concat(t,"-Row").concat(n),ariaLabel:"Row ".concat(t,"-").concat(n),cells:new Array(10).fill(0).map((function(t,e){return"Column-".concat(e)})).map((function(t){return{columnId:t,component:r.default.createElement(i.default,{text:"Row-".concat(n,", Column ").concat(t)})}}))}}))}},{key:"buildSections",value:function(t){for(var e=[],n=0,o=t;n<o;n+=1){var r="section_".concat(n);e.push({id:r,text:"Section ".concat(n),rows:l.buildRows(r,3)})}return e}}],(n=[{key:"render",value:function(){var t=this;return r.default.createElement("div",{id:"paged-data-grid",className:y("content-wrapper")},r.default.createElement(u.default,{id:"paging-example",pinnedColumns:b,overflowColumns:w,sections:this.state.sections,fill:!0,onRequestContent:this.state.sectionCount<2?function(){t.setState((function(t){return{sectionCount:t.sectionCount+1,sections:l.buildSections(t.sectionCount+1)}}))}:void 0}))}}])&&f(e.prototype,n),o&&f(e,o),l}(r.default.Component);e.default=v},911:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(0)),r=i(n(1)),u=i(n(3)),c=i(n(912));function i(t){return t&&t.__esModule?t:{default:t}}var l=u.default.bind(c.default),a={text:r.default.string,label:r.default.string},f=function(t){var e=t.text,n=t.label;return o.default.createElement("div",{className:l("content-cell"),"data-cell-label":n},e)};f.propTypes=a;var s=f;e.default=s},912:function(t,e,n){"use strict";n.r(e),e.default={"content-cell":"ContentCellLayout__content-cell___zm8yP"}},913:function(t,e,n){"use strict";n.r(e),e.default={"content-wrapper":"ClinicalDataGridCommon-test-module__content-wrapper___1jZVp","content-overflow":"ClinicalDataGridCommon-test-module__content-overflow___3r32t"}}}]);