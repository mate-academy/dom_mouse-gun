// task 8 
document.addEventListener('click', (e) => {
  const elem = document.elementFromPoint(e.clientX, e.clientY);
  elem.remove();
 })

 // task 9 


 function moveAt(e) {
  const element = document.elementFromPoint(e.clientX, e.clientY);
  element.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}

document.addEventListener('mousedown', (e) => {
  document.addEventListener('mousemove', moveAt);
});

document.addEventListener('mouseup', (e) => {
  document.removeEventListener('mousemove', moveAt);
});