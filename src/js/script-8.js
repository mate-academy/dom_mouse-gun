document.addEventListener('click', (e) => {
  let elem = document.elementFromPoint(e.clientX, e.clientY)
  elem.remove();
});
