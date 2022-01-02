const Game = require("./game.js");


function GameView(ctx) {
    this.game = new Game()
    this.drawing = ctx 
}

GameView.prototype.draw = function(ctx) {

    let dirs = this.game.directions 
    for (i = 0; i < dirs.length; i++) {
        dirs[i].display(ctx)
    } 
    // let that = this
    // for (var i = 0; i < CONSTANTS.NUM_DIRS; i++) {
    //     ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    //     ctx.fillStyle = "gray";
    //     ctx.fillRect(0, 0, CONSTANTS.DIM_X,  CONSTANTS.DIM_Y);
    //     setInterval(() => {
    //         console.log(i)}, 3000)
    // }
    
}


module.exports = GameView;