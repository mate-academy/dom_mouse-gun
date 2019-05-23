// task 8 
document.addEventListener('click', (e) => {
  const elem = document.elementFromPoint(e.clientX, e.clientY);
  elem.remove();
 })

 // task 9 


 function moveAt(e) {
  const element = document.elementFromPoint(e.clientX, e.clientY);
  element.style.top = `${e.clientY}px`;
  element.style.left = `${e.clientX}px`;
}

document.addEventListener('mousedown', (e) => {
  document.addEventListener('mousemove', moveAt);
});

document.addEventListener('mouseup', (e) => {
  document.removeEventListener('mousemove', moveAt);
});