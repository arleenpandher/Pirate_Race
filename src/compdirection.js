


function Compdirection(direction, color) {
    this.direction = direction 
    this.color = color
}

Compdirection.prototype.display = function(ctx) {
    ctx.font = "30px Arial";
    ctx.fillStyle = this.color
    ctx.textAlign = "center"
    ctx.fillText(this.direction, 300, 75)
    // ctx.strokeText(this.direction, 180, 50);
    
}

Compdirection.prototype.discard = function(ctx) {
    ctx.clearRect(0, 0, 600, 600)
}

module.exports = Compdirection;