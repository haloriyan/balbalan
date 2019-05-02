function draw() {
    // init lapangan
    ctx.drawImage(lapangan, 0, 0, 800, 450)

    // init bola
    ctx.drawImage(bola, bolaX, bolaY, bola.width, bola.height)

    for(let i = 0; i < playersA.length; i++) {
        ctx.drawImage(pemainA, playersA[i].x, playersA[i].y, pemainWidth, pemainHeight)

        if(playersA[i].x > bolaX) {
            playersA[i].x--
        }else {
            playersA[i].x++
        }
        if(playersA[i].y > bolaY) {
            playersA[i].y--
        }else {
            playersA[i].y++
        }

        if(bolaX + bola.width <= playersA[i].x && bolaY <= playersA[i].y + pemainHeight) {
            bolaX -= 1
        }
    }

    for(let i = 0; i < playersB.length; i++) {
        ctx.drawImage(pemainB, playersB[i].x, playersB[i].y, pemainWidth, pemainHeight)

        if(playersB[i].x >= bolaX) {
            playersB[i].x--
        }else {
            playersB[i].x++
        }
        if(playersB[i].y >= bolaY) {
            playersB[i].y--
        }else {
            playersB[i].y++
        }

        if(bolaX + bola.width <= playersB[i].x && bolaY <= playersB[i].y + pemainHeight) {
            bolaX -= 1
        }
    }

    if(bolaX + bola.width >= garisKanan) {
        // location.reload()
    }

    // deteksi goal
    if(bolaY >= 155 && bolaY <= 270 && bolaX + bola.width >= garisKanan) {
        console.log('goal')
    }
    if(bolaY >= 155 && bolaY <= 270 && bolaX <= garisKiri) {
        console.log('goal')
    }

    requestAnimationFrame(draw)
}

draw()