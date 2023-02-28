////This script generate 16x16 div grid that functions like a pixel image edtior.

//// GLOBAL VARS

const container = document.querySelector('#container');
const row = document.createElement('div');
const square = document.createElement('div');

//// FUNCTIONS

// setElements()
/// creates required elements 
function setElements(){
    //assign properties to container
    container.style.display = 'flex';
    container.style.flexDirection = "column";

    //assign properties to row
    row.classList.add('row');
    row.textContent = '';
    row.style.display = 'flex';
    row.style.flexDirection = "row";

    //assign properties to square
    square.classList.add('square');
    square.textContent = '';
    square.style.aspectRatio = "1 / 1"; 
    square.style.width = "4vh"; 
    square.style.borderWidth = "1px";
}

// createGrid() 
///creates a n x n grid of squares
function createGrid(x,y){
    //add x squares to each row
    for(let i = 0; i < x; i++){
        row.appendChild(square.cloneNode(true)); 
    }

    //add y rows to the container
    for(let i = 0; i < y; i++){
        container.appendChild(row.cloneNode(true)); 
    }
}

// applyListeners()
/// adds mouse event listeners to squares for hover and drawing effects
function applyListeners(){
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.background = 'blue';
        });
        square.addEventListener('mouseleave', () => {
            square.style.background = 'white';
        });
    });
}

//// MAIN
//set element properties
setElements();

//create a 20 x 20 grid
createGrid(32,32);

//apply event listeners for mouse effects
applyListeners();










