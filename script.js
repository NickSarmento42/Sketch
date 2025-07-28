const container = document.querySelector('#sketch-container');
const resizeBtn = document.getElementById('resize-btn');
const resetBtn = document.getElementById('reset-btn');
let isMouseDown = false;

function createGrid(size) {
  // Set CSS variable for grid size
  container.style.setProperty('--grid-size', size);
  // Clear existing grid
  container.innerHTML = '';
  // Create new grid
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  // Add hover event listeners
  const squares = container.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = 'black';
      }
    });
    square.addEventListener('mousedown', (event) => {
      event.target.style.backgroundColor = 'black';
    });
  });
}

container.addEventListener('mousedown', () => {
  isMouseDown = true;
});
document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

createGrid(16);

resizeBtn.addEventListener('click', () => {
  let newSize = prompt('Enter number of squares per side (between 1 and 100):');
  newSize = parseInt(newSize);
  if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

resetBtn.addEventListener('click', () => {
  const squares = container.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = '';
  });
});
