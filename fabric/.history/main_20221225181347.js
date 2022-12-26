let canvas = new fabric.Canvas('canvas', {
    with: window.innerWidth,
    height: window.innerHeight
})

let addingLineBtn = document.getElementById('adding-line-btn');

addingLineBtn.addEventListener('click', activateAddingLine);

function activateAddingLine() {
    canvas.on('mouse:down', startAddingLine);
    canvas.on('mouse:move', startDrawingLine);
    canvas.on('mouse:up', stopDrawingLine);
}

let line

function startAddingLine(o) {
    let pointer = canvas.getPointer(o.e);

    line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke: 'red',
        strokeWidth: 3
    });
    canvas.add(line);
    canvas.requestRenderAll();
}

function startDrawingLine(o) {
    let pointer = canvas.getPointer(o.e);

    line.set({
        x2: pointer.x, 
        y2: pointer.y,
        stroke: 'red',
        strokeWidth: 3
    });

    canvas.requestRenderAll();

   
}

function stopDrawingLine() {

}