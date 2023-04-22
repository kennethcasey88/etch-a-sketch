let i;
const container = document.querySelector('#container');
const cells = document.querySelectorAll('.grid');
let grid;
let user = 16;
let pixCalc = 0;
let cellWH;

function createGrid(input) {
    cellWH = cellArea(input);
    for (i = 0; i < input * input; i++) {
    grid = document.createElement('div');    
    grid.classList.add('cell');
    grid.style.width = `${cellWH}%`;
    grid.style.height = `${cellWH}%`;
    container.appendChild(grid);
}
}

container.addEventListener('mouseover', newColor);
function newColor() {

}

function cellArea(input2) {
        pixCalc = 400 / input2;
        percentCalc = (pixCalc - 1) / 400;
        cellPerc = percentCalc * 100;
        return cellPerc;
}


createGrid(user);

