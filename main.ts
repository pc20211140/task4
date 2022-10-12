let count = 0
let index = 0
input.onButtonPressed(Button.A, function () {
    count = 0
    while (led.point(count, 0)) {
        led.plot(count, 0)
        basic.pause(1000)
        basic.clearScreen()
        index += 1
    }
})
