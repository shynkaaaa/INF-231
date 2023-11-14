let isColorPaletteOpen = false;

    function toggleColorPalette() {
        const colorPalette = document.getElementById('colorPalette');
        isColorPaletteOpen = !isColorPaletteOpen;

        if (isColorPaletteOpen) {
            colorPalette.style.display = 'block';
        } else {
            colorPalette.style.display = 'none';
        }
    }

    function changeColor(color) {
        const colorSquare = document.getElementById('colorSquare');
        const countdownRectangle = document.querySelector('.countdown-rectangle');

        colorSquare.style.backgroundColor = color;
        countdownRectangle.style.color = color;

        // You can save the selected color to use it later or send it to the server, etc.
        // For example: const selectedColor = color;
    }