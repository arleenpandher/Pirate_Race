const Compdirection = require("./compdirection.js")

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    console.log("Webpack is working!")

    const text = new Compdirection("North")
    text.display(ctx)

});
