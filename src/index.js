const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");
const EasyGame = require("./easygame.js");
const EasyGameView = require("./easygameview.js");
const MediumGame = require("./mediumgame.js");
const MediumGameView = require("./mediumgameview.js");
const HardGame = require("./hardgame.js");
const HardGameView = require("./hardgameview.js");
const RestartGame = require("./restart.js")
import "./index.scss"


document.addEventListener('DOMContentLoaded', (event) => {
    
    const canvas = document.getElementById("game-canvas");
    console.log(canvas)
    const ctx = canvas.getContext("2d");
    canvas.width= 600 
    canvas.height= 600 
    const flagcanvas = document.getElementById("flag");
    flagcanvas.width= 100 
    flagcanvas.height= 100 
    const flagctx = flagcanvas.getContext("2d")
    const scorecanvas = document.getElementById("score");
    const scorectx = scorecanvas.getContext("2d")
    scorecanvas.width= 150 
    scorecanvas.height= 50 

    scorectx.font = "25px Arial";
    scorectx.fillStyle = "black"
    scorectx.textAlign = "center"
    scorectx.fillText(`Score: 0`, 75, 30) 

    const easyLevel = document.getElementById("easy");
    const mediumLevel = document.getElementById("medium");
    const hardLevel = document.getElementById("hard");
    // const restart = document.getElementById("restart")
    // restart.addEventListener("click", restartcheck)

    // function restartcheck() {
    //     const restartgame = new RestartGame(ctx, canvas, flagctx, scorectx)
    //     easyLevel.addEventListener("click", easycheck)

    //     function easycheck() {
    //     const easygame = new EasyGame()
    //     const easygameview = new EasyGameView(ctx, canvas, easygame, flagctx, scorectx)
    //     easygameview.instructions()
    //     easygameview.click() 
    //     }
    // }
    
    easyLevel.addEventListener("click", easycheck)

    function easycheck() {
        const easygame = new EasyGame()
        const easygameview = new EasyGameView(ctx, canvas, easygame, flagctx, scorectx)
        easygameview.instructions()
        easygameview.click()
        
        // restart.addEventListener("click", restartcheck) 

        // function restartcheck() {
        //     const restartgame = new RestartGame(ctx, canvas, easygame, flagctx, scorectx)
        // }
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


