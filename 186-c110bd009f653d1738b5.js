(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1330:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(0)),u=a(n(877)),i=a(n(929));function a(t){return t&&t.__esModule?t:{default:t}}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,n,r,a=f(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),e=a.call(this,t),u.default.now=function(){return new Date(2016,8,20)},e.state={precision:"on/at",granularity:"month"},e.handleOnset=e.handleOnset.bind(p(e)),e.handleSubmit=e.handleSubmit.bind(p(e)),e}return e=s,(n=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Onset picker with minimum required fields and onChange handlers, supplied with a birthdate of 3 weeks old."),o.default.createElement("p",null,"Current date locked to September 20, 2016"),o.default.createElement("p",null,"Testing age granularity selection restrictions."),o.default.createElement("form",{onSubmit:this.handleSubmit},o.default.createElement(i.default,{birthdate:(0,u.default)().subtract(3,"weeks").format("YYYY-MM-DD"),id:"test",legend:"Date of Onset",onsetOnChange:this.handleOnset}),o.default.createElement("button",{type:"submit"},"Submit")),o.default.createElement("p",{"data-test-json":!0},JSON.stringify(this.state.submittedData,null,2)))}}])&&l(e.prototype,n),r&&l(e,r),s}(o.default.Component);e.default=y}}]);