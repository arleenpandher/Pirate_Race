const EasyGame = require("./easygame.js");


function EasyGameView(ctx, canvas, game, flagctx, scorectx) {
    this.game = game
    this.drawing = ctx 
    this.canvas = canvas
    this.flag = flagctx 
    this.angle = 0
    this.score = scorectx
    this.flagcounter = 0
    this.endgame = false
}

EasyGameView.prototype.appear = function() {
    // this.scoredisplay()
    let dir = this.game.directions[0]
    dir.display(this.drawing)
}

EasyGameView.prototype.disappear = function() {
    let dir = this.game.directions[0]
    dir.discard(this.drawing)
    this.game.directions.shift()
}

EasyGameView.prototype.dir = function() {
    for (i = 0; i < this.game.directions.length; i++) {
        setTimeout(this.appear.bind(this), 4000+(4000*i))
        setTimeout(this.disappear.bind(this), 7000+(4000*i))
        this.flagcounter += 1
        console.log(this.game.directions.length)
    }
}

// EasyGameView.prototype.end = function() {
//     if (this.game.directions.length === 0) {
//         console.log("the end")
//     } else {
//         console.log("playing game")
//     }
// }

EasyGameView.prototype.keydown = function() {
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
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
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
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
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
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
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
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
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
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
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
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
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
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
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
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
    this.flag.strokeStyle = "red"
    this.flag.stroke();
    this.angle += 5
    wcounter += 1
    stop = requestAnimationFrame(westFlag.bind(this))
}
    
EasyGameView.prototype.instructions = function() {
    this.drawing.font = "28px 'Special Elite', cursive";
    this.drawing.fillStyle = "black"
    this.drawing.textAlign = "center"
    this.drawing.fillText("Instructions:", 300, 50)
    this.drawing.fillText("Ahoy pirates, We need to get Oak Island", 300, 100)
    this.drawing.fillText("to recover Marie Antoinette's Jewels.", 300, 130)
    this.drawing.fillStyle = "red"
    this.drawing.fillText("When directions appear to you in", 300, 200)
    this.drawing.fillText("red text press the corresponding ", 300, 230)
    this.drawing.fillText("keyboard buttons as many.", 300, 260)
    this.drawing.fillText("times as you can.", 300, 290)
    this.drawing.fillStyle = "blue"
    this.drawing.fillText("However, other pirate ships will", 300, 345)
    this.drawing.fillText("try to confuse you by showing you the", 300, 375)
    this.drawing.fillText("wrong direction ARRGH. Travel in the", 300, 405)
    this.drawing.fillText("opposite direction as fast as you can.", 300, 435)
    this.drawing.fillStyle = "black"
    this.drawing.fillText("Click on the screen to start.", 300, 555)
    this.drawing.fillText("Good luck Matey!", 300, 585)
}

EasyGameView.prototype.scoredisplay = function() {
    this.score.clearRect(0,0,150,50)
    this.score.font = "25px Arial";
    this.score.fillStyle = "black"
    this.score.textAlign = "center"
    this.score.fillText(`Score: ${this.game.score}`, 75, 30)    
}


EasyGameView.prototype.click = function() {
    this.canvas.addEventListener("click", play.bind(this));
}

function play() {
    this.drawing.clearRect(0, 0, 600, 600)
    this.canvas.style.backgroundImage = "url('./assets/gamebackground.png')"
    this.keydown()
    this.dir()
    setTimeout(this.end.bind(this), 4000*(this.game.directions.length) + 5000)
    // setTimeout(remove, 4000*(this.game.directions.length) + 5000)
}

function remove() {
    window.removeEventListener("keydown", check.bind(this))
}

// EasyGameView.prototype.end = function() {
//     if (this.game.directions.length === 0) {
//         console.log("the end")
//     } else {
//         console.log("playing game")
//     }
// }



EasyGameView.prototype.end = function() {
    if (this.game.score > 50) {
        
        this.drawing.clearRect(0, 0, 600, 600)
        this.canvas.style.backgroundImage = "url('./assets/Win.png')"
        this.drawing.font = "28px 'Special Elite', cursive";
        this.drawing.fillStyle = "red"
        this.drawing.textAlign = "center"
        this.drawing.fillText(`Great Job Matey!`, 300, 100)
        this.drawing.fillText(`Final Score: ${this.game.score}`, 300, 130)  
        this.flag.clearRect(-50,-50, 100, 100)
    } else {
        this.drawing.clearRect(0, 0, 600, 600)
        this.canvas.style.backgroundImage = "url('./assets/Lose.png')"
        this.drawing.font = "28px 'Special Elite', cursive";
        this.drawing.fillStyle = "white"
        this.drawing.textAlign = "center"
        this.drawing.fillText(`Yikes Matey!`, 300, 100)
        this.drawing.fillText(`Final Score: ${this.game.score}`, 300, 130)   
        this.flag.clearRect(-50,-50, 100, 100)
    }
}


module.exports = EasyGameView;