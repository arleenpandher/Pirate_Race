const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");
const Flag = require("./flag.js");

document.addEventListener('DOMContentLoaded', (event) => {
    
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const flagcanvas = document.getElementById("flag");
    const flagctx = flagcanvas.getContext("2d")
    const scorecanvas = document.getElementById("score");
    const scorectx = scorecanvas.getContext("2d")

    // scorectx.fillText("hello",20,20)
   
    const game = new Game()
    const gameview = new GameView(ctx, canvas, game, flagctx, scorectx)
    gameview.instructions()
    gameview.click()
    // gameview.dir()
    // gameview.keydown()
    // gameview.keyup()    

});


