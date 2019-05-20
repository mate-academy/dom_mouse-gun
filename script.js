window.addEventListener('mousedown', (e) => {
  let elem = document.elementFromPoint(e.clientX, e.clientY);
  elem.parentElement.removeChild(elem);
});