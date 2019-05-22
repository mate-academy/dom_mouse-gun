//problem #6 

document.addEventListener('mousedown', (ev) => {
    const coursorElem = makeCircle(ev.clientX, ev.clientY); 
    console.log(this);
    document.addEventListener('mousemove', (ev) => {
        coursorElem.style.top = `${ev.clientY}px`;
        coursorElem.style.left = `${ev.clientX}px`;
    })
    
    document.addEventListener('mouseup', () => {
        coursorElem.parentNode.removeChild(coursorElem);
    })
})

function makeCircle() {
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.background = 'red';
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.borderRadius = '50%';
    document.body.append(circle);
    return circle;
}


//problem #8
window.addEventListener('click', destroyer);

function destroyer(ev) {
    const elem = document.elementFromPoint(ev.x, ev.y);
    elem.parentNode.removeChild(elem);
}

//problem #9 Not complite
window.addEventListener('mousedown', (ev) => {
    const elem = document.elementFromPoint(ev.x, ev.y);
    
    elem.addEventListener('mousemove', dnd);
    
    window.addEventListener('mouseup', () => {
        elem.removeEventListener('mousemove', dnd);
    })
});

function dnd(ev) {    
    this.style.position = 'absolute';
    this.style.display = 'block';
    this.style.left = `${ev.clientX}px`;
    this.style.top = `${ev.clientY}px`;
}
