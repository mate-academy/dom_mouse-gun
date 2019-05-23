'use strict';

//8
document.body.addEventListener('click', (event) => {
  event.preventDefault();
  const x = event.pageX;
  const y = event.pageY;
  const elementForDelete = document.elementFromPoint(x, y);
  elementForDelete.remove();
})


 //9
let elementForMove; 
document.body.addEventListener('mousedown', (event) => {
    const x = event.pageX;
    const y = event.pageY;
    elementForMove = document.elementFromPoint(x, y);
});

document.body.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (event.which === 1) { 
       elementForMove.style.position = 'absolute';
       elementForMove.style.top = `${event.pageY}px`;
       elementForMove.style.left = `${event.pageX}px`;
    }
});

    
    
