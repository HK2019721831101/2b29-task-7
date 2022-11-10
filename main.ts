let x = 0
input.onButtonPressed(Button.A, function () {
    x = input.lightLevel()
    if (x < 50) {
        led.setBrightness(255)
    }
    if (x > 200) {
        led.setBrightness(0)
    }
    if (x > 100 || x < 200) {
        led.setBrightness(64)
    }
    if (true) {
    	
    }
})
