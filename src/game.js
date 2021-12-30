const compdirection = require("./compdirection.js")

const CONSTANTS = {
    DIRECTIONS: ["North", "South", "East", "West"],
    NUM_DIRS: 5
};

function Game() {
    this.directions = []
    this.addDirections()
}

Game.prototype.addDirections = function() {
    for (i = 0; i < CONSTANTS[NUM_DIRS]; i++) {
        this.directions.push(new Compdirection(randomdirectiongenerator()))
    }
}

Game.prototype.randomdirectiongenerator = function() {
    let randomnum = Math.floor(4 * Math.random())
    return CONSTANTS[DIRECTIONS][randomnum]
}
