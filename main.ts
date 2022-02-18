input.onButtonPressed(Button.A, function () {
    if (index == 0) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.clearScreen()
        basic.showString("P")
    } else if (index == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.clearScreen()
        basic.showString("S")
    } else if (index == 2) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.clearScreen()
        basic.showString("Z")
    }
    index += 1
    if (index == 3) {
        index = 0
    }
})
let index = 0
index = 0
