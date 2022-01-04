const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");


document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    
    
    const game = new Game()
    const gameview = new GameView(ctx, canvas, game)
    gameview.dir()
    gameview.keydown()
    gameview.keyup()

});


// document.addEventListener('DOMContentLoaded', (event) => {
//     const canvas = document.getElementById("flag");
//     const ctx = canvas.getContext("2d");

//     // ctx.beginPath()
//     // ctx.moveTo(565,510)
//     // ctx.lineTo(685,590)
//     // ctx.color ="red"
//     // ctx.stroke();
// });