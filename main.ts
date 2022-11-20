let distancia = 0
basic.forever(function on_forever() {
    
    distancia = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.Centimeters)
    basic.showNumber(distancia)
    basic.pause(1000)
    if (distancia > 30) {
        basic.showString("Normal")
        basic.showIcon(IconNames.Yes)
    } else if (distancia < 30) {
        basic.showString("Peligro")
        basic.showIcon(IconNames.No)
        music.playMelody("A G A G A G A G ", 150)
    }
    
})
