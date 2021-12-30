/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/compdirection.js":
/*!******************************!*\
  !*** ./src/compdirection.js ***!
  \******************************/
/***/ (function(module) {

eval("function Compdirection(direction) {\n  this.direction = direction;\n}\n\nCompdirection.prototype.display = function (ctx) {\n  ctx.font = \"30px Arial\";\n  ctx.strokeText(this.direction, 10, 50);\n};\n\nmodule.exports = Compdirection;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2NvbXBkaXJlY3Rpb24uanM/MjhmMSJdLCJuYW1lcyI6WyJDb21wZGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwicHJvdG90eXBlIiwiZGlzcGxheSIsImN0eCIsImZvbnQiLCJzdHJva2VUZXh0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBR0EsU0FBU0EsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0M7QUFDOUIsT0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7QUFFREQsYUFBYSxDQUFDRSxTQUFkLENBQXdCQyxPQUF4QixHQUFrQyxVQUFTQyxHQUFULEVBQWM7QUFDNUNBLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXLFlBQVg7QUFDQUQsRUFBQUEsR0FBRyxDQUFDRSxVQUFKLENBQWUsS0FBS0wsU0FBcEIsRUFBK0IsRUFBL0IsRUFBbUMsRUFBbkM7QUFDSCxDQUhEOztBQUtBTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZnVuY3Rpb24gQ29tcGRpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiBcbn1cblxuQ29tcGRpcmVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LnN0cm9rZVRleHQodGhpcy5kaXJlY3Rpb24sIDEwLCA1MCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGRpcmVjdGlvbjsiXSwiZmlsZSI6Ii4vc3JjL2NvbXBkaXJlY3Rpb24uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/compdirection.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  console.log(\"Webpack is working!\");\n  var text = new Compdirection(\"North\");\n  text.display(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQTdCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFDQyxLQUFELEVBQVc7QUFDckQsTUFBTUMsTUFBTSxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFFQSxNQUFNQyxJQUFJLEdBQUcsSUFBSVgsYUFBSixDQUFrQixPQUFsQixDQUFiO0FBQ0FXLEVBQUFBLElBQUksQ0FBQ0MsT0FBTCxDQUFhTCxHQUFiO0FBRUgsQ0FSRCIsInNvdXJjZXMiOlsid2VicGFjazovL0pTLVByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21wZGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY29tcGRpcmVjdGlvbi5qc1wiKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKVxuXG4gICAgY29uc3QgdGV4dCA9IG5ldyBDb21wZGlyZWN0aW9uKFwiTm9ydGhcIilcbiAgICB0ZXh0LmRpc3BsYXkoY3R4KVxuXG59KTtcbiJdLCJuYW1lcyI6WyJDb21wZGlyZWN0aW9uIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;