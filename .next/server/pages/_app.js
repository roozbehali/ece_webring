/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/MemberContext.jsx":
/*!***************************************!*\
  !*** ./src/context/MemberContext.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MemberProvider: () => (/* binding */ MemberProvider),\n/* harmony export */   useMember: () => (/* binding */ useMember)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// global context accessible by every child in the component tree\n// updated in 'search' onMouseEnter, used for image display\nconst MemberContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst MemberProvider = ({ children })=>{\n    // note: member.item is not a list, it is an object\n    const [memberItem, setMemberItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"select profile.\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MemberContext.Provider, {\n        value: {\n            memberItem,\n            setMemberItem\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\context\\\\MemberContext.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\nconst useMember = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MemberContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9NZW1iZXJDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTREO0FBRTVELGlFQUFpRTtBQUNqRSwyREFBMkQ7QUFDM0QsTUFBTUcsOEJBQWdCSCxvREFBYUEsQ0FBQyxDQUFDO0FBRTlCLE1BQU1JLGlCQUFpQixDQUFDLEVBQUNDLFFBQVEsRUFBQztJQUN2QyxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO1FBQUNNLE1BQU07SUFBaUI7SUFFckUscUJBQ0UsOERBQUNMLGNBQWNNLFFBQVE7UUFBQ0MsT0FBTztZQUFFSjtZQUFZQztRQUFjO2tCQUN4REY7Ozs7OztBQUdQLEVBQUM7QUFFTSxNQUFNTSxZQUFZLElBQU1WLGlEQUFVQSxDQUFDRSxlQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNlX3dlYnJpbmcvLi9zcmMvY29udGV4dC9NZW1iZXJDb250ZXh0LmpzeD81NjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gZ2xvYmFsIGNvbnRleHQgYWNjZXNzaWJsZSBieSBldmVyeSBjaGlsZCBpbiB0aGUgY29tcG9uZW50IHRyZWVcclxuLy8gdXBkYXRlZCBpbiAnc2VhcmNoJyBvbk1vdXNlRW50ZXIsIHVzZWQgZm9yIGltYWdlIGRpc3BsYXlcclxuY29uc3QgTWVtYmVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbWJlclByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAvLyBub3RlOiBtZW1iZXIuaXRlbSBpcyBub3QgYSBsaXN0LCBpdCBpcyBhbiBvYmplY3RcclxuICBjb25zdCBbbWVtYmVySXRlbSwgc2V0TWVtYmVySXRlbV0gPSB1c2VTdGF0ZSh7bmFtZTogJ3NlbGVjdCBwcm9maWxlLid9KTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbWJlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWVtYmVySXRlbSwgc2V0TWVtYmVySXRlbSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9NZW1iZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1lbWJlciA9ICgpID0+IHVzZUNvbnRleHQoTWVtYmVyQ29udGV4dCkiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIk1lbWJlckNvbnRleHQiLCJNZW1iZXJQcm92aWRlciIsImNoaWxkcmVuIiwibWVtYmVySXRlbSIsInNldE1lbWJlckl0ZW0iLCJuYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZU1lbWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/MemberContext.jsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_MemberContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/MemberContext */ \"./src/context/MemberContext.jsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MemberContext__WEBPACK_IMPORTED_MODULE_2__.MemberProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBQzJCO0FBRTFDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILGtFQUFjQTtrQkFDYiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VjZV93ZWJyaW5nLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgeyBNZW1iZXJQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvTWVtYmVyQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVtYmVyUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTWVtYmVyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWVtYmVyUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();