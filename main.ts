input.onButtonPressed(Button.A, function () {
    stop = 1
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    stop = 0
    while (stop == 0) {
        if (stop == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        }
    }
    stop = 0
})
input.onButtonPressed(Button.B, function () {
    stop = 1
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    stop = 0
    while (stop == 0) {
        if (stop == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . . . .
                . # . # .
                # . . . #
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . . . .
                . # . # .
                # . . . #
                `)
        }
        if (stop == 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
    }
    stop = 0
})
let stop = 0
stop = 0
led.setBrightness(4)
basic.forever(function () {
	
})
