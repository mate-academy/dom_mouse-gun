// Mouse Gun №8
// const body = document.querySelector('body');
// body.addEventListener('click', function (e) {
//     const elem = document.elementFromPoint(e.clientX, e.clientY);
//     elem.style.visibility = "hidden";
//     console.log(`X = ${e.clientX} Y = ${e.clientY}`);
// });


// Mouse Gun №9
const body = document.querySelector('body');

const createListener = elem => event => {
    const coordinates = {
        left : event.clientX - elem.clientWidth / 2,
        top : event.clientY - elem.clientHeight / 2
    };
    elem.style.position = 'absolute';
    elem.style.left = `${coordinates.left}px`;
    elem.style.top = `${coordinates.top}px`;
};
body.addEventListener('mousedown', event => {
    event.preventDefault();
    const elem = document.elementFromPoint(event.clientX, event.clientY);
    const listener = createListener(elem);
    body.addEventListener('mousemove', listener);
    body.addEventListener('mouseup', () => {
        body.removeEventListener('mousemove', listener);
    });
});



