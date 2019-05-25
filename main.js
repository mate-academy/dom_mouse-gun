'use strict';

const circle = document.createElement('div');

document.addEventListener('mousedown', event => {
  document.body.append(circle);
  circle.classList.add('block');
  circle.style.left = `${event.clientX}px`; // circle is born right in mouse current place, not on top left corner
  circle.style.top = `${ event.clientY}px`;

  document.addEventListener('mousemove', moveCircle);
})

function moveCircle(event) {
  console.log(event.clientX);
  
  circle.style.left = `${event.clientX}px`;
  circle.style.top = `${ event.clientY}px`;
}

document.addEventListener('mouseup', event => {
  circle.remove();
  document.removeEventListener('mousemove', moveCircle);
})

//mouse gun
document,addEventListener('click', event => {
  const victim = document.elementFromPoint(event.clientX, event.clientY);
  victim.remove(); 
})
