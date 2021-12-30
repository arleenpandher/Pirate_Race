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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\nvar CONSTANTS = {\n  DIRECTIONS: [\"North\", \"South\", \"East\", \"West\"],\n  NUM_DIRS: 5,\n  DIM_X: 600,\n  DIM_Y: 600\n};\n\nfunction Game() {\n  this.directions = [];\n  this.addDirections();\n}\n\nGame.prototype.addDirections = function () {\n  for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {\n    this.directions.push(new Compdirection(this.randomdirectiongenerator()));\n  }\n};\n\nGame.prototype.randomdirectiongenerator = function () {\n  var randomnum = Math.floor(4 * Math.random());\n  return CONSTANTS.DIRECTIONS[randomnum];\n};\n\nGame.prototype.draw = function (ctx) {\n  for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {\n    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    this.directions[i].display(ctx);\n    i++;\n  }\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBN0I7O0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2RDLEVBQUFBLFVBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLE1BQTNCLENBREU7QUFFZEMsRUFBQUEsUUFBUSxFQUFFLENBRkk7QUFHZEMsRUFBQUEsS0FBSyxFQUFFLEdBSE87QUFJZEMsRUFBQUEsS0FBSyxFQUFFO0FBSk8sQ0FBbEI7O0FBT0EsU0FBU0MsSUFBVCxHQUFnQjtBQUNaLE9BQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLQyxhQUFMO0FBQ0g7O0FBRURGLElBQUksQ0FBQ0csU0FBTCxDQUFlRCxhQUFmLEdBQStCLFlBQVc7QUFDdEMsT0FBS0UsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHVCxTQUFTLENBQUNFLFFBQTFCLEVBQW9DTyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLFNBQUtILFVBQUwsQ0FBZ0JJLElBQWhCLENBQXFCLElBQUlaLGFBQUosQ0FBa0IsS0FBS2Esd0JBQUwsRUFBbEIsQ0FBckI7QUFDSDtBQUNKLENBSkQ7O0FBTUFOLElBQUksQ0FBQ0csU0FBTCxDQUFlRyx3QkFBZixHQUEwQyxZQUFXO0FBQ2pELE1BQUlDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBSUQsSUFBSSxDQUFDRSxNQUFMLEVBQWYsQ0FBaEI7QUFDQSxTQUFPZixTQUFTLENBQUNDLFVBQVYsQ0FBcUJXLFNBQXJCLENBQVA7QUFDSCxDQUhEOztBQUtBUCxJQUFJLENBQUNHLFNBQUwsQ0FBZVEsSUFBZixHQUFzQixVQUFTQyxHQUFULEVBQWM7QUFDaEMsT0FBS1IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHVCxTQUFTLENBQUNFLFFBQTFCLEVBQW9DTyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDUSxJQUFBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CbEIsU0FBUyxDQUFDRyxLQUE5QixFQUFxQ0gsU0FBUyxDQUFDSSxLQUEvQztBQUNBYSxJQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0IsTUFBaEI7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQnBCLFNBQVMsQ0FBQ0csS0FBN0IsRUFBcUNILFNBQVMsQ0FBQ0ksS0FBL0M7QUFDQSxTQUFLRSxVQUFMLENBQWdCRyxDQUFoQixFQUFtQlksT0FBbkIsQ0FBMkJKLEdBQTNCO0FBQ0FSLElBQUFBLENBQUM7QUFDSjtBQUNKLENBUkQ7O0FBWUFhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlMtUHJvamVjdC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tcGRpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2NvbXBkaXJlY3Rpb24uanNcIilcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIERJUkVDVElPTlM6IFtcIk5vcnRoXCIsIFwiU291dGhcIiwgXCJFYXN0XCIsIFwiV2VzdFwiXSxcbiAgICBOVU1fRElSUzogNSxcbiAgICBESU1fWDogNjAwLFxuICAgIERJTV9ZOiA2MDAsXG59O1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdXG4gICAgdGhpcy5hZGREaXJlY3Rpb25zKClcbn1cblxuR2FtZS5wcm90b3R5cGUuYWRkRGlyZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBDT05TVEFOVFMuTlVNX0RJUlM7IGkrKykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgQ29tcGRpcmVjdGlvbih0aGlzLnJhbmRvbWRpcmVjdGlvbmdlbmVyYXRvcigpKSlcbiAgICB9XG59XG5cbkdhbWUucHJvdG90eXBlLnJhbmRvbWRpcmVjdGlvbmdlbmVyYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByYW5kb21udW0gPSBNYXRoLmZsb29yKDQgKiBNYXRoLnJhbmRvbSgpKVxuICAgIHJldHVybiBDT05TVEFOVFMuRElSRUNUSU9OU1tyYW5kb21udW1dXG59XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgQ09OU1RBTlRTLk5VTV9ESVJTOyBpKyspIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBDT05TVEFOVFMuRElNX1gsIENPTlNUQU5UUy5ESU1fWSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIENPTlNUQU5UUy5ESU1fWCwgIENPTlNUQU5UUy5ESU1fWSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uc1tpXS5kaXNwbGF5KGN0eClcbiAgICAgICAgaSsrXG4gICAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG4iXSwibmFtZXMiOlsiQ29tcGRpcmVjdGlvbiIsInJlcXVpcmUiLCJDT05TVEFOVFMiLCJESVJFQ1RJT05TIiwiTlVNX0RJUlMiLCJESU1fWCIsIkRJTV9ZIiwiR2FtZSIsImRpcmVjdGlvbnMiLCJhZGREaXJlY3Rpb25zIiwicHJvdG90eXBlIiwiaSIsInB1c2giLCJyYW5kb21kaXJlY3Rpb25nZW5lcmF0b3IiLCJyYW5kb21udW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkaXNwbGF5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\nvar Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  console.log(\"Webpack is working!\"); // const text = new Compdirection(\"North\")\n  // text.display(ctx)\n\n  var game = new Game();\n  console.log(game.directions);\n  game.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQTdCOztBQUNBLElBQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFwQjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JELE1BQU1DLE1BQU0sR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBSHFELENBS3JEO0FBQ0E7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlWLElBQUosRUFBYjtBQUNBUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxVQUFqQjtBQUNBRCxFQUFBQSxJQUFJLENBQUNFLElBQUwsQ0FBVU4sR0FBVjtBQUVILENBWkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tcGRpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2NvbXBkaXJlY3Rpb24uanNcIilcbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9nYW1lLmpzXCIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5cbiAgICAvLyBjb25zdCB0ZXh0ID0gbmV3IENvbXBkaXJlY3Rpb24oXCJOb3J0aFwiKVxuICAgIC8vIHRleHQuZGlzcGxheShjdHgpXG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKVxuICAgIGNvbnNvbGUubG9nKGdhbWUuZGlyZWN0aW9ucylcbiAgICBnYW1lLmRyYXcoY3R4KVxuXG59KTtcbiJdLCJuYW1lcyI6WyJDb21wZGlyZWN0aW9uIiwicmVxdWlyZSIsIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiZGlyZWN0aW9ucyIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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