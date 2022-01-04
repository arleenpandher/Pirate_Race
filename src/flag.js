const CONSTANTS = {
    STARTPOS: [335,540],
    ENDPOS: [395,460],
    COLOR: "red",
    WIDTH: 6,
};

function Flag() {
    this.startpos = CONSTANTS.STARTPOS
    this.endpos = CONSTANTS.ENDPOS
    this.color = CONSTANTS.COLOR
    this.width = CONSTANTS.WIDTH
}

Flag.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startpos[0], this.startpos[1])
    ctx.lineTo(this.endpos[0], this.endpos[1])
    ctx.lineWidth = this.width
    ctx.strokeStyle = this.color 
    ctx.stroke()
}

Flag.prototype.rotate1 = function() {
    this.rotate(20 * Math.PI / 180)
}

Flag.prototype.northFlag = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startpos[0], this.startpos[1])
    ctx.lineTo(335, 440)
    ctx.lineWidth = this.width
    ctx.strokeStyle = this.color 
    ctx.stroke()
}

Flag.prototype.eastFlag = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startpos[0], this.startpos[1])
    ctx.lineTo(435, 540)
    ctx.lineWidth = this.width
    ctx.strokeStyle = this.color 
    ctx.stroke()
}

Flag.prototype.southFlag = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startpos[0], this.startpos[1])
    ctx.lineTo(335, 640)
    ctx.lineWidth = this.width
    ctx.strokeStyle = this.color 
    ctx.stroke()
}

Flag.prototype.westFlag = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startpos[0], this.startpos[1])
    ctx.lineTo(235, 540)
    ctx.lineWidth = this.width
    ctx.strokeStyle = this.color 
    ctx.stroke()
}

module.exports = Flag