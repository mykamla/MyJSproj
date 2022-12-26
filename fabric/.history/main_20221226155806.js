let canvas = new fabric.Canvas('canvas', {
    width: window.innerWidth,
    height: window.innerHeight
})

let addingLineBtn = document.getElementById('adding-line-btn');

addingLineBtn.addEventListener('click', activateAddingLine);

function activateAddingLine() {
    canvas.on('mouse:down', startAddingLine);
    canvas.on('mouse:move', startDrawingLine);
    canvas.on('mouse:up', stopDrawingLine);

    canvas.selection = false;
    canvas.hoverCursor = 'auto';
}

let line;
let mouseDown = false;

function startAddingLine(o) {
    mouseDown = true;

    let pointer = canvas.getPointer(o.e);

    line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        id: 'added-line',
        stroke: 'red',
        strokeWidth: 3,
        selectable: false
    });
    canvas.add(line);
    canvas.requestRenderAll();
}

function startDrawingLine(o) {
    if(mouseDown === true){
        let pointer = canvas.getPointer(o.e);
        line.set({
            x2: pointer.x, 
            y2: pointer.y
        });
        canvas.requestRenderAll();
    }
   
}

function stopDrawingLine() {
    line.setCoords();
    mouseDown = false;

}

let deactivateAddingShappeBtn = document.getElementById('deactivate-adding-shape');
deactivateAddingShappeBtn.addEventListener('click', deactivateAddingShape);

function deactivateAddingShape() {
    canvas.off('mouse:down', startAddingLine);
    canvas.off('mouse:move', startDrawingLine);
    canvas.off('mouse:up', stopDrawingLine);

    canvas.getObjects().forEach(o => {
        if(o.id === 'added-line') {
            o.set({
                selectable: true 
            });
        }
    });

    canvas.hoverCursor = 'all-scroll';
}