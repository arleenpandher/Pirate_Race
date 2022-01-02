const Compdirection = require("./compdirection.js")
const Game = require("./game.js")

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const image = document.getElementById('source')
    
    image.addEventListener('load', e => {
        ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
      });

    // const text = new Compdirection("North")
    // text.display(ctx)

    // const game = new Game()
    // console.log(game.directions)
    // game.draw(ctx)

});
