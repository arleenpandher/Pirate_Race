const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");
const EasyGame = require("./easygame.js");
const EasyGameView = require("./easygameview.js");
const MediumGame = require("./mediumgame.js");
const MediumGameView = require("./mediumgameview.js");
const HardGame = require("./hardgame.js");
const HardGameView = require("./hardgameview.js");


document.addEventListener('DOMContentLoaded', (event) => {
    
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const flagcanvas = document.getElementById("flag");
    const flagctx = flagcanvas.getContext("2d")
    const scorecanvas = document.getElementById("score");
    const scorectx = scorecanvas.getContext("2d")

    const easyLevel = document.getElementById("easy");
    const mediumLevel = document.getElementById("medium");
    const hardLevel = document.getElementById("hard");
    
    easyLevel.addEventListener("click", easycheck)

    function easycheck() {
        const easygame = new EasyGame()
        const easygameview = new EasyGameView(ctx, canvas, easygame, flagctx, scorectx)
        easygameview.instructions()
        easygameview.click() 
    }

    mediumLevel.addEventListener("click", mediumcheck) 

    function mediumcheck() {
        const mediumgame = new MediumGame()
        const mediumgameview = new MediumGameView(ctx, canvas, mediumgame, flagctx, scorectx)
        mediumgameview.instructions()
        mediumgameview.click() 
    }

    hardLevel.addEventListener("click", hardcheck) 

    function hardcheck() {
        const hardgame = new HardGame()
        const hardgameview = new HardGameView(ctx, canvas, hardgame, flagctx, scorectx)
        hardgameview.instructions()
        hardgameview.click() 
    }
   


    // const game = new Game()
    // const gameview = new GameView(ctx, canvas, game, flagctx, scorectx)
    // gameview.instructions()
    // gameview.click()

    // const easygame = new EasyGame()
    // const easygameview = new EasyGameView(ctx, canvas, easygame, flagctx, scorectx)
    // easygameview.instructions()
    // easygameview.click() 

        

});


