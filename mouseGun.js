document.addEventListener('click', (event) => {
    event.preventDefault();
    let element = document.elementFromPoint(event.clientX, event.clientY);
    element.remove();
});
