// Task 8
/*
document.querySelector('html').addEventListener('click', event => {
  event.preventDefault()
  document.elementFromPoint(event.clientX, event.clientY).remove()
})
*/

//task 9
const body = document.querySelector('body');

const dragging = elem => event => {
  let [X, Y] = [`${event.clientX - elem.clientWidth / 2}px`, `${event.clientY - elem.clientHeight / 2}px`]
  elem.style.position = 'absolute';
  elem.style.left = X;
  elem.style.top = Y;
};

body.addEventListener('mousedown', event => {
  event.preventDefault();
  const elem = document.elementFromPoint(event.clientX, event.clientY);
  const listener = dragging(elem);
  body.addEventListener('mousemove', listener);
  body.addEventListener('mouseup', () => {
    body.removeEventListener('mousemove', listener);
  });
});



