let LDR = 0
basic.forever(function () {
    LDR = pins.analogReadPin(AnalogPin.P0)
    if (LDR > 1000) {
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(200)
    }
})
