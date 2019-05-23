const page = document.querySelector('html');
const body = document.querySelector('body');
let div;

let mousemove = function(event) {
    div.style.left = event.clientX + 'px';
    div.style.top = event.clientY + 'px';
}

page.addEventListener('mousedown', (event) => {
    div = document.createElement('div');
    body.insertBefore(div, body.nextSibling);
    div.style.left = event.clientX + 'px';
    div.style.top = event.clientY + 'px';

    page.addEventListener('mousemove', mousemove);
});

    page.addEventListener('mouseup', () => {
        div.parentNode.removeChild(div);
        page.removeEventListener('mousemove', mousemove);
});

    page.addEventListener('click', (event) => {
        let x = event.clientX;
        let y = event.clientY;
    let elemToDelete = document.elementFromPoint(x,y);
    elemToDelete.parentElement.removeChild(elemToDelete);
    });

