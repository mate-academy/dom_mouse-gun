'use strict';

 //task 6
const circle = document.createElement('div');

function circleMove(event) {
  circle.style = `top:${event.clientY - circle.clientHeight / 2}px; left:${event.clientX - circle.clientWidth / 2}px`;
}

document.addEventListener('mousedown', (event)=>{
  circle.classList.toggle('circle');
  circle.style = `top:${event.clientY - circle.clientHeight / 2}px; left:${event.clientX - circle.clientWidth / 2}px`;
  document.body.appendChild(circle);

  document.addEventListener('mousemove', circleMove);
});

document.addEventListener('mouseup', (event)=> {
  circle.classList.toggle('circle');

  document.removeEventListener('mousemove', circleMove);
})
//task 7
document.addEventListener('mousedown', (event)=> {
  document.addEventListener('mousemove',function writingCoords(event) {
    console.log(`${event.clientX}: ${event.clientY}`);
    document.addEventListener('mouseup', (event)=> {
      document.removeEventListener('mousemove', writingCoords);
    })
  });
});
// task 8
document.addEventListener('click', (event) => {
    const destroyedElem = document.elementFromPoint(event.clientX, event.clientY);

    destroyedElem.remove();
});
