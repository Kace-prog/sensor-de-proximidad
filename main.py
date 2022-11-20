distancia = 0

def on_forever():
    global distancia
    distancia = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.CENTIMETERS)
    basic.show_number(distancia)
    basic.pause(1000)
    if distancia > 30:
        basic.show_string("Normal")
        basic.show_icon(IconNames.YES)
    elif distancia < 30:
        basic.show_string("Peligro")
        basic.show_icon(IconNames.NO)
        music.play_melody("A G A G A G A G ", 150)
basic.forever(on_forever)
