(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1311:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i(0)),l=a(i(893));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(l.default,{text:"Test Text",id:"ItemDisplay"})}},893:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextStyles=t.default=void 0;var n=s(i(0)),l=s(i(1)),a=s(i(9)),o=s(i(3)),r=s(i(6)),u=s(i(896));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var m=o.default.bind(u.default),f={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=f;var p={text:l.default.string,textStyle:l.default.oneOf(Object.values(f)),isTruncated:l.default.bool,isDisabled:l.default.bool,icon:l.default.element,iconAlignment:l.default.oneOf(["center","top","inline"])},y={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},b=function(e){var t,i=e.text,l=e.textStyle,o=e.isTruncated,u=e.isDisabled,s=e.icon,p=e.iconAlignment,y=_(e,["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"]),b=n.default.useContext(r.default),O=(0,a.default)(m("item-display",{"is-disabled":u},d({},"icon-".concat(p),s),b.className),y.className),v=m(["text",{"is-truncated":o},d({},"".concat(l),l===f.SECONDARY),d({},"".concat(l),l===f.ATTENTION),d({},"".concat(l),l===f.STRONG),{"strike-through":l===f.STRIKETHROUGH}]);return s&&(t=n.default.createElement("div",{className:m("icon")},s)),n.default.createElement("div",c({},y,{className:O,"aria-disabled":u}),t,n.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:v},i))};b.propTypes=p,b.defaultProps=y;var O=b;t.default=O},896:function(e,t,i){"use strict";i.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___2b_SG","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___1AjRs","item-display":"ItemDisplay-module__item-display___1bDLR",text:"ItemDisplay-module__text___he6-d",icon:"ItemDisplay-module__icon___31d1i","icon-center":"ItemDisplay-module__icon-center___3uG57","icon-top":"ItemDisplay-module__icon-top___2VOI1","icon-inline":"ItemDisplay-module__icon-inline___1GaDi","is-truncated":"ItemDisplay-module__is-truncated___C6Zkz","is-disabled":"ItemDisplay-module__is-disabled___23cYm",secondary:"ItemDisplay-module__secondary___6Hlhv",attention:"ItemDisplay-module__attention___mPrCp",strong:"ItemDisplay-module__strong___3uSC3","strike-through":"ItemDisplay-module__strike-through___3ZLfy"}}}]);