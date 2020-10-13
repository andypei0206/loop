basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(0, 0)
            basic.pause(500)
        }
    }
    basic.clearScreen()
})
