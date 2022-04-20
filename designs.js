

function makeGrid() {
    //select size input
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    //select the table grid
    const table = document.getElementById('pixelCanvas');
    
    //creating table rows and columns
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

//locate each cell of the table
document.body.addEventListener('click', function(e) {
    let target = e.target
    let tag = target.tagName

    //select color picker
    let color = document.getElementById('colorPicker').value

    //when cell is clicked by a user add background color
    if (tag == 'TD') {
        target.style.background = color
    }
})
