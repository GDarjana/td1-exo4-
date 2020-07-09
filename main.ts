input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
        if (x == -1) {
            led.unplot(x, y)
            y += 1
            x = 0
            led.plot(x, y)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (x <= 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
    if (x == 5) {
        led.unplot(x, y)
        y += 1
        x = 0
        led.plot(x, y)
    }
})
let y = 0
let x = 0
x = 2
y = 0
led.plot(x, y)
basic.forever(function () {
    if (x == 5 && y == 5) {
        x = 0
        y = 0
    }
    if (x == -1 && y == -1) {
        x = 4
        y = 4
    }
})
