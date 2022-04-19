

function makeGrid() {

    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    const table = document.getElementById('pixelCanvas');
    
    let grid  = '';
    for (let i = 0; i < height; i++) {
        grid +="<tr>";

            for (let j = 0; j < width; j++) {
                grid += "<td></td>"
            }
        grid +="</tr>";
    }
    table.innerHTML = grid;
    return false;
}

document.body.addEventListener('click', function(e) {
    let target = e.target
    let tag = target.tagName

    let color = document.getElementById('colorPicker').value

    if (tag == 'TD') {
        target.style.background = color
    }
})
