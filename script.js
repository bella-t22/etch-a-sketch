// Create a 16x16 grid (256 squares) using javascript
const grid = document.getElementById('grid');
const button = document.querySelector('button');

let square;
function generateSquares(numOfSquares) {

    for (let i = 1; i <= numOfSquares; i++) {
        square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

generateSquares(256);
console.log(grid);

// set up a hover effect so squares change color when mouse passes over them
// add button at top of the screen that prompts user for the number of squares per side for a new grid

