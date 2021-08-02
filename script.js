const pad = document.querySelector('.pad')
for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.textContent = "hello"
    pad.appendChild(cell)
    console.log(`cell ${i+1} created`)
}