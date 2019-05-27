
document.addEventListener('mousedown', (e) => {
  let element = document.elementFromPoint(e.clientX, e.clientY);

  let coords = getCoords(element);

  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  element.style.position = 'absolute';
  moveElement(e);
  document.body.appendChild(element);
  element.style.zIndex = 1000;

  function moveElement(e) {
    element.style.left = e.pageX - shiftX + 'px';
    element.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = moveElement;

  element.onmouseup = function() {
    document.onmousemove = null;
    element.onmouseup = null;
  };

  element.ondragstart = function() {
    return false;
  };

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
})