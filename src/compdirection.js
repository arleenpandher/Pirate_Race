


function Compdirection(direction) {
    this.direction = direction 
}

Compdirection.prototype.display = function(ctx) {
    ctx.font = "30px Arial";
    ctx.strokeText(this.direction, 10, 50);
}

module.exports = Compdirection;