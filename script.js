// Create a 16x16 grid (256 squares) using javascript
const grid = document.getElementById('grid');
const button = document.querySelector('button');

function generateSquares(numOfSquares) {

    for (let i = 1; i <= numOfSquares; i++) {
       let square = document.createElement('div');
        square.classList.add('square');
        grid.append(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'cadetblue';
            setTimeout(() => {square.style.backgroundColor = ''}, 2000);        
        });

    }
}

// }
generateSquares(256);
console.log(grid);

// set up a hover effect so squares change color when mouse passes over them


// add button at top of the screen that prompts user for the number of squares per side for a new grid


// rework generateSquares function so that a user presses button and gets a prompt allowing them to select their grid size
// take inputted number from user and pass it into the function to generate the correct amount of sqaures per side (multiplication will be necessary)
// rework css grid styles (width and height)
 