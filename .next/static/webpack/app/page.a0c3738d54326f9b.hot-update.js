"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Features/Features.jsx":
/*!**************************************************!*\
  !*** ./src/app/components/Features/Features.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* __next_internal_client_entry_do_not_use__ default auto */ // import {\n//   ArrowBigLeft,\n//   ArrowBigRight,\n//   ArrowLeft,\n//   ArrowRight,\n// } from \"lucide-react\";\n// import { features } from \"../Data\";\n// import FeatureCard from \"./FeatureCard\";\n// import { AnimatePresence, motion } from \"framer-motion\";\n// import { useState } from \"react\";\n// const Features = () => {\n//   const [activeIndex, setActiveIndex] = useState(0);\n//   const moveForward = () =>\n//     setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);\n//   const moveBackward = () =>\n//     setActiveIndex(\n//       (prevIndex) => (prevIndex - 1 + features.length) % features.length\n//     );\n//   return (\n//     <>\n//       <main className=\"w-full flex flex-col gap-10 max-w-7xl m-auto\">\n//         <div className=\"w-full h-[80vh]\">\n//           <AnimatePresence>\n//             {features.map(\n//               (feature, i) =>\n//                 i === activeIndex && (\n//                   <motion.div className=\"w-full h-full\" key={i}>\n//                     <FeatureCard activeIndex={activeIndex} feature={feature} />\n//                   </motion.div>\n//                 )\n//             )}\n//           </AnimatePresence>\n//         </div>\n//         <div className=\"flex gap-2 items-center justify-end px-8\">\n//           <button\n//             onClick={(e) => {\n//               // e.preventDefault();\n//               moveBackward();\n//             }}\n//             className=\"size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center\"\n//           >\n//             <ArrowLeft />\n//           </button>\n//           <button\n//             onClick={(e) => {\n//               // e.preventDefault();\n//               moveForward();\n//             }}\n//             className=\"size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center\"\n//           >\n//             <ArrowRight />\n//           </button>\n//         </div>\n//       </main>\n//     </>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9GZWF0dXJlcy9GZWF0dXJlcy5qc3giLCJtYXBwaW5ncyI6Ijs2REFFQSxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6QixzQ0FBc0M7QUFDdEMsMkNBQTJDO0FBQzNDLDJEQUEyRDtBQUMzRCxvQ0FBb0M7QUFFcEMsMkJBQTJCO0FBQzNCLHVEQUF1RDtBQUV2RCw4QkFBOEI7QUFDOUIsd0VBQXdFO0FBQ3hFLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEIsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxhQUFhO0FBQ2IsU0FBUztBQUNULHdFQUF3RTtBQUN4RSw0Q0FBNEM7QUFDNUMsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMseUNBQXlDO0FBQ3pDLG1FQUFtRTtBQUNuRSxrRkFBa0Y7QUFDbEYsa0NBQWtDO0FBQ2xDLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUVqQixxRUFBcUU7QUFDckUsb0JBQW9CO0FBQ3BCLGdDQUFnQztBQUNoQyx1Q0FBdUM7QUFDdkMsZ0NBQWdDO0FBQ2hDLGlCQUFpQjtBQUNqQixxSEFBcUg7QUFDckgsY0FBYztBQUNkLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLGdDQUFnQztBQUNoQyx1Q0FBdUM7QUFDdkMsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUNqQixxSEFBcUg7QUFDckgsY0FBYztBQUNkLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixVQUFVO0FBQ1YsT0FBTztBQUNQLEtBQUs7QUFFTCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRmVhdHVyZXMvRmVhdHVyZXMuanN4PzFlMGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIGltcG9ydCB7XG4vLyAgIEFycm93QmlnTGVmdCxcbi8vICAgQXJyb3dCaWdSaWdodCxcbi8vICAgQXJyb3dMZWZ0LFxuLy8gICBBcnJvd1JpZ2h0LFxuLy8gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG4vLyBpbXBvcnQgeyBmZWF0dXJlcyB9IGZyb20gXCIuLi9EYXRhXCI7XG4vLyBpbXBvcnQgRmVhdHVyZUNhcmQgZnJvbSBcIi4vRmVhdHVyZUNhcmRcIjtcbi8vIGltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGNvbnN0IEZlYXR1cmVzID0gKCkgPT4ge1xuLy8gICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4vLyAgIGNvbnN0IG1vdmVGb3J3YXJkID0gKCkgPT5cbi8vICAgICBzZXRBY3RpdmVJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSBmZWF0dXJlcy5sZW5ndGgpO1xuLy8gICBjb25zdCBtb3ZlQmFja3dhcmQgPSAoKSA9PlxuLy8gICAgIHNldEFjdGl2ZUluZGV4KFxuLy8gICAgICAgKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCAtIDEgKyBmZWF0dXJlcy5sZW5ndGgpICUgZmVhdHVyZXMubGVuZ3RoXG4vLyAgICAgKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTEwIG1heC13LTd4bCBtLWF1dG9cIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bODB2aF1cIj5cbi8vICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuLy8gICAgICAgICAgICAge2ZlYXR1cmVzLm1hcChcbi8vICAgICAgICAgICAgICAgKGZlYXR1cmUsIGkpID0+XG4vLyAgICAgICAgICAgICAgICAgaSA9PT0gYWN0aXZlSW5kZXggJiYgKFxuLy8gICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIGtleT17aX0+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IGZlYXR1cmU9e2ZlYXR1cmV9IC8+XG4vLyAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4vLyAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgKX1cbi8vICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBweC04XCI+XG4vLyAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbi8vICAgICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgICBtb3ZlQmFja3dhcmQoKTtcbi8vICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLTE2IG1kOnNpemUtMjAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZ3JlZW4tNjAwIHRleHQtYmxhY2sgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIlxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxBcnJvd0xlZnQgLz5cbi8vICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuLy8gICAgICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICAgIG1vdmVGb3J3YXJkKCk7XG4vLyAgICAgICAgICAgICB9fVxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS0xNiBtZDpzaXplLTIwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyZWVuLTYwMCB0ZXh0LWJsYWNrIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCJcbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8QXJyb3dSaWdodCAvPlxuLy8gICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvbWFpbj5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVzO1xuIl0sIm5hbWVzIjpbIkZlYXR1cmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Features/Features.jsx\n"));

/***/ })

});