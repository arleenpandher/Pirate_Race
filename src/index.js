const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");
const Flag = require("./flag.js");

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const flagcanvas = document.getElementById("flag");
    const flagctx = flagcanvas.getContext("2d")
    // flagctx.translate(100,100)
    // flagctx.rotate(45 * Math.PI / 180);
    // flagctx.fillRect(0, 0, 100, 50);
    // flagctx.beginPath();
    // flagctx.moveTo(0,80);
    // flagctx.lineTo(0,0);
    // flagctx.lineWidth = 6
    // flagctx.strokeStyle = "red"
    // flagctx.stroke();

    
    const game = new Game()
    const gameview = new GameView(ctx, canvas, game)
    // gameview.dir()
    gameview.keydown()
    gameview.keyup()
    // const flag = new Flag() 
    // flag.draw(ctx)
    // flag.rotate1()
    // flag.northFlag(ctx)
    // flag.eastFlag(ctx)
    // flag.southFlag(ctx)
    // flag.westFlag(ctx)

    
    // flagctx.beginPath();
    // flagctx.moveTo(0,80);
    // flagctx.lineTo(60,0);
    // flagctx.lineWidth = 6
    // flagctx.strokeStyle = "red"
    // flagctx.stroke();
    // flagctx.translate(0,0)
    // flagctx.rotate(Math.PI/3);
    // flagctx.fillRect(0,0,60,80)
    
    // flagctx.rotate(Math.PI/5);

    

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