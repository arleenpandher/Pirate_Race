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
    this.played = false  
}

Game.prototype.addDirections = function() {
    for (i = 0; i < CONSTANTS.NUM_DIRS; i++) {
        let newdir = new Compdirection(this.randomdirectiongenerator(), this.randomtypegenerator())
        
        this.directions.push(newdir)
        // if (i !== 0) {
        //     let lastobj = this.directions[this.directions.length -1]
        //     // console.log(this.directions[this.directions.length -1].direction)
        // }
        // if (this.directions.length === 0 || (newdir.direction !== this.directions[this.directions.length -1].direction)) this.directions.push(newdir)
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

Game.prototype.end = function() {


}







module.exports = Game
