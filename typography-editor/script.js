const canvas = document.getElementById('textCanvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('textInput');
const directionSelect = document.getElementById('direction');

// Function to draw text
function drawText() {
  const text = textInput.value;
  const direction = directionSelect.value;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = '30px Arial';
  ctx.fillStyle = '#000';

  if (direction === 'horizontal') {
    // Draw horizontally
    ctx.fillText(text, 50, 100);
  } else {
    // Draw vertically, one character per line
    let x = 100;
    let y = 50;
    for (let i = 0; i < text.length; i++) {
      ctx.fillText(text[i], x, y + i * 35);
    }
  }
}

// Event listeners
textInput.addEventListener('input', drawText);
directionSelect.addEventListener('change', drawText);

// Initial draw
drawText();
