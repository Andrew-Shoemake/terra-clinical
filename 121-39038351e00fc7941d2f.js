(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1149:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(0)),r=u(n(909)),i=u(n(925));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=C(e);if(t){var l=C(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,u=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).buildSection=t.buildSection.bind(b(t)),t.buildRows=t.buildRows.bind(b(t)),t.state={selectedRow:void 0,selectedCell:void 0,columns:{"Column-0":{id:"Column-0",width:200,text:"Column 0",isResizable:!0,isSelectable:!0},"Column-1":{id:"Column-1",width:250,text:"Column 1",isResizable:!0,isSelectable:!0},"Column-2":{id:"Column-2",width:200,text:"Column 2",isResizable:!0,isSelectable:!0},"Column-3":{id:"Column-3",width:200,text:"Column 3",isResizable:!0,isSelectable:!0},"Column-4":{id:"Column-4",width:200,text:"Column 4",isResizable:!0,isSelectable:!0},"Column-5":{id:"Column-5",width:200,text:"Column 5",isResizable:!0,isSelectable:!0},"Column-6":{id:"Column-6",width:200,text:"Column 6",isResizable:!0,isSelectable:!0},"Column-7":{id:"Column-7",width:200,text:"Column 7",isResizable:!0,isSelectable:!0},"Column-8":{id:"Column-8",width:200,text:"Column 8",isResizable:!0,isSelectable:!0}},sortedColumnId:"Column-0",sortedColumnDirection:"ascending"},t}return t=a,(n=[{key:"buildRows",value:function(e,t){var n=this,o=new Array(t).fill().map((function(t,o){return{id:"Row-".concat(o),isSelectable:!0,isSelected:n.state.selectedRow&&n.state.selectedRow.sectionId===e&&n.state.selectedRow.rowId==="Row-".concat(o),cells:new Array(9).fill(0).map((function(e,t){return"Column-".concat(t)})).map((function(t){return{columnId:t,isSelectable:!0,isSelected:n.state.selectedCell&&n.state.selectedCell.sectionId===e&&n.state.selectedCell.rowId==="Row-".concat(o)&&n.state.selectedCell.columnId===t,component:l.default.createElement(i.default,{text:"Row-".concat(o,", ").concat(t)})}}))}}));return this.state.sortedColumnId&&"ascending"===this.state.sortedColumnDirection?o:o.reverse()}},{key:"buildSection",value:function(e,t,n){return{id:e,text:t,rows:this.buildRows(e,n),isCollapsible:"Section-0"===e,isCollapsed:e===this.state.collapsedSectionId}}},{key:"render",value:function(){var e=this,t=this.state.columns;return l.default.createElement(r.default,{id:"without-fill",pinnedColumns:[t["Column-0"],t["Column-1"],t["Column-2"]],overflowColumns:[t["Column-3"],t["Column-4"],t["Column-5"],t["Column-6"],t["Column-7"],t["Column-8"]],sections:[this.buildSection("Section-0","Section 0",15),this.buildSection("Section-1","Section 1",15)],onColumnSelect:function(t){var n={},o=s({},e.state.columns[t]);if(o.sortIndicator="ascending"===o.sortIndicator?"descending":"ascending",n["".concat(t)]=o,t!==e.state.sortedColumnId){var l=s({},e.state.columns[e.state.sortedColumnId]);l&&(l.sortIndicator=void 0,n["".concat(e.state.sortedColumnId)]=l)}e.setState((function(e){return{columns:s(s({},e.columns),n),sortedColumnId:t,sortedColumnDirection:o.sortIndicator}}))},onCellSelect:function(t,n,o){e.setState({selectedRow:void 0,selectedCell:{sectionId:t,rowId:n,columnId:o}})},hasSelectableRows:!0,onRowSelect:function(t,n){e.setState({selectedCell:void 0,selectedRow:{sectionId:t,rowId:n}})},hasResizableColumns:!0,onRequestColumnResize:function(t,n){var o=s({},e.state.columns[t]);o.width=Math.max(n,50),e.setState((function(e){return{columns:s(s({},e.columns),{},c({},"".concat(t),o))}}))},onRequestSectionCollapse:function(t){e.state.collapsedSectionId===t?e.setState({collapsedSectionId:void 0}):e.setState({collapsedSectionId:t})}})}}])&&d(t.prototype,n),o&&d(t,o),a}(l.default.Component);t.default=y},1391:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var o=n(0),l=n.n(o),r=n(288),i=n(1149),u=n.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={};function d(e){var t=e.components,n=s(e,["components"]);return Object(r.mdx)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\n\nimport ContentCellLayout from './ContentCellLayout';\n\nclass DatagridWithoutFill extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n    this.buildRows = this.buildRows.bind(this);\n\n    this.state = {\n      selectedRow: undefined,\n      selectedCell: undefined,\n      columns: {\n        'Column-0': {\n          id: 'Column-0',\n          width: 200,\n          text: 'Column 0',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-1': {\n          id: 'Column-1',\n          width: 250,\n          text: 'Column 1',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-2': {\n          id: 'Column-2',\n          width: 200,\n          text: 'Column 2',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-3': {\n          id: 'Column-3',\n          width: 200,\n          text: 'Column 3',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-4': {\n          id: 'Column-4',\n          width: 200,\n          text: 'Column 4',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-5': {\n          id: 'Column-5',\n          width: 200,\n          text: 'Column 5',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-6': {\n          id: 'Column-6',\n          width: 200,\n          text: 'Column 6',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-7': {\n          id: 'Column-7',\n          width: 200,\n          text: 'Column 7',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-8': {\n          id: 'Column-8',\n          width: 200,\n          text: 'Column 8',\n          isResizable: true,\n          isSelectable: true,\n        },\n      },\n      sortedColumnId: 'Column-0',\n      sortedColumnDirection: 'ascending',\n    };\n  }\n\n  buildRows(sectionId, num) {\n    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({\n      id: `Row-${rowIndex}`,\n      isSelectable: true,\n      isSelected: this.state.selectedRow && this.state.selectedRow.sectionId === sectionId && this.state.selectedRow.rowId === `Row-${rowIndex}`,\n      cells: ((new Array(9).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({\n        columnId: columnKey,\n        isSelectable: true,\n        isSelected: this.state.selectedCell && this.state.selectedCell.sectionId === sectionId && this.state.selectedCell.rowId === `Row-${rowIndex}` && this.state.selectedCell.columnId === columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,\n      })),\n    }));\n\n    return this.state.sortedColumnId && this.state.sortedColumnDirection === 'ascending' ? rows : rows.reverse();\n  }\n\n  buildSection(sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      rows: this.buildRows(sectionId, numberOfRows),\n      isCollapsible: sectionId === 'Section-0',\n      isCollapsed: sectionId === this.state.collapsedSectionId,\n    };\n  }\n\n  render() {\n    const { columns } = this.state;\n\n    return (\n      <DataGrid\n        id=\"without-fill\"\n        pinnedColumns={[\n          columns['Column-0'],\n          columns['Column-1'],\n          columns['Column-2'],\n        ]}\n        overflowColumns={[\n          columns['Column-3'],\n          columns['Column-4'],\n          columns['Column-5'],\n          columns['Column-6'],\n          columns['Column-7'],\n          columns['Column-8'],\n        ]}\n        sections={[\n          this.buildSection('Section-0', 'Section 0', 15),\n          this.buildSection('Section-1', 'Section 1', 15),\n        ]}\n        onColumnSelect={(columnId) => {\n          const newColumns = {};\n\n          const columnToSort = { ...this.state.columns[columnId] };\n          columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n          newColumns[`${columnId}`] = columnToSort;\n\n          if (columnId !== this.state.sortedColumnId) {\n            const previouslySortedColumn = { ...this.state.columns[this.state.sortedColumnId] };\n            if (previouslySortedColumn) {\n              previouslySortedColumn.sortIndicator = undefined;\n              newColumns[`${this.state.sortedColumnId}`] = previouslySortedColumn;\n            }\n          }\n\n          this.setState(prevState => ({\n            columns: { ...prevState.columns, ...newColumns },\n            sortedColumnId: columnId,\n            sortedColumnDirection: columnToSort.sortIndicator,\n          }));\n        }}\n        onCellSelect={(sectionId, rowId, columnId) => {\n          this.setState({\n            selectedRow: undefined,\n            selectedCell: {\n              sectionId,\n              rowId,\n              columnId,\n            },\n          });\n        }}\n        hasSelectableRows\n        onRowSelect={(sectionId, rowId) => {\n          this.setState({\n            selectedCell: undefined,\n            selectedRow: {\n              sectionId,\n              rowId,\n            },\n          });\n        }}\n        hasResizableColumns\n        onRequestColumnResize={(columnId, width) => {\n          const columnToUpdate = { ...this.state.columns[columnId] };\n          columnToUpdate.width = Math.max(width, 50);\n          this.setState(prevState => (\n            { columns: { ...prevState.columns, [`${columnId}`]: columnToUpdate } }\n          ));\n        }}\n        onRequestSectionCollapse={(sectionId) => {\n          if (this.state.collapsedSectionId === sectionId) {\n            this.setState({ collapsedSectionId: undefined });\n          } else {\n            this.setState({ collapsedSectionId: sectionId });\n          }\n        }}\n      />\n    );\n  }\n}\n\nexport default DatagridWithoutFill;\n\n")))}d.isMDXComponent=!0;var m=n(879),f=n.n(m),p=function(e){var t=e.title,n=e.description,o=e.isExpanded;return l.a.createElement(f.a,{title:t||"Datagrid Without Fill",description:n,example:l.a.createElement(u.a,null),exampleSrc:l.a.createElement(d,null),isExpanded:o})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y={};function h(e){var t=e.components,n=C(e,["components"]);return Object(r.mdx)("wrapper",b({},y,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(p,{description:"This example does not set the fill property, \nallowing the DataGrid to layout with its natural block styling. \nMarkup adjustments are made to improve overall performance.",mdxType:"DatagridWithoutFill"}))}h.isMDXComponent=!0},879:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=m(n(1)),i=m(n(3)),u=n(85),a=m(n(898)),s=m(n(194)),c=n(289),d=m(n(899));function m(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,l=!1,r=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==u.return||u.return()}finally{if(l)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var C=i.default.bind(d.default),y={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},S=function(e){var t=e.example,n=e.exampleSrc,o=e.exampleCssSrc,r=e.title,i=e.description,d=e.isExpanded,m=p((0,l.useState)(d),2),f=m[0],b=m[1],y=p((0,l.useState)(!1),2),S=y[0],v=y[1],_=l.default.useContext(u.ThemeContext),x=void 0!==o,I=function(){v(!S),f&&b(!f)},g=function(){b(!f),S&&v(!S)},O=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:C("template",_.className)},l.default.createElement("div",{className:C("header")},r&&l.default.createElement("h2",{className:C("title")},r)),l.default.createElement("div",{className:C("content")},i&&l.default.createElement("div",{className:C("description")},i),t),l.default.createElement("div",{className:C("footer")},n?l.default.createElement("div",{className:C("button-container")},x&&l.default.createElement("button",{type:"button",className:C("css-toggle","item",{"is-selected":S}),onClick:I,onKeyDown:function(e){return O(e,I)},onBlur:h,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(a.default,{className:C("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(s.default,{className:C("chevron")})),l.default.createElement("button",{type:"button",className:C("code-toggle","item",{"is-selected":f}),onClick:g,onKeyDown:function(e){return O(e,g)},onBlur:h,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(a.default,{className:C("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(s.default,{className:C("chevron")}))):null,l.default.createElement("div",null,S&&l.default.createElement("div",{className:C("css")},o),f&&l.default.createElement("div",{className:C("code")},n))))};S.propTypes=y,S.defaultProps={isExpanded:!1};var v=S;t.default=v},898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),l=r(n(16));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=function(e){var t=i({},e);return o.default.createElement(l.default,t,o.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var a=u;t.default=a},899:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},925:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),l=u(n(1)),r=u(n(3)),i=u(n(926));function u(e){return e&&e.__esModule?e:{default:e}}var a=r.default.bind(i.default),s={text:l.default.string},c=function(e){var t=e.text;return o.default.createElement("div",{className:a("content-cell")},t)};c.propTypes=s;var d=c;t.default=d},926:function(e,t,n){"use strict";n.r(t),t.default={"content-cell":"ContentCellLayout__content-cell___2UK4Z"}}}]);