function changeBgColor() {
    const bgColorPicker = document.getElementById('bgColorPicker');
    const countdownRectangle = document.querySelector('.countdown-rectangle');

    const selectedColor = bgColorPicker.value;

    countdownRectangle.style.backgroundColor = selectedColor;
}