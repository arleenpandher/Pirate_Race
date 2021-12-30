const Compdirection = require("./compdirection.js")

const CONSTANTS = {
    DIRECTIONS: ["North", "South", "East", "West"],
    NUM_DIRS: 5,
    DIM_X: 600,
    DIM_Y: 600,
};

function Game() {
    this.directions = []
    this.addDirections()
}

Game.prototype.addDirections = function() {
    for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {
        this.directions.push(new Compdirection(this.randomdirectiongenerator()))
    }
}

Game.prototype.randomdirectiongenerator = function() {
    let randomnum = Math.floor(4 * Math.random())
    return CONSTANTS.DIRECTIONS[randomnum]
}

Game.prototype.draw = function(ctx) {
    for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {
        ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, CONSTANTS.DIM_X,  CONSTANTS.DIM_Y);
        this.directions[i].display(ctx)
        i++
    }
}



module.exports = Game
