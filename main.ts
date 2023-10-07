/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P19, 1)
  basic.showString("White")
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P19, 0)
  basic.showString("Red")
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P19, 0)
  basic.showString("Green")
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P19, 1)
  basic.showString("Blue")
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P19, 1)
  basic.showString("Magenta")
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P19, 1)
  basic.showString("Teal")
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P19, 0)
  basic.showString("Yellow")
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P19, 0)
})
