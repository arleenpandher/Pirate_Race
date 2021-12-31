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

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\nvar CONSTANTS = {\n  DIRECTIONS: [\"North\", \"South\", \"East\", \"West\"],\n  NUM_DIRS: 5,\n  DIM_X: 600,\n  DIM_Y: 600,\n  COLOR: [\"red\", \"blue\"]\n};\n\nfunction Game() {\n  this.directions = [];\n  this.addDirections();\n}\n\nGame.prototype.addDirections = function () {\n  for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {\n    this.directions.push(new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator()));\n  }\n};\n\nGame.prototype.randomdirectiongenerator = function () {\n  var randomnum = Math.floor(4 * Math.random());\n  return CONSTANTS.DIRECTIONS[randomnum];\n};\n\nGame.prototype.randomtypegenerator = function () {\n  var randomtype = Math.floor(2 * Math.random());\n  return CONSTANTS.COLOR[randomtype];\n};\n\nGame.prototype.draw = function (ctx) {\n  var that = this;\n\n  for (var i = 0; i < CONSTANTS.NUM_DIRS; i++) {\n    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    ctx.fillStyle = \"gray\";\n    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    setInterval(function () {\n      console.log(i);\n    }, 3000);\n  }\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBN0I7O0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2RDLEVBQUFBLFVBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLE1BQTNCLENBREU7QUFFZEMsRUFBQUEsUUFBUSxFQUFFLENBRkk7QUFHZEMsRUFBQUEsS0FBSyxFQUFFLEdBSE87QUFJZEMsRUFBQUEsS0FBSyxFQUFFLEdBSk87QUFLZEMsRUFBQUEsS0FBSyxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVI7QUFMTyxDQUFsQjs7QUFRQSxTQUFTQyxJQUFULEdBQWdCO0FBQ1osT0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtDLGFBQUw7QUFDSDs7QUFFREYsSUFBSSxDQUFDRyxTQUFMLENBQWVELGFBQWYsR0FBK0IsWUFBVztBQUN0QyxPQUFLRSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdWLFNBQVMsQ0FBQ0UsUUFBMUIsRUFBb0NRLENBQUMsRUFBckMsRUFBeUM7QUFDckMsU0FBS0gsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUIsSUFBSWIsYUFBSixDQUFrQixLQUFLYyx3QkFBTCxFQUFsQixFQUFtRCxLQUFLQyxtQkFBTCxFQUFuRCxDQUFyQjtBQUNIO0FBQ0osQ0FKRDs7QUFNQVAsSUFBSSxDQUFDRyxTQUFMLENBQWVHLHdCQUFmLEdBQTBDLFlBQVc7QUFDakQsTUFBSUUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJRCxJQUFJLENBQUNFLE1BQUwsRUFBZixDQUFoQjtBQUNBLFNBQU9qQixTQUFTLENBQUNDLFVBQVYsQ0FBcUJhLFNBQXJCLENBQVA7QUFDSCxDQUhEOztBQUtBUixJQUFJLENBQUNHLFNBQUwsQ0FBZUksbUJBQWYsR0FBcUMsWUFBVztBQUM1QyxNQUFJSyxVQUFVLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUVELElBQUksQ0FBQ0UsTUFBTCxFQUFiLENBQWpCO0FBQ0EsU0FBT2pCLFNBQVMsQ0FBQ0ssS0FBVixDQUFnQmEsVUFBaEIsQ0FBUDtBQUNILENBSEQ7O0FBS0FaLElBQUksQ0FBQ0csU0FBTCxDQUFlVSxJQUFmLEdBQXNCLFVBQVNDLEdBQVQsRUFBYztBQUNoQyxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxPQUFLLElBQUlYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLFNBQVMsQ0FBQ0UsUUFBOUIsRUFBd0NRLENBQUMsRUFBekMsRUFBNkM7QUFDekNVLElBQUFBLEdBQUcsQ0FBQ0UsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J0QixTQUFTLENBQUNHLEtBQTlCLEVBQXFDSCxTQUFTLENBQUNJLEtBQS9DO0FBQ0FnQixJQUFBQSxHQUFHLENBQUNHLFNBQUosR0FBZ0IsTUFBaEI7QUFDQUgsSUFBQUEsR0FBRyxDQUFDSSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQnhCLFNBQVMsQ0FBQ0csS0FBN0IsRUFBcUNILFNBQVMsQ0FBQ0ksS0FBL0M7QUFDQXFCLElBQUFBLFdBQVcsQ0FBQyxZQUFNO0FBQ2RDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsQ0FBWjtBQUFlLEtBRFIsRUFDVSxJQURWLENBQVg7QUFFSDtBQUNKLENBVEQ7O0FBYUFrQixNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QixJQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL0pTLVByb2plY3QvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbXBkaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jb21wZGlyZWN0aW9uLmpzXCIpXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBESVJFQ1RJT05TOiBbXCJOb3J0aFwiLCBcIlNvdXRoXCIsIFwiRWFzdFwiLCBcIldlc3RcIl0sXG4gICAgTlVNX0RJUlM6IDUsXG4gICAgRElNX1g6IDYwMCxcbiAgICBESU1fWTogNjAwLFxuICAgIENPTE9SOiBbXCJyZWRcIiwgXCJibHVlXCJdXG59O1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdXG4gICAgdGhpcy5hZGREaXJlY3Rpb25zKClcbn1cblxuR2FtZS5wcm90b3R5cGUuYWRkRGlyZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBDT05TVEFOVFMuTlVNX0RJUlM7IGkrKykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgQ29tcGRpcmVjdGlvbih0aGlzLnJhbmRvbWRpcmVjdGlvbmdlbmVyYXRvcigpLCB0aGlzLnJhbmRvbXR5cGVnZW5lcmF0b3IoKSkpXG4gICAgfVxufVxuXG5HYW1lLnByb3RvdHlwZS5yYW5kb21kaXJlY3Rpb25nZW5lcmF0b3IgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmFuZG9tbnVtID0gTWF0aC5mbG9vcig0ICogTWF0aC5yYW5kb20oKSlcbiAgICByZXR1cm4gQ09OU1RBTlRTLkRJUkVDVElPTlNbcmFuZG9tbnVtXVxufVxuXG5HYW1lLnByb3RvdHlwZS5yYW5kb210eXBlZ2VuZXJhdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJhbmRvbXR5cGUgPSBNYXRoLmZsb29yKDIqTWF0aC5yYW5kb20oKSlcbiAgICByZXR1cm4gQ09OU1RBTlRTLkNPTE9SW3JhbmRvbXR5cGVdXG59XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPTlNUQU5UUy5OVU1fRElSUzsgaSsrKSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ09OU1RBTlRTLkRJTV9YLCBDT05TVEFOVFMuRElNX1kpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmF5XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBDT05TVEFOVFMuRElNX1gsICBDT05TVEFOVFMuRElNX1kpO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKX0sIDMwMDApXG4gICAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG4iXSwibmFtZXMiOlsiQ29tcGRpcmVjdGlvbiIsInJlcXVpcmUiLCJDT05TVEFOVFMiLCJESVJFQ1RJT05TIiwiTlVNX0RJUlMiLCJESU1fWCIsIkRJTV9ZIiwiQ09MT1IiLCJHYW1lIiwiZGlyZWN0aW9ucyIsImFkZERpcmVjdGlvbnMiLCJwcm90b3R5cGUiLCJpIiwicHVzaCIsInJhbmRvbWRpcmVjdGlvbmdlbmVyYXRvciIsInJhbmRvbXR5cGVnZW5lcmF0b3IiLCJyYW5kb21udW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb210eXBlIiwiZHJhdyIsImN0eCIsInRoYXQiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

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