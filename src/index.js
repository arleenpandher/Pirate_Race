const Compdirection = require("./compdirection.js")
const Game = require("./game.js");
const GameView = require("./gameview.js");
const Flag = require("./flag.js");

document.addEventListener('DOMContentLoaded', (event) => {
    
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const flagcanvas = document.getElementById("flag");
    const flagctx = flagcanvas.getContext("2d")
    const scorecanvas = document.getElementById("score");
    const scorectx = scorecanvas.getContext("2d")
   
    const game = new Game()
    const gameview = new GameView(ctx, canvas, game, flagctx, scorectx)
    gameview.instructions()
    gameview.click()
    
    // function click() {
    //     window.addEventListener("click", play);
    // }
    
    // function play() {
    //     ctx.clearRect(0, 0, 600, 600)
    //     canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/53-JL9ShR7ceYc9cT956glP2qzyk0sQQa6MOK_k0Jf-_EuoQBOesZdpdFwL7x1igX0aqxundcT32B1m2HTRtRKqKUvUBQsT8JhmXyH_3hHgPbsYWpBORS1JY55lEKbG7SKg8VJKqQLSYS6Hz1ERPejl4ZcJncalAEoABaJx43EpZPPeSmcW_h-qEjZER9KFfPxzTdQZ2DYXv0Q2fIa_b7FNXiMIXiFNA2mNlOvlttf6k4BSPirm69YAO2JvsnnbuRtEHcTqvM27QPRMP_Y5MXijPDGe6cLlaBSLm6Ny6WwmhD2mzQuxpO_N9PZRHmypZ5l5K5-RIurnk3zz54QMDuvU0Amo5ouEr6IIwxFEtSQ13Npd65Nv2JRjgWQ0rqvICQDbgI6m5wR4eNr6qFIH4uG_Lgj39YdUnom3lIqXM7eqO-IXZWMGU9sjB5tVVSwXfyGwZQNvZlSikOtGlzzgIa_6G2UMeKB5ICCX7uKRGnLWUWaqC3e_-TLhdAfcnER-pfcG6Q0sKd7CivQ7nQpunz5R2U4YbgLj25pF5ysRHcrjw71qZcHphAyW6xl_OcLPfMWaC3ZdS4FEBYU2tVq6_d9o-6OQSkb47JciqwfHF1tjHAyD4KTK5S5xesHa3c8hJeY8Ua4ujpdGkt3HiIqmu-VykxuAZDjJd6jRX0tLQ_ChrBNlQhQiFdBEcQj62L7MekP8_t2nehvk46u5rj6ZMJ18=s328-no?authuser=0')"
    //     gameview.keydown()
    //     gameview.dir()
    //     setTimeout(this.end.bind(this), 3000*(this.game.directions.length) + 4000)
        
    // }
    
    // GameView.prototype.end = function() {
    //     if (game.score > 3) {
    //         ctx.clearRect(0, 0, 600, 600)
    //         canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/Ru5f8Q7Sku8IoRoSUtaf8znc1MAo4iOaP6rW1FM3TxdYzClcUC9GHwOOYYChSlWSrUCZ1wOF0bn1l4jG_Qi7d0Yhj4N8tnU4n1Ltu4Qed92gDXGncrVmakU4LIeRmn2HANMxgNSr36UQLOUqkw3Ahf3wS39sX4gRre2ZqPiBgNaSDoY8lkdiJMY4599C3A1VUd_Q3u_u_mzZlH50t6FB9BHTGqO4bCvBlBhsJaukgwGdhV0mEv1RR2UxhSnVxZjYZ80VEqUJswd5T1LDVNRkY2QbGiip7xveFVMbax8jDcLqgWfDOXuQZtfaltXkE6JnfR_ebMhLnBa9v_ZxiHl4QPE5Ef3MLpgv1o0m9G8HEIYMuyh4OyZ7SWR_f9lfMqzZqELmXsrk58cZa0GJdbX_Vyeh1xtS6zIly2MfOFC6KhnHIxk1HMZVkcL-p5rtLMZ5eIb2v2dTzNq_eFXig1ETD331f0oLl6bTgxjiBTlDrnrRZwPhJ6T5JPsUP91LW20cBGmmXQVIHwoQlEE17NhfgRTrOvF38dXzlkOHyI3cb7VhQNd-fFCUHq7ZYIfkNfAziiOwBVPLB9zbunliRH9royQaYDrC_cYJoJS_eH1RcztqZJuoDZdi86ufDzf_3dbl6Iaw7jNHcd7BpIlaIHEwaa_nR2myS41rJ6ZUDHAdzq2_dMWRZEbjagX3zY91ZUTMGx5rwoT0tXKbCFH1n6wC0GM=w900-h675-no?authuser=0')"
    //         ctx.font = "25px Arial";
    //         ctx.fillStyle = "red"
    //         ctx.textAlign = "center"
    //         ctx.fillText(`Great Job Matey! Score: ${this.game.score}`, 300, 100)  
    //         flagctx.clearRect(-50,-50, 100, 100)
    //     } else {
    //         ctx.clearRect(0, 0, 600, 600)
    //         canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/Bhr84A3Yp_4FdfDZoHKs5W6NSHIb2S5J5eGzqb_5RqdVISDMJjP_ZWXIMylKSkp_qfPy0OoLNoeQwRr5xTnZWQRexl1zrXpHYTLaa7u5gjEn1Ymdzkdo-Jmd4UEnGYUEPYA5zIdVssFJ3gyF2CGJIfh9nd2zwgxwr6UuKN6OP3SMPv9Oq78pNndHsK0KBWmyB6CzERYGKW8OOYyOJrUjRh85T4rHJK08sWkDogLGP0en-KBG7qY3ruCkAwK9LjhY_Lz6n5kkslMDN25NOzy90vj0JruqDbeQ9zSROEBUtC6X22a6l0V7qm6yZxYeRhhgJPw8t6PTe3KfO0ShRRDjQZ2ap1iBk_cBHglWclfAGSP3pkqmfI-ZkZMxJIv7D6LR8ZhPu4vkmDKwuN3h0_zMWTt3EEuoJubWA7IfM2flvqEMjWBNfJKKjfCD68AoeCKU4b-xsKRRKPu3mDL6hIhIbArlifuZieUE3jHwionKJiJWupHyP42rcDv6DoITaTcn6p25ImB_WpGIm2oa3nc8z-i3sTOqnObFV6Eo7ocfKH06Fk0pgAU_a5Duqoxxtamfjakso9t7wr_EVSIOYmXgtt7G2Thzpmd1a4KJPguyhw4OzB_vhCqL38uXfXqCFePqVj1Ah5H2hFdhnY-3k8D-hB0_Tc3K0yvr8lffIy0U2rjlOGnPwINaBx4BoqZYLeb4K4SkmxsM5mAQGdN-WgAQrnQ=w510-h339-no?authuser=0')"
    //         ctx.font = "25px Arial";
    //         ctx.fillStyle = "white"
    //         ctx.textAlign = "center"
    //         ctx.fillText(`Yikes Matey! Score: ${this.game.score}`, 300, 100) 
    //         flagctx.clearRect(-50,-50, 100, 100)
    //     }
    // }

    // click()
    
});


