let cvs = document.querySelector("#myCanvas")
let ctx = cvs.getContext('2d')

// PROPERTI
let bola = new Image()
bola.src = "assets/ball.png"
let bolaX = 387
let bolaY = 159
bola.handledBy = null
bola.width = 25
bola.height = 25

let garisKanan = 800 - 30
let garisKiri = 30

let lapangan = new Image()
lapangan.src = "assets/field.png"

let pemainA = new Image()
pemainA.src = "assets/timA.png"
let pemainB = new Image()
pemainB.src = "assets/timB.png"
let pemainWidth = 100
let pemainHeight = 100

// TIM A
let playersA = []
playersA[0] = {
    x: 200,
    y: 100
}
playersA[1] = {
    x: 200,
    y: 250
}

// TIM B
let playersB = []
playersB[0] = {
    x: 500,
    y: 20
}
// playersB[1] = {
//     x: 500,
//     y: 250
// }