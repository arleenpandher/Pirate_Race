const CONSTANTS = {
    STARTPOS: [0,0],
    ENDPOS: [50,-50],
    COLOR: "red",
    WIDTH: 6,
    DIM_X: 100,
    DIM_Y: 100,
    ANGLE: 0
};

function Flag() {
    this.startpos = CONSTANTS.STARTPOS
    this.endpos = CONSTANTS.ENDPOS
    this.color = CONSTANTS.COLOR
    this.width = CONSTANTS.WIDTH
    this.angle = 0
}

Flag.prototype.initialflag = function(flagctx) {
    flagctx.translate(50,50)
    flagctx.rotate(0 * (Math.PI / 180));
    flagctx.beginPath();
    flagctx.moveTo(CONSTANTS.STARTPOS[0],CONSTANTS.STARTPOS[1]);
    flagctx.lineTo(CONSTANTS.ENDPOS[0],CONSTANTS.ENDPOS[1]);
    flagctx.lineWidth = CONSTANTS.WIDTH
    flagctx.strokeStyle = CONSTANTS.COLOR
    flagctx.stroke();
}

// Flag.prototype.eastFlag = function(flagctx) {
//     if (stop > 45) return 
//     flagctx.setTransform(1,0,0,1,0,0)
//     flagctx.clearRect(-50,-50, 100, 100)
//     flagctx.setTransform(1,0,0,1,0,0)
//     flagctx.translate(50,50)
//     flagctx.rotate(this.angle * (Math.PI / 180));
//     flagctx.beginPath();
//     flagctx.moveTo(0,0);
//     flagctx.lineTo(50,-50);
//     flagctx.lineWidth = 6
//     flagctx.strokeStyle = "red"
//     flagctx.stroke();
//     this.angle += 1
//     stop = requestAnimationFrame(this.eastFlag.bind(flagctx))
// }



module.exports = Flag