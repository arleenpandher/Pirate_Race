


function Compdirection(direction, color) {
    this.direction = direction 
    this.color = color
}

Compdirection.prototype.display = function(ctx) {
    ctx.font = "30px Arial";
    ctx.fillStyle = this.color
    ctx.fillText(this.direction, 180, 50)
    // ctx.strokeText(this.direction, 180, 50);
    
}

module.exports = Compdirection;