(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1333:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n(0)),o=i(n(877)),u=i(n(929));function i(t){return t&&t.__esModule?t:{default:t}}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,n,r,i=f(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),e=i.call(this,t),o.default.now=function(){return new Date},e.state={precision:"before",granularity:"year",onsetDate:(0,o.default)("2013-01-01").format("YYYY-MM-DD")},e.handleOnset=e.handleOnset.bind(p(e)),e.handleSubmit=e.handleSubmit.bind(p(e)),e}return e=s,(n=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("p",null,"Birth Date: 2001-03-06 (March 06, 2001)"),a.default.createElement("p",null,"Default Onset Date: 2013-01-01 (January 01, 2013)"),a.default.createElement("p",null,"Default Onset Date MATCHES with calculated onset date using defualt parameters"),a.default.createElement("form",{onSubmit:this.handleSubmit},a.default.createElement(u.default,{birthdate:(0,o.default)("2001-03-06").format("YYYY-MM-DD"),granularity:this.state.granularity,id:"test",legend:"Date of Onset",precision:this.state.precision,onsetDate:this.state.onsetDate,onsetOnChange:this.handleOnset}),a.default.createElement("button",{type:"submit"},"Submit")),a.default.createElement("p",{"data-test-json":!0},JSON.stringify(this.state.submittedData,null,2)))}}])&&l(e.prototype,n),r&&l(e,r),s}(a.default.Component);e.default=y}}]);