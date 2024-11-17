function createGrid(size = 16) {
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = ''; // Clear current grid

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Set grid columns
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`; // Set grid rows

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.opacity = 1; // Reset opacity

    // Add hover effect
    div.addEventListener('mouseover', () => {
      const currentOpacity = parseFloat(div.style.opacity);
      if (!div.dataset.color) {
        div.style.backgroundColor = getRandomColor();
        div.dataset.color = true;
      }
      if (currentOpacity > 0) {
        div.style.opacity = currentOpacity - 0.1;
      }
    });

    gridContainer.appendChild(div);
  }
}

// Generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Prompt user for grid size
function promptForNewGrid() {
  const size = parseInt(prompt("Enter grid size (1-100):"), 10);
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    createGrid(size);
  }
}

// Reset grid to default size and clear colors
function resetGrid() {
  createGrid(16);
}

// Event Listeners
document.getElementById('gridSizeButton').addEventListener('click', promptForNewGrid);
document.getElementById('resetButton').addEventListener('click', resetGrid);

// Initialize grid on page load
window.onload = () => createGrid(16);