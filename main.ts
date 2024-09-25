radio.onReceivedNumber(function (receivedNumber) {
    stortall = (radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128) * 5 / 116
    for (let indeks = 0; indeks <= stortall; indeks++) {
        led.plot(receivedNumber, 4 - indeks)
    }
})
let stortall = 0
radio.setGroup(42)
basic.forever(function () {
    basic.pause(500)
    basic.clearScreen()
})
