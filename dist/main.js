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

eval("function Compdirection(direction, color) {\n  this.direction = direction;\n  this.color = color;\n}\n\nCompdirection.prototype.display = function (ctx) {\n  ctx.font = \"30px Arial\";\n  ctx.fillStyle = this.color;\n  ctx.textAlign = \"center\";\n  ctx.fillText(this.direction, 300, 75); // ctx.strokeText(this.direction, 180, 50);\n};\n\nCompdirection.prototype.discard = function (ctx) {\n  ctx.clearRect(0, 0, 600, 600);\n};\n\nmodule.exports = Compdirection;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2NvbXBkaXJlY3Rpb24uanM/MjhmMSJdLCJuYW1lcyI6WyJDb21wZGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiY29sb3IiLCJwcm90b3R5cGUiLCJkaXNwbGF5IiwiY3R4IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiZGlzY2FyZCIsImNsZWFyUmVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUdBLFNBQVNBLGFBQVQsQ0FBdUJDLFNBQXZCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUNyQyxPQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNIOztBQUVERixhQUFhLENBQUNHLFNBQWQsQ0FBd0JDLE9BQXhCLEdBQWtDLFVBQVNDLEdBQVQsRUFBYztBQUM1Q0EsRUFBQUEsR0FBRyxDQUFDQyxJQUFKLEdBQVcsWUFBWDtBQUNBRCxFQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0IsS0FBS0wsS0FBckI7QUFDQUcsRUFBQUEsR0FBRyxDQUFDRyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksUUFBSixDQUFhLEtBQUtSLFNBQWxCLEVBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLEVBSjRDLENBSzVDO0FBRUgsQ0FQRDs7QUFTQUQsYUFBYSxDQUFDRyxTQUFkLENBQXdCTyxPQUF4QixHQUFrQyxVQUFTTCxHQUFULEVBQWM7QUFDNUNBLEVBQUFBLEdBQUcsQ0FBQ00sU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekI7QUFDSCxDQUZEOztBQUlBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZnVuY3Rpb24gQ29tcGRpcmVjdGlvbihkaXJlY3Rpb24sIGNvbG9yKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG59XG5cbkNvbXBkaXJlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXkgPSBmdW5jdGlvbihjdHgpIHtcbiAgICBjdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCJcbiAgICBjdHguZmlsbFRleHQodGhpcy5kaXJlY3Rpb24sIDMwMCwgNzUpXG4gICAgLy8gY3R4LnN0cm9rZVRleHQodGhpcy5kaXJlY3Rpb24sIDE4MCwgNTApO1xuICAgIFxufVxuXG5Db21wZGlyZWN0aW9uLnByb3RvdHlwZS5kaXNjYXJkID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA2MDAsIDYwMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wZGlyZWN0aW9uOyJdLCJmaWxlIjoiLi9zcmMvY29tcGRpcmVjdGlvbi5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/compdirection.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\nvar CONSTANTS = {\n  DIRECTIONS: [\"North\", \"South\", \"East\", \"West\"],\n  NUM_DIRS: 5,\n  DIM_X: 600,\n  DIM_Y: 600,\n  COLOR: [\"red\", \"blue\"]\n};\n\nfunction Game() {\n  this.directions = [];\n  this.addDirections();\n}\n\nGame.prototype.addDirections = function () {\n  for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {\n    var newdir = new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator());\n    if (newdir !== this.directions[this.directions - 1] || this.directions.length === 0) this.directions.push(newdir);\n  }\n};\n\nGame.prototype.randomdirectiongenerator = function () {\n  var randomnum = Math.floor(4 * Math.random());\n  return CONSTANTS.DIRECTIONS[randomnum];\n};\n\nGame.prototype.randomtypegenerator = function () {\n  var randomtype = Math.floor(2 * Math.random());\n  return CONSTANTS.COLOR[randomtype];\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBN0I7O0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2RDLEVBQUFBLFVBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLE1BQTNCLENBREU7QUFFZEMsRUFBQUEsUUFBUSxFQUFFLENBRkk7QUFHZEMsRUFBQUEsS0FBSyxFQUFFLEdBSE87QUFJZEMsRUFBQUEsS0FBSyxFQUFFLEdBSk87QUFLZEMsRUFBQUEsS0FBSyxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVI7QUFMTyxDQUFsQjs7QUFRQSxTQUFTQyxJQUFULEdBQWdCO0FBQ1osT0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtDLGFBQUw7QUFDSDs7QUFFREYsSUFBSSxDQUFDRyxTQUFMLENBQWVELGFBQWYsR0FBK0IsWUFBVztBQUN0QyxPQUFLRSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdWLFNBQVMsQ0FBQ0UsUUFBMUIsRUFBb0NRLENBQUMsRUFBckMsRUFBeUM7QUFDckMsUUFBSUMsTUFBTSxHQUFHLElBQUliLGFBQUosQ0FBa0IsS0FBS2Msd0JBQUwsRUFBbEIsRUFBbUQsS0FBS0MsbUJBQUwsRUFBbkQsQ0FBYjtBQUNBLFFBQUlGLE1BQU0sS0FBSyxLQUFLSixVQUFMLENBQWdCLEtBQUtBLFVBQUwsR0FBZ0IsQ0FBaEMsQ0FBWCxJQUFpRCxLQUFLQSxVQUFMLENBQWdCTyxNQUFoQixLQUEyQixDQUFoRixFQUFtRixLQUFLUCxVQUFMLENBQWdCUSxJQUFoQixDQUFxQkosTUFBckI7QUFDdEY7QUFDSixDQUxEOztBQU9BTCxJQUFJLENBQUNHLFNBQUwsQ0FBZUcsd0JBQWYsR0FBMEMsWUFBVztBQUNqRCxNQUFJSSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlELElBQUksQ0FBQ0UsTUFBTCxFQUFmLENBQWhCO0FBQ0EsU0FBT25CLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQmUsU0FBckIsQ0FBUDtBQUNILENBSEQ7O0FBS0FWLElBQUksQ0FBQ0csU0FBTCxDQUFlSSxtQkFBZixHQUFxQyxZQUFXO0FBQzVDLE1BQUlPLFVBQVUsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBRUQsSUFBSSxDQUFDRSxNQUFMLEVBQWIsQ0FBakI7QUFDQSxTQUFPbkIsU0FBUyxDQUFDSyxLQUFWLENBQWdCZSxVQUFoQixDQUFQO0FBQ0gsQ0FIRDs7QUFXQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsSUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21wZGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY29tcGRpcmVjdGlvbi5qc1wiKVxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgRElSRUNUSU9OUzogW1wiTm9ydGhcIiwgXCJTb3V0aFwiLCBcIkVhc3RcIiwgXCJXZXN0XCJdLFxuICAgIE5VTV9ESVJTOiA1LFxuICAgIERJTV9YOiA2MDAsXG4gICAgRElNX1k6IDYwMCxcbiAgICBDT0xPUjogW1wicmVkXCIsIFwiYmx1ZVwiXVxufTtcblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgICB0aGlzLmRpcmVjdGlvbnMgPSBbXVxuICAgIHRoaXMuYWRkRGlyZWN0aW9ucygpXG59XG5cbkdhbWUucHJvdG90eXBlLmFkZERpcmVjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgQ09OU1RBTlRTLk5VTV9ESVJTOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld2RpciA9IG5ldyBDb21wZGlyZWN0aW9uKHRoaXMucmFuZG9tZGlyZWN0aW9uZ2VuZXJhdG9yKCksIHRoaXMucmFuZG9tdHlwZWdlbmVyYXRvcigpKVxuICAgICAgICBpZiAobmV3ZGlyICE9PSB0aGlzLmRpcmVjdGlvbnNbdGhpcy5kaXJlY3Rpb25zLTFdIHx8IHRoaXMuZGlyZWN0aW9ucy5sZW5ndGggPT09IDApIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ld2RpcilcbiAgICB9XG59XG5cbkdhbWUucHJvdG90eXBlLnJhbmRvbWRpcmVjdGlvbmdlbmVyYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByYW5kb21udW0gPSBNYXRoLmZsb29yKDQgKiBNYXRoLnJhbmRvbSgpKVxuICAgIHJldHVybiBDT05TVEFOVFMuRElSRUNUSU9OU1tyYW5kb21udW1dXG59XG5cbkdhbWUucHJvdG90eXBlLnJhbmRvbXR5cGVnZW5lcmF0b3IgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmFuZG9tdHlwZSA9IE1hdGguZmxvb3IoMipNYXRoLnJhbmRvbSgpKVxuICAgIHJldHVybiBDT05TVEFOVFMuQ09MT1JbcmFuZG9tdHlwZV1cbn1cblxuXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG4iXSwibmFtZXMiOlsiQ29tcGRpcmVjdGlvbiIsInJlcXVpcmUiLCJDT05TVEFOVFMiLCJESVJFQ1RJT05TIiwiTlVNX0RJUlMiLCJESU1fWCIsIkRJTV9ZIiwiQ09MT1IiLCJHYW1lIiwiZGlyZWN0aW9ucyIsImFkZERpcmVjdGlvbnMiLCJwcm90b3R5cGUiLCJpIiwibmV3ZGlyIiwicmFuZG9tZGlyZWN0aW9uZ2VuZXJhdG9yIiwicmFuZG9tdHlwZWdlbmVyYXRvciIsImxlbmd0aCIsInB1c2giLCJyYW5kb21udW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb210eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.drawing = ctx;\n} // GameView.prototype.appear = function() {\n//     let dir = this.game.directions[0]\n//     dir.display(this.drawing)\n// }\n// GameView.prototype.disappear = function() {\n//     let dir = this.game.directions[0]\n//     dir.discard(this.drawing)\n//     this.game.directions.shift()\n// }\n// GameView.prototype.dir = function() {\n//     for (i = 0; i < this.game.directions.length; i++) {\n//         setTimeout(GameView.appear, 3000+(3000*i))\n//         setTimeout(GameView.disappear, 6000+(3000*i))\n//     }\n// }\n\n\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZXZpZXcuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQXBCOztBQUdBLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ25CLE9BQUtDLElBQUwsR0FBWSxJQUFJSixJQUFKLEVBQVo7QUFDQSxPQUFLSyxPQUFMLEdBQWVGLEdBQWY7QUFDSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxRQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL0pTLVByb2plY3QvLi9zcmMvZ2FtZXZpZXcuanM/Yjc0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vZ2FtZS5qc1wiKTtcblxuXG5mdW5jdGlvbiBHYW1lVmlldyhjdHgpIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpXG4gICAgdGhpcy5kcmF3aW5nID0gY3R4IFxufVxuXG4vLyBHYW1lVmlldy5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgbGV0IGRpciA9IHRoaXMuZ2FtZS5kaXJlY3Rpb25zWzBdXG4vLyAgICAgZGlyLmRpc3BsYXkodGhpcy5kcmF3aW5nKVxuLy8gfVxuXG4vLyBHYW1lVmlldy5wcm90b3R5cGUuZGlzYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgbGV0IGRpciA9IHRoaXMuZ2FtZS5kaXJlY3Rpb25zWzBdXG4vLyAgICAgZGlyLmRpc2NhcmQodGhpcy5kcmF3aW5nKVxuLy8gICAgIHRoaXMuZ2FtZS5kaXJlY3Rpb25zLnNoaWZ0KClcbi8vIH1cblxuLy8gR2FtZVZpZXcucHJvdG90eXBlLmRpciA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmdhbWUuZGlyZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICBzZXRUaW1lb3V0KEdhbWVWaWV3LmFwcGVhciwgMzAwMCsoMzAwMCppKSlcbi8vICAgICAgICAgc2V0VGltZW91dChHYW1lVmlldy5kaXNhcHBlYXIsIDYwMDArKDMwMDAqaSkpXG4vLyAgICAgfVxuLy8gfVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7Il0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiR2FtZVZpZXciLCJjdHgiLCJnYW1lIiwiZHJhd2luZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/gameview.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Compdirection = __webpack_require__(/*! ./compdirection.js */ \"./src/compdirection.js\");\n\nvar Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nvar GameView = __webpack_require__(/*! ./gameview.js */ \"./src/gameview.js\");\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  var image = document.getElementById(\"source\");\n  var gameview = new GameView(ctx);\n\n  function appear() {\n    var dir = gameview.game.directions[0];\n    dir.display(ctx);\n  }\n\n  function disappear() {\n    var dir = gameview.game.directions[0];\n    dir.discard(ctx);\n    gameview.game.directions.shift();\n    console.log(gameview.game.directions);\n  }\n\n  function directions() {\n    for (i = 0; i < gameview.game.directions.length; i++) {\n      setTimeout(appear, 3000 + 3000 * i);\n      setTimeout(disappear, 6000 + 3000 * i);\n    }\n  }\n\n  directions();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQTdCOztBQUNBLElBQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFwQjs7QUFDQSxJQUFNRSxRQUFRLEdBQUdGLG1CQUFPLENBQUMsd0NBQUQsQ0FBeEI7O0FBR0FHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUNDLEtBQUQsRUFBVztBQUNyRCxNQUFNQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQU1DLEtBQUssR0FBR1AsUUFBUSxDQUFDSSxjQUFULENBQXdCLFFBQXhCLENBQWQ7QUFHQSxNQUFNSSxRQUFRLEdBQUcsSUFBSVQsUUFBSixDQUFhTSxHQUFiLENBQWpCOztBQUVBLFdBQVNJLE1BQVQsR0FBa0I7QUFDZCxRQUFJQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxVQUFkLENBQXlCLENBQXpCLENBQVY7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxPQUFKLENBQVlSLEdBQVo7QUFDSDs7QUFFRCxXQUFTUyxTQUFULEdBQXFCO0FBQ2pCLFFBQUlKLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWNDLFVBQWQsQ0FBeUIsQ0FBekIsQ0FBVjtBQUNBRixJQUFBQSxHQUFHLENBQUNLLE9BQUosQ0FBWVYsR0FBWjtBQUNBRyxJQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsVUFBZCxDQUF5QkksS0FBekI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxVQUExQjtBQUNIOztBQUVELFdBQVNBLFVBQVQsR0FBc0I7QUFDbEIsU0FBS08sQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHWCxRQUFRLENBQUNHLElBQVQsQ0FBY0MsVUFBZCxDQUF5QlEsTUFBekMsRUFBaURELENBQUMsRUFBbEQsRUFBc0Q7QUFDbERFLE1BQUFBLFVBQVUsQ0FBQ1osTUFBRCxFQUFTLE9BQU0sT0FBS1UsQ0FBcEIsQ0FBVjtBQUNBRSxNQUFBQSxVQUFVLENBQUNQLFNBQUQsRUFBWSxPQUFNLE9BQUtLLENBQXZCLENBQVY7QUFDSDtBQUNKOztBQUVEUCxFQUFBQSxVQUFVO0FBR2IsQ0E5QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1Qcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tcGRpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2NvbXBkaXJlY3Rpb24uanNcIilcbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9nYW1lLmpzXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1ldmlldy5qc1wiKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VyY2VcIik7XG4gICAgXG4gICBcbiAgICBjb25zdCBnYW1ldmlldyA9IG5ldyBHYW1lVmlldyhjdHgpXG4gICAgXG4gICAgZnVuY3Rpb24gYXBwZWFyKCkge1xuICAgICAgICBsZXQgZGlyID0gZ2FtZXZpZXcuZ2FtZS5kaXJlY3Rpb25zWzBdXG4gICAgICAgIGRpci5kaXNwbGF5KGN0eClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNhcHBlYXIoKSB7XG4gICAgICAgIGxldCBkaXIgPSBnYW1ldmlldy5nYW1lLmRpcmVjdGlvbnNbMF1cbiAgICAgICAgZGlyLmRpc2NhcmQoY3R4KVxuICAgICAgICBnYW1ldmlldy5nYW1lLmRpcmVjdGlvbnMuc2hpZnQoKVxuICAgICAgICBjb25zb2xlLmxvZyhnYW1ldmlldy5nYW1lLmRpcmVjdGlvbnMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlyZWN0aW9ucygpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdhbWV2aWV3LmdhbWUuZGlyZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2V0VGltZW91dChhcHBlYXIsIDMwMDArKDMwMDAqaSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGRpc2FwcGVhciwgNjAwMCsoMzAwMCppKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpcmVjdGlvbnMoKVxuXG5cbn0pO1xuIl0sIm5hbWVzIjpbIkNvbXBkaXJlY3Rpb24iLCJyZXF1aXJlIiwiR2FtZSIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZSIsImdhbWV2aWV3IiwiYXBwZWFyIiwiZGlyIiwiZ2FtZSIsImRpcmVjdGlvbnMiLCJkaXNwbGF5IiwiZGlzYXBwZWFyIiwiZGlzY2FyZCIsInNoaWZ0IiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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