"""
Created by: Ernest
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)

# On button press
while True:
    if button_a.is_pressed():
        pin15.write_digital(1)
        pin16.write_digital(1)
        pin12.write_digital(1)
        display.scroll("White")
        pin15.write_digital(1)
        pin16.write_digital(0)
        pin12.write_digital(0)
        display.scroll("Red")
        pin15.write_digital(0)
        pin16.write_digital(1)
        pin12.write_digital(0)
        pin12.write_digital(0)
        display.scroll("Green")
        pin15.write_digital(0)
        pin16.write_digital(0)
        pin12.write_digital(1)
        display.scroll("Blue")
        pin15.write_digital(1)
        pin16.write_digital(0)
        pin12.write_digital(1)
        display.scroll("Magenta")
        pin15.write_digital(0)
        pin16.write_digital(1)
        pin12.write_digital(1)
        display.scroll("Teal")
        pin15.write_digital(1)
        pin16.write_digital(1)
        pin12.write_digital(0)
        display.scroll("Yellow")
        pin15.write_digital(0)
        pin16.write_digital(0)
        pin12.write_digital(0)
        display.clear()
