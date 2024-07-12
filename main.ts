input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.X))
})
let prev = 0
let magnes = 0
pins.servoWritePin(AnalogPin.P0, 10)
basic.forever(function () {
    magnes = input.magneticForce(Dimension.X)
    if (Math.abs(magnes - prev) > 2) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . # . .
            # . . . #
            . # # # .
            `)
        for (let indeks = 0; indeks <= 100; indeks++) {
            pins.servoWritePin(AnalogPin.P0, indeks + 10)
        }
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 10)
    } else {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
    }
    serial.writeValue("x", Math.abs(magnes - prev))
    prev = input.magneticForce(Dimension.X)
    basic.pause(100)
})
