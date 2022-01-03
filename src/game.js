const Compdirection = require("./compdirection.js")

const CONSTANTS = {
    DIRECTIONS: ["North", "South", "East", "West"],
    NUM_DIRS: 5,
    DIM_X: 600,
    DIM_Y: 600,
    COLOR: ["red", "blue"]
};

function Game() {
    this.directions = []
    this.addDirections()
    this.score = 0 
}

Game.prototype.addDirections = function() {
    for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {
        let newdir = new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator())
        if (newdir !== this.directions[this.directions-1] || this.directions.length === 0) this.directions.push(newdir)
    }
}

Game.prototype.randomdirectiongenerator = function() {
    let randomnum = Math.floor(4 * Math.random())
    return CONSTANTS.DIRECTIONS[randomnum]
}

Game.prototype.randomtypegenerator = function() {
    let randomtype = Math.floor(2*Math.random())
    return CONSTANTS.COLOR[randomtype]
}

Game.prototype.scoredisplay = function(ctx) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black"
    ctx.textAlign = "center"
    ctx.fillText(this.score, 50, 25)    
}







module.exports = Game
