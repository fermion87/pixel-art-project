////This script generate 16x16 div grid that functions like a pixel image edtior.

//// GLOBAL CONST

const body = document.querySelector("body");

const container = document.createElement('div');

const row = document.createElement('div');

const square = document.createElement('div');

const button = document.createElement("button");

const colorButton = document.createElement("button");

//// GLOBAL VAR

let activeColor = "#FFFFFF";

//// FUNCTIONS ////

// setElementProperties()
/// sets the properties of the elements
function setElementProperties(){
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
    square.style.width = "2vh"; 
    square.style.borderWidth = "1px";

    //assign properties to button
    button.classList.add('button');
    button.type = "button";
    button.textContent = "New Grid";
    button.style.backgroundColor = "red";
    button.style.color = "black";
    button.style.borderColor = "white";
    button.style.borderStyle = "solid";
    button.style.borderWidth = "2px";
    button.style.margin = "10px";
    button.style.padding = "10px";
    button.style.alignSelf = "flex-start";

    //assign properties to colorButton
    colorButton.classList.add('button');
    colorButton.type = "button";
    colorButton.textContent = "Change Color";
    colorButton.style.backgroundColor = activeColor;
    colorButton.style.color = "black";
    colorButton.style.borderColor = "white";
    colorButton.style.borderStyle = "solid";
    colorButton.style.borderWidth = "2px";
    colorButton.style.margin = "10px";
    colorButton.style.padding = "10px";
    colorButton.style.alignSelf = "flex-start";
}

// createGrid(n) 
/// creates n x n grid of square divs
function createGrid(n){
    //add n squares to each row
    for(let i = 0; i < n; i++){
        row.appendChild(square.cloneNode(true)); 
    }

    //add n rows to the container
    for(let i = 0; i < n; i++){
        container.appendChild(row.cloneNode(true)); 
    }

    //apply event listeners for mouse effects
    applyListeners();
}

// destroyGrid();
/// removes the grid elements from the container
function destroyGrid(){
    container.replaceChildren();
    row.replaceChildren();
}

// createGridButton()
/// creates a button that destroys the current grid and creates a new grid
function createGridButton(){
    body.appendChild(button);

    button.addEventListener('click', () => {
        console.log("Button clicked.");
        
        let newGridSize = prompt("Enter a new grid size (n x n). n: ");
        
        destroyGrid();
        
        createGrid(newGridSize);
    });
}

// createColorButton()
/// creates a button that prompts the user for a new drawing color
function createColorButton(){
    body.appendChild(colorButton);

    colorButton.addEventListener('click', () => {
        console.log("Color Button clicked.");
        
        activeColor = prompt("Enter a new color in hexadecimal form (eg. #FFFFFF):");

        colorButton.style.backgroundColor = activeColor;
    });
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
            square.style.background = activeColor;
        });
    });
}

//// MAIN

//set element properties
setElementProperties();

//create button
createGridButton();

createColorButton();

//add container div
body.appendChild(container);

//create a 32 x 32 grid
createGrid(32,32);












