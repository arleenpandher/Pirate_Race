const EasyGame = require("./game.js");


function GameView(ctx, canvas, game, flagctx, scorectx, img1, img2, type) {
    this.game = game
    this.drawing = ctx 
    this.canvas = canvas
    this.flag = flagctx 
    this.angle = 0
    this.score = scorectx
    this.flagcounter = 0
    this.endgame = false
    this.img1 = img1
    this.img2 = img2
    this.type = type
}

GameView.prototype.appear = function() {
    // this.scoredisplay()
    let dir = this.game.directions[0]
    dir.display(this.drawing)
}

GameView.prototype.disappear = function() {
    let dir = this.game.directions[0]
    dir.discard(this.drawing)
    this.game.directions.shift()
}

GameView.prototype.dir = function() {
    if (this.type === "easy") {
        for (i = 0; i < this.game.directions.length; i++) {
            setTimeout(this.appear.bind(this), 4000+(4000*i))
            setTimeout(this.disappear.bind(this), 7000+(4000*i))
            this.flagcounter += 1
            console.log(this.game.directions.length)
        }
    } else if (this.type === "medium") {
        for (i = 0; i < this.game.directions.length; i++) {
            setTimeout(this.appear.bind(this), 3000+(3000*i) + 1000)
            setTimeout(this.disappear.bind(this), 6000+(3000*i))
            this.flagcounter += 1
        }   
    } else {
        for (i = 0; i < this.game.directions.length; i++) {
            setTimeout(this.appear.bind(this), 4000+(2000*i))
            setTimeout(this.disappear.bind(this), 5000+(2000*i))
            this.flagcounter += 1
        }   
    }
}

// EasyGameView.prototype.end = function() {
//     if (this.game.directions.length === 0) {
//         console.log("the end")
//     } else {
//         console.log("playing game")
//     }
// }

GameView.prototype.keydown = function() {
        window.addEventListener("keydown", check.bind(this), false);
        // window.addEventListener("keydown", test, false)

    // window.addEventListener("keydown", check.bind(this), false);
}

function test(key) {
    if (key.keyCode == "38") {
        null 
    } else if (key.keyCode == "39") {
        null
    } else if (key.keyCode == "40") {
        null 
    } else if (key.keyCode == "37") {
        null
    }
}

function check(key) {
    if (this.game.directions[0] === undefined) {
        return null 
    } else if (key.keyCode == "38") {
        northFlag.call(this)
        if (northCheck(this.game.directions[0])) {
            this.game.score += 1
            this.scoredisplay()
        } else {
            this.game.score -= 1
            this.scoredisplay()
        }
    } else if (key.keyCode == "39") {
        eastFlag.call(this)
        if (eastCheck(this.game.directions[0])) {
            this.game.score += 1
            this.scoredisplay()
        } else {
            this.game.score -= 1
            this.scoredisplay()
        }
    } else if (key.keyCode == "40") {
        southFlag.call(this)
        if (southCheck(this.game.directions[0])) {
            this.game.score += 1
            this.scoredisplay()
        } else {
            this.game.score -= 1
            this.scoredisplay()
        }
    } else if (key.keyCode == "37") {
        westFlag.call(this)
        if (westCheck(this.game.directions[0])) {
            this.game.score += 1
            this.scoredisplay()
        } else {
            this.game.score -= 1
            this.scoredisplay()
        }
    }   
}


function northCheck(directioncheck) {
    if (directioncheck === undefined) return null
    if (directioncheck.direction === "North" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "South" && directioncheck.color === "blue") return true 
} 

function eastCheck(directioncheck) {
    if (directioncheck === undefined) return null
    if (directioncheck.direction === "East" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "West" && directioncheck.color === "blue") return true 
} 

function southCheck(directioncheck) {
    if (directioncheck === undefined) return null
    if (directioncheck.direction === "South" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "North" && directioncheck.color === "blue") return true 
} 

function westCheck(directioncheck) {
    if (directioncheck === undefined) return null
    if (directioncheck.direction === "West" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "East" && directioncheck.color === "blue") return true 
} 

let ncounter = 0
function northFlag() {
    if (ncounter > 9) {
        cancelAnimationFrame(9)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(42,-42);
        this.flag.lineTo(42,0)
        this.flag.lineTo(20,-20)
        this.flag.lineWidth =  2.5
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        this.angle = 0
        ncounter = 0
        return
    } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(-this.angle * (Math.PI / 180));

    this.flag.beginPath()
    this.flag.moveTo(20,-20)
    this.flag.lineTo(42,0)
    this.flag.lineTo(42,-42)
    this.flag.closePath()
    this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(42,-42);
        this.flag.lineTo(42,0)
        this.flag.lineTo(20,-20)
        this.flag.lineWidth =  2.5
        this.flag.strokeStyle = "red"
        this.flag.stroke();
    this.angle += 5
    ncounter += 1
    stop = requestAnimationFrame(northFlag.bind(this))
}
    
let ecounter = 0
function eastFlag() {
    if (ecounter > 9) {
        cancelAnimationFrame(9)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(42,-42);
        this.flag.lineTo(42,0)
        this.flag.lineTo(20,-20)
        this.flag.lineWidth =  2.5
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        this.angle = 0
        ecounter = 0
        return
    } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(this.angle * (Math.PI / 180));
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(42,-42);
    this.flag.lineTo(42,0)
    this.flag.lineTo(20,-20)
    this.flag.lineWidth =  2.5
    this.flag.strokeStyle = "red"
    this.flag.stroke();
    this.angle += 5
    ecounter += 1
    stop = requestAnimationFrame(eastFlag.bind(this))
}
let scounter = 0

function southFlag() {
    if (scounter > 27) {
        cancelAnimationFrame(9)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(42,-42);
        this.flag.lineTo(42,0)
        this.flag.lineTo(20,-20)
        this.flag.lineWidth =  2.5
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        scounter = 0
        this.angle = 0
        return
    } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(this.angle * (Math.PI / 180));
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(42,-42);
    this.flag.lineTo(42,0)
    this.flag.lineTo(20,-20)
    this.flag.lineWidth =  2.5
    this.flag.strokeStyle = "red"
    this.flag.stroke();
    this.angle += 5
    scounter += 1
    stop = requestAnimationFrame(southFlag.bind(this))
}

let wcounter = 0
function westFlag() {
    if (wcounter > 16) {
        cancelAnimationFrame(16)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(42,-42);
        this.flag.lineTo(42,0)
        this.flag.lineTo(20,-20)
        this.flag.lineWidth =  2.5
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        wcounter = 0
        this.angle = 0
        return
    } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(-this.angle * (Math.PI / 180));
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(42,-42);
    this.flag.lineTo(42,0)
    this.flag.lineTo(20,-20)
    this.flag.lineWidth =  2.5
    // this.flag.fillStyle = "red"
    this.flag.strokeStyle = "red"
    // this.flag.fill();
    this.flag.stroke();
    this.angle += 5
    wcounter += 1
    stop = requestAnimationFrame(westFlag.bind(this))
}
    
GameView.prototype.instructions = function() {
    var img1 = new Image()
    img1.src = "../assets/instructionspic1.png"
    this.canvas.style.backgroundImage = "url('./assets/blankinstructions.png')"
    this.drawing.font = "20px 'Special Elite', cursive";
    // this.drawing.fontWeight = "800"
    this.drawing.fillStyle = "black"
    this.drawing.textAlign = "center"
    this.drawing.fillText("Instructions:", 300, 50)
    this.drawing.font = "15.5px 'Special Elite', cursive";
    this.drawing.fillText("Ahoy pirates, we will recover Mariew Antoinette's Jewels from Oak Island", 300, 80)
    this.drawing.fillStyle = "red"
    this.drawing.font = "24px 'Special Elite', cursive";
    this.drawing.fillText("When directions appear in red text press the ", 300, 125)
    this.drawing.fillText("corresponding keyboard buttons as many times.", 300, 155)
    // this.drawing.fillText("", 300, 260)
    // this.drawing.fillText("times as you can.", 300, 290)
    this.drawing.drawImage(this.img1, 200, 157, 200, 150)
    this.drawing.fillStyle = "blue"
    this.drawing.font = "24px 'Special Elite', cursive";
    this.drawing.fillText("Other pirates will try to confuse you by", 300, 315)
    this.drawing.fillText("showing the wrong direction. ARGH! When you see", 300, 345)
    this.drawing.fillText("blue text, travel in the opposite direction.", 300, 375)
    this.drawing.drawImage(this.img2, 200, 377, 200, 150)
    this.drawing.fillStyle = "black"
    this.drawing.fillText("Click on the screen to start.", 300, 555)
    this.drawing.fillText("Good luck Matey!", 300, 585)
}

GameView.prototype.scoredisplay = function() {
    this.score.clearRect(0,0,150,50)
    this.score.font = "25px Arial";
    this.score.fillStyle = "black"
    this.score.textAlign = "center"
    this.score.fillText(`Score: ${this.game.score}`, 75, 30)    
}


GameView.prototype.click = function() {
    this.canvas.addEventListener("click", play.bind(this));
}

function play() {
    // this.canvas.removeEventListener("click", play.bind(this));
    this.drawing.clearRect(0, 0, 600, 600)
    this.canvas.style.backgroundImage = "url('./assets/gamebackground.png')"
    this.keydown()
    this.dir()
    if (this.type === "easy") {
        setTimeout(this.end.bind(this), 4000*(this.game.directions.length) + 5000)
    } else if (this.type === "medium") {
        setTimeout(this.end.bind(this), 3000*(this.game.directions.length) + 4000)
    } else {
        setTimeout(this.end.bind(this), 2000*(this.game.directions.length) + 5000)
    }
}


// EasyGameView.prototype.end = function() {
//     if (this.game.directions.length === 0) {
//         console.log("the end")
//     } else {
//         console.log("playing game")
//     }
// }



GameView.prototype.end = function() {
    if ((this.type === "easy" && this.game.score > 25) ||
    (this.type === "medium" && this.game.score > 30) ||
    (this.type === "hard" && this.game.score > 10)
    ) {
        
        this.drawing.clearRect(0, 0, 600, 600)
        this.canvas.style.backgroundImage = "url('./assets/Win.png')"
        this.drawing.font = "28px 'Special Elite', cursive";
        this.drawing.fillStyle = "red"
        this.drawing.textAlign = "center"
        this.drawing.fillText(`Great Job Matey!`, 300, 100)
        this.drawing.fillText(`Final Score: ${this.game.score}`, 300, 130)
        this.drawing.fillStyle = "white"
        this.drawing.font = "50px 'Special Elite', cursive";
        this.drawing.fillText(`Press the RESTART`, 300, 210)
        this.drawing.fillText(`button to Play Again`, 300, 250)   
        this.flag.clearRect(-50,-50, 100, 100)
    } else {
        this.drawing.clearRect(0, 0, 600, 600)
        this.canvas.style.backgroundImage = "url('./assets/Lose.png')"
        this.drawing.font = "28px 'Special Elite', cursive";
        this.drawing.fillStyle = "white"
        this.drawing.textAlign = "center"
        this.drawing.fillText(`Yikes Matey!`, 300, 100)
        this.drawing.fillText(`Final Score: ${this.game.score}`, 300, 130)
        this.drawing.fillStyle = "white"
        this.drawing.font = "50px 'Special Elite', cursive";
        this.drawing.fillText(`Press the RESTART`, 300, 210)
        this.drawing.fillText(`button to Play Again`, 300, 250)
        this.flag.clearRect(-50,-50, 100, 100)
    }
}


module.exports = GameView;