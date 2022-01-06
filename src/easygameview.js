const EasyGame = require("./easygame.js");


function EasyGameView(ctx, canvas, game, flagctx, scorectx) {
    this.game = game
    this.drawing = ctx 
    this.canvas = canvas
    this.flag = flagctx 
    this.angle = 0
    this.score = scorectx
    this.flagcounter = 0
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
    }   
}

EasyGameView.prototype.keydown = function() {
    window.addEventListener("keydown", check.bind(this), false);
}
// GameView.prototype.keyup = function() {
//     window.addEventListener("keyup", base.bind(this), false);
// }
    
// function check(key) {
//     if (key.keyCode == "38") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/uzgN8D1jDKvrTUdyEHF24ejb-ZfcZrsTr2gQB2HgAXllyoyj9_RaQPL1vwhQq61McUggMVMSujtcmvbJCRRZMdpHaYL-FEAEeTsqe4wcQW7SWL9n1CVIOTw73U4gzA5_XuXFe9yMkWd-c2f7G3piOtT5aHxk9E4wpOpDXYfIkcqSkUzIcihovrvWAtpi8lP-9EIGigjA2TCNrHHxS8XOMAjzSPc59669ZUeAhDEI7eWJLhXmqOxzIr0Kwl5Fs6Tokadjqi_9XMcbfXJCSLaVhmdWLipj9Iz3c7e0dlKAxGIZuPCQVsjwQrNpsMY-YMSIlBu6St0fpuZwKeI7TT_HIaRWLxSJYurd72N6dhRBnsn4F7qlPKDqjSBUdjpT7k-QHnaXi91H0nPS0RX9FC8B05ndrzX-4iiPB7wKZ0z7N6kD4EbJqXEOvt_A-xJqZWp0ctbRsiX1rptHCABDaibh6ZAp1v6jjY-82BvT4r-EYHJ44-egbqWoljxHbsT48jVJGzAu1EbcfJc-9oilRhSk1Y0ywDVn3orwT93vQC7yp4xF0zkLEC82gpkkLyKCbYGL-9VwSZ4PjrvcaA4T-nLy_Yv6NyFIsU--gkbDFnqwdYKutvFmvC7Siosoj9Uf9xpMUgLtbT5daFDMhUrQvchFYXTgvW4e3O0gxhj0tWR9ZiiNUPq-9BHAMHs9gqtpu4qTNY3vlgZZbZf8dxTTpxF3QJA=s943-no?authuser=0')"
//         if (northCheck(this.game.directions[0])) this.game.score += 1
//     } else if (key.keyCode == "39") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/-hGIkqXg10laJGJp5WCesac0Rxg7dNTOBrzSxEY4d_PDSqn1GBMNCr8BrdAU9WzEeRhGraYZIINUjRj_tfqdgbLKOPhGBaC_Cni0ZNLhtRCXuxoasGX-qCqQM0xZj66K4sMntCdMrzS6aZE97cQUbC5qDR0UtNwduYJIrKhtapQIZ5AJCzaM4gWjveuZ9pB0yoQcG8Qy-Q59zFbUDU2NrzoaAX6BTjBOGT78ed4zbUXGsZ9rwPtPpqsCg7nivrYFoqQuFqBzuEnKl-LS48-5j2B7mx3DdTvLUyOmWMM4oBKIYaEFYtB92O3WFcmDc2PPfehQSYaJvl4g0sfNDxR0oEKdTBp1XewsFicEO38y2hElnOfTT0QXRNqEGP8hKFQUZNlSfYiQO-lG9UDICcB7_Lv61NkA_F2V58f1ut6sLCCuti4UyBVhJ3mdq_oeoHTTGyll4lN1tr0TYwMbnKFj7sp7d0xI7aqcqHvw_dOBDim-Nfus-YzyOZtbVNxSWIpHGpiaCOGodxqFTI5UVdXJqhhHV23dTgeHye0dlkszpwCoEBTc75uYedKTpVRHiZ7vB5S8UB74HD68Xjrz7v3bNJUXqmDJ3Xx987VM8sRVKnwVO1Slj_1KMHecdOCfvf_jwPWYGSFU-NchoLPByOkhhxkdZBS_noTIEdrDQwhg0-wOWkDbbzYHXZl3MqhQcgnEzBoH4Rcm8B6h-09bBOT6LrM=s943-no?authuser=0')"
//         if (eastCheck(this.game.directions[0])) this.game.score += 1
//     } else if (key.keyCode == "40") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/jStMUmRZjtE4gHpvijeHYwgFxbUquxBvEBloJpKJ4JAhEhposiFKXPyqfbMhRcvx-yeNeFBj5PfXawawroHUti_gwLEhx93pIzzNdOkJC3wGedw1rQ1rAK1pjNn5K0fQwJPyq_4g07gT7wtyVVqaNO01Q7yqswhtnbyhPHM2ElVezZT10oHQXEe4QlO-jYHdd1UAS6fxAQsNql9IvOOkaMrmEDwQEIHHVRmZP0nTjRdpShf9ci-kQJcXjwdWR0xXfwlADINz7S527TpjZaSsY0clkk2ghETgKiRdROF9OuXgjeUR_EmdWP7UDMjJkF6eOBjsOmLhW-MPv4yqi5OAvpwoF4Kwe1MfXoK4efqPkBsV_Z6R7B5Gjm6UH-A5LGy79qvqaRiilPQB2EYvw9peKyQ-GK2IJZhAXQUKbFTIBoMkN1MtAma07w7_63R895TzG1kEtESJBgLlLilKZhy4Eo_1hT6x9DpDHMRxRDNpNgBfo544iaPaAOrETDYJC10cxkLFeaSDS5GLbPHwK-C2H-BtWBR7Q8mnQhQ3eBqzIHJ5OYs-ElYFihz7SXP79FKznRymUl4uvtU3hKZvTIKp7asgMPnPo64mkWS_eDbkqTAudYhQP5NIx4YXZpNOTyPE0qD-5pSS32usGwUtZc0_gO2tWF22RM-qIMlChFMHBpPS-9-gSJ5lFPSXopptnQzxzOfjDhSuyiVogns8atk9zDI=s943-no?authuser=0')"
//         if (southCheck(this.game.directions[0])) this.game.score += 1
//     } else if (key.keyCode == "37") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/23qnqTfkcFOK87-NbuI9EPUldeDULBAaL01ZWNwBW087S9yV4ag50USQSMkMXp9TwyWYcipXAY3vhB6P3aFcziGHGnS-RKYTUSXTmjK5YQpsxxPK7VW8z5_mPm3SZ_iXn3JqAk_p4oBbtqby5hAd92nwlBdrG5_eSoxuHkuTSAmK15DPUuzO54lyYtGlQQokYzxW0HuK9Sfyz89p46MgtEKHJpvKCxgQ1DqspYArEBcchjiMLS0z-_EmWc4Hxrhcj9tJ6ZKPTSKTZ_oUoNxDzRLR345F0II7jnveBkokK_T5_2y32HyWr6rx8u4a59PWwyabWWwckrDphg4wt9H2cX_wHE_CchgKCNByCeoZ-OCauTUVenAXwlbde8-UOsZjGhSTQdlAuQgulMgw7ksBw2X58JIHqBcy30repQaVV5j8Sg6vGGbeR74KstIptIyX_oSIV1miS5KCMyz12tgoFQFYEe2CJfTEuQ5-7VDxlIJZRzHSV9XKyUrW8BL_D7vUtS4rEDK7wvS9Fl2LYtPwPg3yMhixYAdRpNWtOLNDQRi3VKB-CMBSHxA5C-UlqL_-AJ6213Td8Q6ZIIOP7BhzZFRF82wk19o193FdQycsmJcjKnG9y7_Bv13k22Orjsyxxi_fNVL798EiPROsvZPZPEwDYiAq9F6OxgFby_CZQuyo0xBpg7d2nVCYhWx-Ex1H_PRnLMh3k1WpQE_R5Dym5a4=s943-no?authuser=0')"
//         if (westCheck(this.game.directions[0])) this.game.score += 1
//     }   
// }

function check(key) {
    if (key.keyCode == "38") {
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
    if (directioncheck.direction === "North" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "South" && directioncheck.color === "blue") return true 
} 

function eastCheck(directioncheck) {
    if (directioncheck.direction === "East" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "West" && directioncheck.color === "blue") return true 
} 

function southCheck(directioncheck) {
    if (directioncheck.direction === "South" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "North" && directioncheck.color === "blue") return true 
} 

function westCheck(directioncheck) {
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
    console.log(this.angle)
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
    this.drawing.font = "30px Arial";
    this.drawing.fillStyle = "black"
    this.drawing.textAlign = "center"
    this.drawing.fillText("Instructions:", 300, 120)
    this.drawing.fillText("Ahoy pirates, We need to get Oak Island", 300, 150)
    this.drawing.fillText("today to recover Marie Antoinette's Jewels.", 300, 180)
    this.drawing.fillStyle = "red"
    this.drawing.fillText("When directions appear to you in", 300, 220)
    this.drawing.fillText("red text press the corresponding ", 300, 255)
    this.drawing.fillText("keyboard buttons as many times as you can.", 300, 285)
    this.drawing.fillStyle = "blue"
    this.drawing.fillText("However, other pirate ships will try to confuse", 300, 345)
    this.drawing.fillText("you by showing you the wrong direction", 300, 375)
    this.drawing.fillText("ARRGH. Travel in the opposite direction", 300, 405)
    this.drawing.fillText("as fast as you can.", 300, 435)
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
    this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/53-JL9ShR7ceYc9cT956glP2qzyk0sQQa6MOK_k0Jf-_EuoQBOesZdpdFwL7x1igX0aqxundcT32B1m2HTRtRKqKUvUBQsT8JhmXyH_3hHgPbsYWpBORS1JY55lEKbG7SKg8VJKqQLSYS6Hz1ERPejl4ZcJncalAEoABaJx43EpZPPeSmcW_h-qEjZER9KFfPxzTdQZ2DYXv0Q2fIa_b7FNXiMIXiFNA2mNlOvlttf6k4BSPirm69YAO2JvsnnbuRtEHcTqvM27QPRMP_Y5MXijPDGe6cLlaBSLm6Ny6WwmhD2mzQuxpO_N9PZRHmypZ5l5K5-RIurnk3zz54QMDuvU0Amo5ouEr6IIwxFEtSQ13Npd65Nv2JRjgWQ0rqvICQDbgI6m5wR4eNr6qFIH4uG_Lgj39YdUnom3lIqXM7eqO-IXZWMGU9sjB5tVVSwXfyGwZQNvZlSikOtGlzzgIa_6G2UMeKB5ICCX7uKRGnLWUWaqC3e_-TLhdAfcnER-pfcG6Q0sKd7CivQ7nQpunz5R2U4YbgLj25pF5ysRHcrjw71qZcHphAyW6xl_OcLPfMWaC3ZdS4FEBYU2tVq6_d9o-6OQSkb47JciqwfHF1tjHAyD4KTK5S5xesHa3c8hJeY8Ua4ujpdGkt3HiIqmu-VykxuAZDjJd6jRX0tLQ_ChrBNlQhQiFdBEcQj62L7MekP8_t2nehvk46u5rj6ZMJ18=s328-no?authuser=0')"
    this.keydown()
    this.dir()
    setTimeout(this.end.bind(this), 4000*(this.game.directions.length) + 2000)
    
}

EasyGameView.prototype.end = function() {
    if (this.game.score > 35) {
        this.drawing.clearRect(0, 0, 600, 600)
        this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/Ru5f8Q7Sku8IoRoSUtaf8znc1MAo4iOaP6rW1FM3TxdYzClcUC9GHwOOYYChSlWSrUCZ1wOF0bn1l4jG_Qi7d0Yhj4N8tnU4n1Ltu4Qed92gDXGncrVmakU4LIeRmn2HANMxgNSr36UQLOUqkw3Ahf3wS39sX4gRre2ZqPiBgNaSDoY8lkdiJMY4599C3A1VUd_Q3u_u_mzZlH50t6FB9BHTGqO4bCvBlBhsJaukgwGdhV0mEv1RR2UxhSnVxZjYZ80VEqUJswd5T1LDVNRkY2QbGiip7xveFVMbax8jDcLqgWfDOXuQZtfaltXkE6JnfR_ebMhLnBa9v_ZxiHl4QPE5Ef3MLpgv1o0m9G8HEIYMuyh4OyZ7SWR_f9lfMqzZqELmXsrk58cZa0GJdbX_Vyeh1xtS6zIly2MfOFC6KhnHIxk1HMZVkcL-p5rtLMZ5eIb2v2dTzNq_eFXig1ETD331f0oLl6bTgxjiBTlDrnrRZwPhJ6T5JPsUP91LW20cBGmmXQVIHwoQlEE17NhfgRTrOvF38dXzlkOHyI3cb7VhQNd-fFCUHq7ZYIfkNfAziiOwBVPLB9zbunliRH9royQaYDrC_cYJoJS_eH1RcztqZJuoDZdi86ufDzf_3dbl6Iaw7jNHcd7BpIlaIHEwaa_nR2myS41rJ6ZUDHAdzq2_dMWRZEbjagX3zY91ZUTMGx5rwoT0tXKbCFH1n6wC0GM=w900-h675-no?authuser=0')"
        this.drawing.font = "25px Arial";
        this.drawing.fillStyle = "black"
        this.drawing.textAlign = "center"
        this.drawing.fillText(`Great Job Matey! Score: ${this.game.score}`, 300, 100)  
        this.flag.clearRect(-50,-50, 100, 100)
    } else {
        this.drawing.clearRect(0, 0, 600, 600)
        this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/Bhr84A3Yp_4FdfDZoHKs5W6NSHIb2S5J5eGzqb_5RqdVISDMJjP_ZWXIMylKSkp_qfPy0OoLNoeQwRr5xTnZWQRexl1zrXpHYTLaa7u5gjEn1Ymdzkdo-Jmd4UEnGYUEPYA5zIdVssFJ3gyF2CGJIfh9nd2zwgxwr6UuKN6OP3SMPv9Oq78pNndHsK0KBWmyB6CzERYGKW8OOYyOJrUjRh85T4rHJK08sWkDogLGP0en-KBG7qY3ruCkAwK9LjhY_Lz6n5kkslMDN25NOzy90vj0JruqDbeQ9zSROEBUtC6X22a6l0V7qm6yZxYeRhhgJPw8t6PTe3KfO0ShRRDjQZ2ap1iBk_cBHglWclfAGSP3pkqmfI-ZkZMxJIv7D6LR8ZhPu4vkmDKwuN3h0_zMWTt3EEuoJubWA7IfM2flvqEMjWBNfJKKjfCD68AoeCKU4b-xsKRRKPu3mDL6hIhIbArlifuZieUE3jHwionKJiJWupHyP42rcDv6DoITaTcn6p25ImB_WpGIm2oa3nc8z-i3sTOqnObFV6Eo7ocfKH06Fk0pgAU_a5Duqoxxtamfjakso9t7wr_EVSIOYmXgtt7G2Thzpmd1a4KJPguyhw4OzB_vhCqL38uXfXqCFePqVj1Ah5H2hFdhnY-3k8D-hB0_Tc3K0yvr8lffIy0U2rjlOGnPwINaBx4BoqZYLeb4K4SkmxsM5mAQGdN-WgAQrnQ=w510-h339-no?authuser=0')"
        this.drawing.font = "25px Arial";
        this.drawing.fillStyle = "white"
        this.drawing.textAlign = "center"
        this.drawing.fillText(`Yikes Matey! Score: ${this.game.score}`, 300, 100) 
        this.flag.clearRect(-50,-50, 100, 100)
    }
}


module.exports = EasyGameView;