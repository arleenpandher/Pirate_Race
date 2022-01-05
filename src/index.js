const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");
const Flag = require("./flag.js");

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const flagcanvas = document.getElementById("flag");
    const flagctx = flagcanvas.getContext("2d")
    flagctx.translate(50,50)
    flagctx.rotate(0 * (Math.PI / 180));
    flagctx.beginPath();
    flagctx.moveTo(0,0);
    flagctx.lineTo(50,-50);
    flagctx.lineWidth = 6
    flagctx.strokeStyle = "red"
    flagctx.stroke();
    
     let angle = 0
    let stop 
    function loop() {
        
            // console.log(angle)
            // flagctx.setTransform(1,0,0,1,0,0)
            flagctx.clearRect(-50,-50, 100, 100)
            flagctx.setTransform(1,0,0,1,0,0)
            flagctx.translate(50,50)
            flagctx.rotate(angle * (Math.PI / 180));
            flagctx.beginPath();
            flagctx.moveTo(0,0);
            flagctx.lineTo(50,-50);
            flagctx.lineWidth = 6
            flagctx.strokeStyle = "red"
            flagctx.stroke();
            angle += 1
            stop = requestAnimationFrame(loop)
        
        // requestAnimationFrame(loop)
    }

    loop()
   

  
     
    const game = new Game()
    const gameview = new GameView(ctx, canvas, game)
    // gameview.dir()
    gameview.keydown()
    gameview.keyup()    

});


