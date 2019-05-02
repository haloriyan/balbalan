function createCanvas(w, h, r) {
    let cvs = document.createElement('canvas')
    cvs.setAttribute('id', 'myCanvas')
    cvs.width = w * r
    cvs.height = h * r
    cvs.style.width = w + 'px'
    cvs.style.height = h + 'px'
    cvs.getContext('2d').setTransform(r, 0, 0, r, 0, 0)
    return cvs
}

let canvas = createCanvas(800, 450, 5)
document.querySelector('body').appendChild(canvas)