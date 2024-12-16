// Select DOM elements
const paletteContainer = document.getElementById('palette-container');
const generateButton = document.getElementById('generate-palette');

// Generate a random color
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create a color box
function createColorBox(color) {
  const colorBox = document.createElement('div');
  colorBox.className = 'color-box';
  colorBox.style.backgroundColor = color;
  colorBox.textContent = color;

  // Copy color to clipboard on click
  colorBox.addEventListener('click', () => {
    navigator.clipboard.writeText(color);
    alert(`Copied: ${color}`);
  });

  return colorBox;
}

// Generate a palette of random colors
function generatePalette() {
  paletteContainer.innerHTML = ''; // Clear the previous palette
  for (let i = 0; i < 5; i++) {
    const randomColor = generateRandomColor();
    const colorBox = createColorBox(randomColor);
    paletteContainer.appendChild(colorBox);
  }
}

// Event listener for the button
generateButton.addEventListener('click', generatePalette);

// Initial palette on page load
generatePalette();
