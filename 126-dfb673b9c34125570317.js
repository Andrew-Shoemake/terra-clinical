(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r=(l=n(0))&&l.__esModule?l:{default:l},a=n(884);t.default=function(){return r.default.createElement(a.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"23:59"})}},1267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(0)),r=n(884),a=c(n(3)),o=c(n(900));function c(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(o.default),m=function(){return l.default.createElement("div",{className:i("mock-flowsheet-header")},l.default.createElement("div",{className:i(["mock-flowsheet-header-cell","new-date"])},l.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"21:00"})),l.default.createElement("div",{className:i("mock-flowsheet-header-cell")},l.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"22:00",hideDate:!0})),l.default.createElement("div",{className:i("mock-flowsheet-header-cell")},l.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 20, 2010",time:"23:59",hideDate:!0})),l.default.createElement("div",{className:i(["mock-flowsheet-header-cell","new-date"])},l.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"00:15"})),l.default.createElement("div",{className:i("mock-flowsheet-header-cell")},l.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 21, 2010",time:"03:00",hideDate:!0})),l.default.createElement("div",{className:i(["mock-flowsheet-header-cell","new-date"])},l.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"07:00"})),l.default.createElement("div",{className:i("mock-flowsheet-header-cell")},l.default.createElement(r.ResultTimeHeaderCell,{date:"Dec 22, 2010",time:"11:00",hideDate:!0})))};t.default=m},1385:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var l=n(0),r=n.n(l),a=n(288),o=n(932),c=n(1266),i=n.n(c);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function p(e){var t=e.components,n=d(e,["components"]);return Object(a.mdx)("wrapper",m({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n\nexport default () => <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"23:59\" />;\n\n")))}p.isMDXComponent=!0;var u=n(879),f=n.n(u),x=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.a.createElement(f.a,{title:t||"Result Time Header Cell",description:n,example:r.a.createElement(i.a,null),exampleSrc:r.a.createElement(p,null),isExpanded:l})},b=n(1267),h=n.n(b);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w={};function y(e){var t=e.components,n=O(e,["components"]);return Object(a.mdx)("wrapper",_({},w,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultTimeHeaderCell } from 'terra-clinical-result/lib';\nimport classNames from 'classnames/bind';\nimport styles from '../Examples.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ResultTimeHeaderFlowsheetExample = () => (\n  <div className={cx('mock-flowsheet-header')}>\n    <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n      <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"21:00\" />\n    </div>\n    <div className={cx('mock-flowsheet-header-cell')}>\n      <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"22:00\" hideDate />\n    </div>\n    <div className={cx('mock-flowsheet-header-cell')}>\n      <ResultTimeHeaderCell date=\"Dec 20, 2010\" time=\"23:59\" hideDate />\n    </div>\n    <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n      <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"00:15\" />\n    </div>\n    <div className={cx('mock-flowsheet-header-cell')}>\n      <ResultTimeHeaderCell date=\"Dec 21, 2010\" time=\"03:00\" hideDate />\n    </div>\n    <div className={cx(['mock-flowsheet-header-cell', 'new-date'])}>\n      <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"07:00\" />\n    </div>\n    <div className={cx('mock-flowsheet-header-cell')}>\n      <ResultTimeHeaderCell date=\"Dec 22, 2010\" time=\"11:00\" hideDate />\n    </div>\n  </div>\n);\n\nexport default ResultTimeHeaderFlowsheetExample;\n\n")))}y.isMDXComponent=!0;var g=n(907),j=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.a.createElement(f.a,{title:t||"Result Time Header Flowsheet Example",description:n,example:r.a.createElement(h.a,null),exampleCssSrc:r.a.createElement(g.a,null),exampleSrc:r.a.createElement(y,null),isExpanded:l})},v=n(901),E=n.n(v);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N=function(){return Object(a.mdx)(E.a,{rows:[{name:"date",type:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Content to be displayed on the first line, typically abbrivated date, e.g. ",Object(a.mdx)("inlineCode",{parentName:"p"},"Dec 12, 2010")))}return t.isMDXComponent=!0,t({})}},{name:"time",type:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Content to be displayed on the second line, typically 24 hour time in hours and minutes, e.g. ",Object(a.mdx)("inlineCode",{parentName:"p"},"23:59")))}return t.isMDXComponent=!0,t({})}},{name:"hideDate",type:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Visually hides the date when presented in a series of side-by-side columns of the same date."))}return t.isMDXComponent=!0,t({})}},{name:"paddingStyle",type:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "compact",\n "standard"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'compact'",description:function(){var e={};function t(t){var n=t.components,l=D(t,["components"]);return Object(a.mdx)("wrapper",k({},e,l,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The padding styling to apply to the Result Time column header cell.\nOne of ",Object(a.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"'compact'"),", or ",Object(a.mdx)("inlineCode",{parentName:"p"},"'standard'"),"."))}return t.isMDXComponent=!0,t({})}}]})};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R={};function M(e){var t=e.components,n=C(e,["components"]);return Object(a.mdx)("wrapper",T({},R,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(o.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"result-time-header-cell"},"Result Time Header Cell"),Object(a.mdx)("p",null,"Result-Time-Header-Cell is a component of terra-clinical-result that creates a standardized view for the Date/Time Header cells (column headers) for each bucketed time column within a flowsheet."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-result"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(a.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},"react"),Object(a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},"react-intl"),Object(a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(x,{mdxType:"Default"}),Object(a.mdx)(j,{title:"Result Time Header Cells in Sample Flowsheet",mdxType:"FlowsheetExample"}),Object(a.mdx)("h2",{id:"result-time-header-cell-props"},"Result Time Header Cell Props"),Object(a.mdx)(N,{mdxType:"ResultTimeHeaderProps"}))}M.isMDXComponent=!0},900:function(e,t,n){"use strict";n.r(t),t.default={"example-description-text":"Examples-module__example-description-text___1SBs1","dashed-border-group":"Examples-module__dashed-border-group___3WkpN","clinical-result-fontsize-16":"Examples-module__clinical-result-fontsize-16___36kjR","clinical-result-fontsize-18":"Examples-module__clinical-result-fontsize-18___3iAVE","clinical-result-fontsize-21":"Examples-module__clinical-result-fontsize-21___1U_aE","clinical-result-fontsize-24":"Examples-module__clinical-result-fontsize-24___2q2pC","bottom-space":"Examples-module__bottom-space___2t7kd","mock-flowsheet-header":"Examples-module__mock-flowsheet-header___1-RaE","mock-flowsheet-header-cell":"Examples-module__mock-flowsheet-header-cell___5q7E8","new-date":"Examples-module__new-date___phcQ6","mock-flowsheet-firstcolumn":"Examples-module__mock-flowsheet-firstcolumn___Lhp4e","mock-flowsheet-firstcolumn-cell":"Examples-module__mock-flowsheet-firstcolumn-cell___3UAOC",zebra:"Examples-module__zebra___Te86Y","mock-flowsheet-resultcolumn":"Examples-module__mock-flowsheet-resultcolumn___3QGkf","half-column":"Examples-module__half-column___3-mPm","double-column":"Examples-module__double-column___1PTMW","triple-column":"Examples-module__triple-column___3kSrg","flexible50-column":"Examples-module__flexible50-column___2IXTp","mock-flowsheet-resultcolumn-cell":"Examples-module__mock-flowsheet-resultcolumn-cell___2JLpC","allow-wrapping":"Examples-module__allow-wrapping___1KiXS",empty:"Examples-module__empty___3J4F6",short:"Examples-module__short___OcQds",medium:"Examples-module__medium___Tu5a3",tall:"Examples-module__tall___3QmDL","with-padding":"Examples-module__with-padding___2IyG-","vertical-center-align-wrapper":"Examples-module__vertical-center-align-wrapper___3U_MI"}},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var l=n(288);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={};function c(e){var t=e.components,n=a(e,["components"]);return Object(l.mdx)("wrapper",r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .example-description-text {\n    color: #434a4d;\n    display: inline-flex;\n    margin-bottom: 0.75rem;\n  }\n\n  .dashed-border-group {\n    border: 2px dashed #333;\n  }\n\n  .clinical-result-fontsize-16 {\n    font-size: 1.14285rem;\n  }\n\n  .clinical-result-fontsize-18 {\n    font-size: 1.28571rem;\n  }\n\n  .clinical-result-fontsize-21 {\n    font-size: 1.5rem;\n  }\n\n  .clinical-result-fontsize-24 {\n    font-size: 1.71428rem;\n  }\n\n  .bottom-space {\n    margin-bottom: 1.42857rem;\n  }\n\n  .mock-flowsheet-header {\n    background-color: #f1f1f1;\n    border: 1px solid #dedfe0;\n    border-bottom-color: #868a8c;\n    line-height: 0;\n    max-width: 1055px;\n    overflow: hidden;\n    padding-left: 220px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-header-cell {\n    border-left: 1px solid #868a8c;\n    border-right: 1px solid #868a8c;\n    display: inline-block;\n    margin-right: -1px;\n    width: 120px;\n    \n    &.new-date {\n      border-left: 2px solid #4e5558;\n    }\n  }\n\n  .mock-flowsheet-firstcolumn {\n    background-color: #f1f1f1;\n    border: 1px solid #dedfe0;\n    border-right: 2px solid #4e5558;\n    max-width: 222px;\n    overflow: hidden;\n    padding-top: 48px;\n    white-space: nowrap;\n  }\n\n  .mock-flowsheet-firstcolumn-cell {\n    border-bottom: 1px solid #868a8c;\n    border-top: 1px solid #868a8c;\n    margin-bottom: -1px;\n\n    &.zebra {\n      background-color: #dedfe0;\n    }\n  }\n\n  .mock-flowsheet-resultcolumn {\n    background-color: #f1f1f1;\n    border: 1px solid #dedfe0;\n    display: inline-block;\n    margin-left: -1px;\n    overflow: hidden;\n    padding-top: 24px;\n    vertical-align: top;\n    width: 162px;\n\n    &.half-column {\n      width: 99px;\n    }\n\n    &.double-column {\n      width: 324px;\n    }\n\n    &.triple-column {\n      width: 477px;\n    }\n\n    &.flexible50-column {\n      width: 50%;\n    }\n  }\n\n  .mock-flowsheet-resultcolumn-cell {\n    background-color: #fff;\n    border-bottom: 1px solid #dedfe0;\n    border-top: 1px solid #dedfe0;\n    box-sizing: border-box;\n    height: 33px;\n    margin-bottom: -1px;\n    white-space: nowrap;\n\n    &.allow-wrapping {\n      overflow: auto;\n      white-space: normal;\n      word-wrap: normal;\n    }  \n\n    &.empty {\n      height: 33px;\n    }\n\n    &.short {\n      height: 25px;\n    }\n\n    &.medium {\n      height: 41px;\n    }\n\n    &.tall {\n      height: 155px;\n    }\n\n    &.with-padding {\n      padding: 7px 7px 0;\n    }\n    \n    &.zebra {\n      background-color: #f1f1f1;\n    }\n  }\n\n  .vertical-center-align-wrapper {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    margin: 0;\n    max-height: 100%;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // Needed for IE10\n    padding: 0;\n    width: 100%;\n  }\n}\n\n")))}c.isMDXComponent=!0},932:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var l=n(0),r=n.n(l),a=n(886),o=n.n(a),c=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-result",name:"terra-clinical-result",version:"1.12.0",url:t})}}}]);