const Compdirection = require("./compdirection.js")

const CONSTANTS = {
    DIRECTIONS: ["North", "South", "East", "West"],
    // EASY_NUM_DIRS: 3,
    // MEDIUM_NUM_DIRS: 4,
    // HARD_NUM_DIRS: 5,
    DIM_X: 600,
    DIM_Y: 600,
    COLOR: ["red", "blue"]
};

function Game(type) {
    this.type = type
    this.directions = []
    if (this.type === "easy") this.num_dirs = 3
    if (this.type === "medium") this.num_dirs = 4
    if (this.type === "hard") this.num_dirs = 5  
    this.addDirections()
    this.score = 0 
    this.played = false    
}

Game.prototype.addDirections = function() {
    for (i = 0; i < this.num_dirs; i++) {
        let newdir = new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator())
        this.directions.push(newdir)
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



module.exports = Game
