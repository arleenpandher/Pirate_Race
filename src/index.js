const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");


document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const image = document.getElementById('source')
    
  

    // image.onload = function() {
    //     ctx.drawImage(image, 600, 600)
        
    // }

    image.addEventListener('load', e => {
        ctx.drawImage(image, 600, 600)
        // ctx.font="40pt Georgia"
        // ctx.fillText("North", 400, 400)
    });

 

  

    // const game = new Game()
    // console.log(game.directions)
    // const gameview = new GameView(ctx)
    // gameview.draw(ctx)




    // const game = new Game()
    // console.log(game.directions)
    // game.draw(ctx)

});
