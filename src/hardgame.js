const Compdirection = require("./compdirection.js")

const CONSTANTS = {
    DIRECTIONS: ["North", "South", "East", "West"],
    NUM_DIRS: 5,
    DIM_X: 600,
    DIM_Y: 600,
    COLOR: ["red", "blue"]
};

function HardGame() {
    this.directions = []
    this.addDirections()
    this.score = 0 
    this.played = false  
}

HardGame.prototype.addDirections = function() {
    for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {
        let newdir = new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator())
        this.directions.push(newdir)
    }
}


HardGame.prototype.randomdirectiongenerator = function() {
    let randomnum = Math.floor(4 * Math.random())
    return CONSTANTS.DIRECTIONS[randomnum]
}

HardGame.prototype.randomtypegenerator = function() {
    let randomtype = Math.floor(2*Math.random())
    return CONSTANTS.COLOR[randomtype]
}

HardGame.prototype.end = function() {


}







module.exports = HardGame
