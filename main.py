def on_button_pressed_a():
    global stop
    basic.show_leds("""
        # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
    """)
    stop = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global stop
    while stop == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # . # .
                        . # # # .
                        . . . . .
        """)
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
    stop = 0
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global stop
    basic.show_leds("""
        # # . # #
                # # . # #
                . . . . .
                . # # # .
                # . . . #
    """)
    stop = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

stop = 0
stop = 0

def on_forever():
    pass
basic.forever(on_forever)
