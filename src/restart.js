const EasyGame = require("./easygame.js");
const EasyGameView = require("./easygameview.js");
const MediumGame = require("./mediumgame.js");
const MediumGameView = require("./mediumgameview.js");
const HardGame = require("./hardgame.js");
const HardGameView = require("./hardgameview.js");

function RestartGame(ctx, canvas, game, flagctx, scorectx) {
    this.drawing = ctx 
    this.canvas = canvas
    this.game = game
    this.flag = flagctx 
    this.score = scorectx
    this.restartscore = 0
    this.clearlastpicture()
    this.clearscore()
}

RestartGame.prototype.clearlastpicture = function() {
    this.drawing.clearRect(0, 0, 600, 600)
    this.canvas.style.backgroundImage = "url('./assets/Instructions.png')"
}

RestartGame.prototype.clearscore = function() {
    this.score.clearRect(0,0,150,50)
    this.score.font = "25px Arial";
    this.score.fillStyle = "black"
    this.score.textAlign = "center"
    this.game.score = 0 
    this.score.fillText(`Score: ${this.game.score}`, 75, 30)    
}




module.exports = RestartGame