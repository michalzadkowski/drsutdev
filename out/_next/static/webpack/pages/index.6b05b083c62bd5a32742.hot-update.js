webpackHotUpdate_N_E("pages/index",{

/***/ "./components/alert.js":
/*!*****************************!*\
  !*** ./components/alert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alert; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"./components/container.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\nvar _jsxFileName = \"/Volumes/personal/cms-prismic-app/components/alert.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Alert(_ref) {\n  var preview = _ref.preview;\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('border-b', {\n      'bg-accent-7 border-accent-7 text-white': preview,\n      'bg-accent-1 border-accent-2': !preview\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"py-2 text-center text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, preview ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"This is page is a preview.\", ' ', __jsx(\"a\", {\n    href: \"/api/exit-preview\",\n    className: \"underline hover:text-cyan duration-200 transition-colors\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 15\n    }\n  }, \"Click here\"), ' ', \"to exit preview mode.\") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"The sousrce code for this blog is\", ' ', __jsx(\"a\", {\n    href: \"https://github.com/vercel/next.js/tree/canary/examples/\".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_3__[\"EXAMPLE_PATH\"]),\n    className: \"underline hover:text-success duration-200 transition-colors\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, \"available on GitHub\"), \".\"))));\n}\n_c = Alert;\n\nvar _c;\n\n$RefreshReg$(_c, \"Alert\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbGVydC5qcz8yMjllIl0sIm5hbWVzIjpbIkFsZXJ0IiwicHJldmlldyIsImNuIiwiRVhBTVBMRV9QQVRIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBNEI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDekMsU0FDRTtBQUNFLGFBQVMsRUFBRUMsaURBQUUsQ0FBQyxVQUFELEVBQWE7QUFDeEIsZ0RBQTBDRCxPQURsQjtBQUV4QixxQ0FBK0IsQ0FBQ0E7QUFGUixLQUFiLENBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsT0FBTyxHQUNOLGlHQUM2QixHQUQ3QixFQUVFO0FBQ0UsUUFBSSxFQUFDLG1CQURQO0FBRUUsYUFBUyxFQUFDLDBEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFPTyxHQVBQLDBCQURNLEdBWU4sd0dBQ29DLEdBRHBDLEVBRUU7QUFDRSxRQUFJLG1FQUE0REUsMkRBQTVELENBRE47QUFFRSxhQUFTLEVBQUMsNkRBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixNQWJKLENBREYsQ0FORixDQURGO0FBb0NEO0tBckN1QkgsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWxlcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBFWEFNUExFX1BBVEggfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCh7IHByZXZpZXcgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oJ2JvcmRlci1iJywge1xuICAgICAgICAnYmctYWNjZW50LTcgYm9yZGVyLWFjY2VudC03IHRleHQtd2hpdGUnOiBwcmV2aWV3LFxuICAgICAgICAnYmctYWNjZW50LTEgYm9yZGVyLWFjY2VudC0yJzogIXByZXZpZXcsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdGV4dC1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgIHtwcmV2aWV3ID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIGEgcHJldmlldy57JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBpL2V4aXQtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGhvdmVyOnRleHQtY3lhbiBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xpY2sgaGVyZVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgdG8gZXhpdCBwcmV2aWV3IG1vZGUuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgVGhlIHNvdXNyY2UgY29kZSBmb3IgdGhpcyBibG9nIGlzeycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzLyR7RVhBTVBMRV9QQVRIfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGhvdmVyOnRleHQtc3VjY2VzcyBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlIG9uIEdpdEh1YlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/alert.js\n");

/***/ })

})