let hoverCount = 0; // Track number of interactions per grid item

// Function to create a grid
function createGrid(size = 16) {
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = ''; // Clear the current grid

  const gridItemSize = 960 / size; // Calculate size of each square
  
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${gridItemSize}px`;
    div.style.height = `${gridItemSize}px`;

    // Add hover effect
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = getRandomColor(); // Change to a random color
      progressiveDarken(div); // Pass 'div' to the darkening function
    });

    gridContainer.appendChild(div);
  }
}

// Function to generate random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to apply progressive darkening effect
function progressiveDarken(div) {
  let currentOpacity = parseFloat(div.style.opacity) || 1; // Get current opacity (default to 1 if not set)
  const newOpacity = currentOpacity - 0.1; // Decrease by 10%

  if (newOpacity >= 0) {
    div.style.opacity = newOpacity; // Apply the new opacity
  }
}

// Function to prompt for new grid size
function promptForNewGrid() {
  let gridSize = parseInt(prompt("Enter number of squares per side (max 100):"), 10);
  
  // Validate the input
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    createGrid(gridSize);
  }
}

// Event listener for button click
document.getElementById('gridSizeButton').addEventListener('click', promptForNewGrid);

// Initialize the grid with 16x16 on page load
window.onload = () => createGrid(16);
