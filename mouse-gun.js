'use strict';

 //task 6
const circle = document.createElement('div');
let mouseButtonState = false;

function setCircleCoords (event) {
  const topCoord = `${event.clientY - circle.clientHeight / 2}px`;
  const leftCoord = `${event.clientX - circle.clientWidth / 2}px`;
  circle.style = `top:${topCoord}; left:${leftCoord}`;
}

function mouseDown (event) {
  mouseButtonState = true;
  circle.classList.toggle('circle');
  setCircleCoords(event);
  document.body.appendChild(circle);
}

function mouseMove (event) {
  if (mouseButtonState) {
    setCircleCoords(event);
  }
}

function mouseUp (event) {
  mouseButtonState = false;
  circle.classList.toggle('circle');
}

document.addEventListener('mousedown', mouseDown);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseup', mouseUp);

// task 7
let mouseButtonState = false;

function mouseDown (event) {
  mouseButtonState = true;
}

function mouseMove (event) {
  if (mouseButtonState) {
    console.log(`${event.clientX}: ${event.clientY}`);
  }
}

function mouseUp (event) {
  mouseButtonState = false;//
}
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseup', mouseUp);

// task 8
document.addEventListener('click', (event) => {
    const destroyedElem = document.elementFromPoint(event.clientX, event.clientY);

    destroyedElem.remove();
});
