//generate 16x16 div grid
const container = document.querySelector('#container');
container.style.display = 'flex';

const row = document.createElement('div');
row.classList.add('row');
row.textContent = '';
row.style.flexDirection = "row";

const square = document.createElement('div');
square.classList.add('square');
square.textContent = 'This is a square.';
square.style.aspectRatio = "1 / 1";   
//col.style.flexDirection = "row";

//add 16 columns to each row
for(let i = 0; i < 16; i++){
    row.appendChild(square.cloneNode(true)); 
}

//add 16 rows to the container
for(let i = 0; i < 16; i++){
   container.appendChild(row.cloneNode(true)); 
}






