const grid = document.getElementById('grid');

for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 20; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', color)
        grid.appendChild(cell);
    }
}

function color(event){
    let colorValue = document.getElementById("color").value;
    event.target.style.backgroundColor = colorValue
}