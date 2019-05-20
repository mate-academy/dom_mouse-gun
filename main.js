// task 6
const circle = document.createElement('div');

function moveCircle(e) {
    circle.style.top = (e.clientY - circle.clientHeight / 2) + 'px';
    circle.style.left = (e.clientX - circle.clientWidth / 2) + 'px';
}

document.addEventListener('mousedown', (e) => {
    circle.classList.add('circle');
    circle.style.top = (e.clientY - circle.clientHeight / 2) + 'px';
    circle.style.left = (e.clientX - circle.clientWidth / 2) + 'px';
    document.body.appendChild(circle);

    document.addEventListener('mousemove', moveCircle);
});

document.addEventListener('mouseup', () => {
    circle.remove();

    document.removeEventListener('mousemove', moveCircle);
});

// task 8
document.addEventListener('click', (e) => {
    const destroyedItem = document.elementFromPoint(e.clientX, e.clientY);

    destroyedItem.remove();
});

// task 9 - not completed
function moveItem(e) {
    const movedItem = document.elementFromPoint(e.clientX, e.clientY);

    movedItem.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}

document.addEventListener('mousedown', (e) => {
    document.addEventListener('mousemove', moveItem);
});

document.addEventListener('mouseup', (e) => {
    document.removeEventListener('mousemove', moveItem);
});
