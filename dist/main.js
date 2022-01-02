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

eval("function Compdirection(direction, color) {\n  this.direction = direction;\n  this.color = color;\n}\n\nCompdirection.prototype.display = function (ctx) {\n  ctx.font = \"30px Arial\";\n  ctx.fillStyle = this.color;\n  ctx.fillText(this.direction, 180, 50); // ctx.strokeText(this.direction, 180, 50);\n};\n\nmodule.exports = Compdirection;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2NvbXBkaXJlY3Rpb24uanM/MjhmMSJdLCJuYW1lcyI6WyJDb21wZGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiY29sb3IiLCJwcm90b3R5cGUiLCJkaXNwbGF5IiwiY3R4IiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBR0EsU0FBU0EsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQ3JDLE9BQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7O0FBRURGLGFBQWEsQ0FBQ0csU0FBZCxDQUF3QkMsT0FBeEIsR0FBa0MsVUFBU0MsR0FBVCxFQUFjO0FBQzVDQSxFQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVyxZQUFYO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixLQUFLTCxLQUFyQjtBQUNBRyxFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYSxLQUFLUCxTQUFsQixFQUE2QixHQUE3QixFQUFrQyxFQUFsQyxFQUg0QyxDQUk1QztBQUVILENBTkQ7O0FBUUFRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5mdW5jdGlvbiBDb21wZGlyZWN0aW9uKGRpcmVjdGlvbiwgY29sb3IpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiBcbiAgICB0aGlzLmNvbG9yID0gY29sb3Jcbn1cblxuQ29tcGRpcmVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcbiAgICBjdHguZmlsbFRleHQodGhpcy5kaXJlY3Rpb24sIDE4MCwgNTApXG4gICAgLy8gY3R4LnN0cm9rZVRleHQodGhpcy5kaXJlY3Rpb24sIDE4MCwgNTApO1xuICAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBkaXJlY3Rpb247Il0sImZpbGUiOiIuL3NyYy9jb21wZGlyZWN0aW9uLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/compdirection.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\nvar CONSTANTS = {\n  DIRECTIONS: [\"North\", \"South\", \"East\", \"West\"],\n  NUM_DIRS: 5,\n  DIM_X: 600,\n  DIM_Y: 600,\n  COLOR: [\"red\", \"blue\"]\n};\n\nfunction Game() {\n  this.directions = [];\n  this.addDirections();\n}\n\nGame.prototype.addDirections = function () {\n  for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {\n    this.directions.push(new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator()));\n  }\n};\n\nGame.prototype.randomdirectiongenerator = function () {\n  var randomnum = Math.floor(4 * Math.random());\n  return CONSTANTS.DIRECTIONS[randomnum];\n};\n\nGame.prototype.randomtypegenerator = function () {\n  var randomtype = Math.floor(2 * Math.random());\n  return CONSTANTS.COLOR[randomtype];\n};\n\nGame.prototype.draw = function (ctx) {// let that = this\n  // for (var i = 0; i < CONSTANTS.NUM_DIRS; i++) {\n  //     ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n  //     ctx.fillStyle = \"gray\";\n  //     ctx.fillRect(0, 0, CONSTANTS.DIM_X,  CONSTANTS.DIM_Y);\n  //     setInterval(() => {\n  //         console.log(i)}, 3000)\n  // }\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBN0I7O0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2RDLEVBQUFBLFVBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLE1BQTNCLENBREU7QUFFZEMsRUFBQUEsUUFBUSxFQUFFLENBRkk7QUFHZEMsRUFBQUEsS0FBSyxFQUFFLEdBSE87QUFJZEMsRUFBQUEsS0FBSyxFQUFFLEdBSk87QUFLZEMsRUFBQUEsS0FBSyxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVI7QUFMTyxDQUFsQjs7QUFRQSxTQUFTQyxJQUFULEdBQWdCO0FBQ1osT0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtDLGFBQUw7QUFDSDs7QUFFREYsSUFBSSxDQUFDRyxTQUFMLENBQWVELGFBQWYsR0FBK0IsWUFBVztBQUN0QyxPQUFLRSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdWLFNBQVMsQ0FBQ0UsUUFBMUIsRUFBb0NRLENBQUMsRUFBckMsRUFBeUM7QUFDckMsU0FBS0gsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUIsSUFBSWIsYUFBSixDQUFrQixLQUFLYyx3QkFBTCxFQUFsQixFQUFtRCxLQUFLQyxtQkFBTCxFQUFuRCxDQUFyQjtBQUNIO0FBQ0osQ0FKRDs7QUFNQVAsSUFBSSxDQUFDRyxTQUFMLENBQWVHLHdCQUFmLEdBQTBDLFlBQVc7QUFDakQsTUFBSUUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJRCxJQUFJLENBQUNFLE1BQUwsRUFBZixDQUFoQjtBQUNBLFNBQU9qQixTQUFTLENBQUNDLFVBQVYsQ0FBcUJhLFNBQXJCLENBQVA7QUFDSCxDQUhEOztBQUtBUixJQUFJLENBQUNHLFNBQUwsQ0FBZUksbUJBQWYsR0FBcUMsWUFBVztBQUM1QyxNQUFJSyxVQUFVLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUVELElBQUksQ0FBQ0UsTUFBTCxFQUFiLENBQWpCO0FBQ0EsU0FBT2pCLFNBQVMsQ0FBQ0ssS0FBVixDQUFnQmEsVUFBaEIsQ0FBUDtBQUNILENBSEQ7O0FBS0FaLElBQUksQ0FBQ0csU0FBTCxDQUFlVSxJQUFmLEdBQXNCLFVBQVNDLEdBQVQsRUFBYyxDQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUgsQ0FWRDs7QUFnQkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhCLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlMtUHJvamVjdC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tcGRpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2NvbXBkaXJlY3Rpb24uanNcIilcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIERJUkVDVElPTlM6IFtcIk5vcnRoXCIsIFwiU291dGhcIiwgXCJFYXN0XCIsIFwiV2VzdFwiXSxcbiAgICBOVU1fRElSUzogNSxcbiAgICBESU1fWDogNjAwLFxuICAgIERJTV9ZOiA2MDAsXG4gICAgQ09MT1I6IFtcInJlZFwiLCBcImJsdWVcIl1cbn07XG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgdGhpcy5kaXJlY3Rpb25zID0gW11cbiAgICB0aGlzLmFkZERpcmVjdGlvbnMoKVxufVxuXG5HYW1lLnByb3RvdHlwZS5hZGREaXJlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IENPTlNUQU5UUy5OVU1fRElSUzsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBDb21wZGlyZWN0aW9uKHRoaXMucmFuZG9tZGlyZWN0aW9uZ2VuZXJhdG9yKCksIHRoaXMucmFuZG9tdHlwZWdlbmVyYXRvcigpKSlcbiAgICB9XG59XG5cbkdhbWUucHJvdG90eXBlLnJhbmRvbWRpcmVjdGlvbmdlbmVyYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByYW5kb21udW0gPSBNYXRoLmZsb29yKDQgKiBNYXRoLnJhbmRvbSgpKVxuICAgIHJldHVybiBDT05TVEFOVFMuRElSRUNUSU9OU1tyYW5kb21udW1dXG59XG5cbkdhbWUucHJvdG90eXBlLnJhbmRvbXR5cGVnZW5lcmF0b3IgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmFuZG9tdHlwZSA9IE1hdGguZmxvb3IoMipNYXRoLnJhbmRvbSgpKVxuICAgIHJldHVybiBDT05TVEFOVFMuQ09MT1JbcmFuZG9tdHlwZV1cbn1cblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIC8vIGxldCB0aGF0ID0gdGhpc1xuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgQ09OU1RBTlRTLk5VTV9ESVJTOyBpKyspIHtcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBDT05TVEFOVFMuRElNX1gsIENPTlNUQU5UUy5ESU1fWSk7XG4gICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcImdyYXlcIjtcbiAgICAvLyAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIENPTlNUQU5UUy5ESU1fWCwgIENPTlNUQU5UUy5ESU1fWSk7XG4gICAgLy8gICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGkpfSwgMzAwMClcbiAgICAvLyB9XG4gICAgXG59XG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG4iXSwibmFtZXMiOlsiQ29tcGRpcmVjdGlvbiIsInJlcXVpcmUiLCJDT05TVEFOVFMiLCJESVJFQ1RJT05TIiwiTlVNX0RJUlMiLCJESU1fWCIsIkRJTV9ZIiwiQ09MT1IiLCJHYW1lIiwiZGlyZWN0aW9ucyIsImFkZERpcmVjdGlvbnMiLCJwcm90b3R5cGUiLCJpIiwicHVzaCIsInJhbmRvbWRpcmVjdGlvbmdlbmVyYXRvciIsInJhbmRvbXR5cGVnZW5lcmF0b3IiLCJyYW5kb21udW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb210eXBlIiwiZHJhdyIsImN0eCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\nvar Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  var image = document.getElementById('source');\n  image.addEventListener('load', function (e) {\n    ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);\n  }); // const text = new Compdirection(\"North\")\n  // text.display(ctx)\n  // const game = new Game()\n  // console.log(game.directions)\n  // game.draw(ctx)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQTdCOztBQUNBLElBQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFwQjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JELE1BQU1DLE1BQU0sR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHUCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZDtBQUVBRyxFQUFBQSxLQUFLLENBQUNOLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCLFVBQUFPLENBQUMsRUFBSTtBQUNoQ0gsSUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWNGLEtBQWQsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEMsRUFBdUMsRUFBdkMsRUFBMkMsRUFBM0MsRUFBK0MsRUFBL0MsRUFBbUQsR0FBbkQ7QUFDRCxHQUZILEVBTHFELENBU3JEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFSCxDQWhCRCIsInNvdXJjZXMiOlsid2VicGFjazovL0pTLVByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21wZGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY29tcGRpcmVjdGlvbi5qc1wiKVxuY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL2dhbWUuanNcIilcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VyY2UnKVxuICAgIFxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMzMsIDcxLCAxMDQsIDEyNCwgMjEsIDIwLCA4NywgMTA0KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gY29uc3QgdGV4dCA9IG5ldyBDb21wZGlyZWN0aW9uKFwiTm9ydGhcIilcbiAgICAvLyB0ZXh0LmRpc3BsYXkoY3R4KVxuXG4gICAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKClcbiAgICAvLyBjb25zb2xlLmxvZyhnYW1lLmRpcmVjdGlvbnMpXG4gICAgLy8gZ2FtZS5kcmF3KGN0eClcblxufSk7XG4iXSwibmFtZXMiOlsiQ29tcGRpcmVjdGlvbiIsInJlcXVpcmUiLCJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZSIsImUiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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