const r = document.querySelector(':root');
const pad = document.querySelector('.pad');
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearPad);
/* const colour = document.querySelector('#colour');
colour.addEventListener('click', changeCellSize); */


createPad(16)

function createPad(size) {
    if (pad.firstChild) {
        removeAllChildNodes(pad);
    }
    changeCellSize(size);
    for (let i = 0; i < (size ** 2); i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', changeColour);
        pad.appendChild(cell);
    }
}
function clearPad() {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => cell.classList.remove('mouseEntered'));
    askForNewSize()
}
function changeColour() {
    this.classList.add('mouseEntered');
}
function changeCellSize(size) {
    let newSize = 100 / size;
    r.style.setProperty('--size', newSize + "%");
}

function askForNewSize() {
    let newSize = prompt("Choose a new size", "Range is from 1 to 100");
    if (newSize <= 100 && newSize >= 1) {
        createPad(parseInt(newSize));
    } else {
        alert("You picked an invalid size, please try again.")
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}