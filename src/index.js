const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");


document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const image = document.getElementById("source");
    
   
    const gameview = new GameView(ctx)
    
    function appear() {
        let dir = gameview.game.directions[0]
        dir.display(ctx)
    }

    function disappear() {
        let dir = gameview.game.directions[0]
        dir.discard(ctx)
        gameview.game.directions.shift()
        console.log(gameview.game.directions)
    }

    function directions() {
        for (i = 0; i < gameview.game.directions.length; i++) {
            setTimeout(appear, 3000+(3000*i))
            setTimeout(disappear, 6000+(3000*i))
        }
    }

    directions()


});
