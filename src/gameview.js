const Game = require("./game.js");


function GameView(ctx) {
    this.game = new Game()
    this.drawing = ctx 
}

// GameView.prototype.appear = function() {
//     let dir = this.game.directions[0]
//     dir.display(this.drawing)
// }

// GameView.prototype.disappear = function() {
//     let dir = this.game.directions[0]
//     dir.discard(this.drawing)
//     this.game.directions.shift()
// }

// GameView.prototype.dir = function() {
//     for (i = 0; i < this.game.directions.length; i++) {
//         setTimeout(GameView.appear, 3000+(3000*i))
//         setTimeout(GameView.disappear, 6000+(3000*i))
//     }
// }


module.exports = GameView;