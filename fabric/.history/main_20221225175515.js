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

function startAddingLine(o) {
    let pointer = canvas.getPointer(o.e);
    let line = new fabric.Line([x1,y1, x2, y2])
}

function startDrawingLine() {

}

function stopDrawingLine() {

}