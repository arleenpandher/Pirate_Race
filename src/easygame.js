const Compdirection = require("./compdirection.js")

const CONSTANTS = {
    DIRECTIONS: ["North", "South", "East", "West"],
    NUM_DIRS: 5,
    DIM_X: 600,
    DIM_Y: 600,
    COLOR: ["red", "blue"]
};

function EasyGame() {
    this.directions = []
    this.addDirections()
    this.score = 0 
    this.played = false  
}

EasyGame.prototype.addDirections = function() {
    for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {
        let newdir = new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator())
        this.directions.push(newdir)
    }
}


EasyGame.prototype.randomdirectiongenerator = function() {
    let randomnum = Math.floor(4 * Math.random())
    return CONSTANTS.DIRECTIONS[randomnum]
}

EasyGame.prototype.randomtypegenerator = function() {
    let randomtype = Math.floor(2*Math.random())
    return CONSTANTS.COLOR[randomtype]
}

EasyGame.prototype.end = function() {


}







module.exports = EasyGame
