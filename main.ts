function sarga_lampa () {
    basic.clearScreen()
    basic.showString("S")
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
}
input.onButtonPressed(Button.A, function () {
    if (index == 0) {
        sarga_lampa()
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.servoWritePin(AnalogPin.P8, 0)
        basic.clearScreen()
        basic.showString("P")
    } else if (index == 2) {
        sarga_lampa()
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.servoWritePin(AnalogPin.P8, 90)
        basic.clearScreen()
        basic.showString("Z")
    }
    index += 2
    if (index >= 3) {
        index = 0
    }
})
let index = 0
index = 0
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.servoWritePin(AnalogPin.P8, 0)
basic.clearScreen()
basic.showString("P")
