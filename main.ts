let meus_palitos = 0
let vencedor = 0
let minha_aposta = 0
let aposta_maquina = 0
let palitos_oponente = 0
input.onButtonPressed(Button.A, function () {
    meus_palitos = randint(1, 3)
    if (meus_palitos == 1) {
        basic.showNumber(1)
    } else if (meus_palitos == 2) {
        basic.showNumber(2)
    } else if (meus_palitos == 3) {
        basic.showNumber(3)
    }
})
input.onGesture(Gesture.Shake, function () {
    vencedor = randint(2, 6)
    basic.showNumber(vencedor)
    basic.pause(2000)
    if (minha_aposta == vencedor) {
        basic.showString("J")
    } else if (aposta_maquina == vencedor) {
        basic.showString("M")
    } else {
        basic.showString("N")
    }
})
input.onButtonPressed(Button.AB, function () {
    palitos_oponente = randint(1, 3)
    basic.showNumber(palitos_oponente)
    basic.pause(5000)
    aposta_maquina = palitos_oponente + randint(1, 3)
    if (aposta_maquina == minha_aposta) {
        while (true) {
            aposta_maquina += palitos_oponente + randint(1, 3)
        }
    } else if (aposta_maquina != minha_aposta) {
        basic.showNumber(aposta_maquina)
        basic.pause(5000)
    }
})
input.onButtonPressed(Button.B, function () {
    minha_aposta = meus_palitos + randint(1, 3)
    basic.showNumber(minha_aposta)
})
