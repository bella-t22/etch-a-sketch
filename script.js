// Create a 16x16 grid (256 squares) using javascript
const grid = document.getElementById('grid');
const button = document.querySelector('button');

button.addEventListener('click', newGrid);

function generateDefaultGrid(numOfSquares) {

    for (let i = 1; i <= (numOfSquares * numOfSquares); i++) {
       let square = document.createElement('div');
        square.classList.add('square');
        grid.append(square);

        squareSize = (512 / numOfSquares);
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'cadetblue';
            setTimeout(() => {square.style.backgroundColor = ''}, 2000);        
        });
    };

}
generateDefaultGrid(16);

function newGrid(numOfSquares) {

        while(grid.firstChild) {
            grid.removeChild(grid.firstChild);
        } 
    
        numOfSquares = prompt('Enter the number of squares you want each side of your new grid to have.', '')
    numOfSquares = parseInt(numOfSquares);

    if (numOfSquares <= 100) {
        for (let i = 1; i <= (numOfSquares * numOfSquares); i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            grid.append(square);

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'cadetblue';
                setTimeout(() => {square.style.backgroundColor = ''}, 2000);        
                });
            
            squareSize = (512 / numOfSquares);
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
        }
    } else {
        return alert('Oops, too big! Try again!');
    }
}


generateSquares(256)

// clear grid
// make sure that user inputed number is no more than 100. try again if it is
// take user inputed number and multiply it by itself and add those squares to the grid
// divide 512 by numOfSquares to find the width and height of each square
// add width and height of square to css
 