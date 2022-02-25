const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");
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
    // flagcanvas.style.top = "200px"
    // flagcanvas.style="border: 1px solid #000000"
    const flagctx = flagcanvas.getContext("2d")
    const scorecanvas = document.getElementById("score");
    const scorectx = scorecanvas.getContext("2d")
    scorecanvas.width= 150 
    scorecanvas.height= 50
    var img1 = new Image()
    img1.src = "./assets/instructionspic1.png"
    var img2 = new Image()
    img2.src = "./assets/instructionspic2.png"
    let click = 0 

    scorectx.font = "25px Arial";
    scorectx.fillStyle = "black"
    scorectx.textAlign = "center"
    scorectx.fillText(`Score: 0`, 75, 30) 

    const easyLevel = document.getElementById("easy");
    const mediumLevel = document.getElementById("medium");
    const hardLevel = document.getElementById("hard");
  
    if (click === 0) {
        easyLevel.addEventListener("click", easycheck)
        mediumLevel.addEventListener("click", mediumcheck)
        hardLevel.addEventListener("click", hardcheck)
        console.log("Entered") 
    }

    function removebuttons() {
        easyLevel.removeEventListener("click", easycheck)
        mediumLevel.removeEventListener("click", mediumcheck)
        hardLevel.removeEventListener("click", hardcheck) 
    }
    
    

    function easycheck() {
        const easygame = new Game("easy")
        const easygameview = new GameView(ctx, canvas, easygame, flagctx, scorectx, img1, img2, "easy")
        easygameview.instructions()
        easygameview.click()
        removebuttons()
    }

    

    function mediumcheck() {
        const mediumgame = new Game("medium")
        const mediumgameview = new GameView(ctx, canvas, mediumgame, flagctx, scorectx, img1, img2, "medium")
        mediumgameview.instructions()
        mediumgameview.click() 
        removebuttons()
    }

    

    function hardcheck() {
        const hardgame = new Game("hard")
        const hardgameview = new GameView(ctx, canvas, hardgame, flagctx, scorectx, img1, img2, "hard")
        hardgameview.instructions()
        hardgameview.click() 
        removebuttons()
    }
   
});


