// Task 7
/*
document.querySelector('html').addEventListener('click', event => {
  event.preventDefault()
  document.elementFromPoint(event.clientX, event.clientY).remove()
})
*/

//task 8
const html = document.querySelector('html');

const itemPosition = (event) => {
  event.preventDefault()
  const item = document.elementFromPoint(event.clientX, event.clientY)
  item.style.position = "absolute"
  item.style.zIndex = 1000
  item.style.left = `${event.pageX - item.clientWidth / 2}px`;
  item.style.top = `${event.pageY - item.clientHeight / 2}px`;
}

html.addEventListener('mousedown', event => {
  event.preventDefault()
  itemPosition(event)
  html.addEventListener('mousemove', itemPosition)
  document.body.appendChild(element)
});

html.addEventListener('mouseup', event => {
  html.removeEventListener('mousemove', itemPosition)
});
//
document.addEventListener('mousedown', (event) => {
  let element = document.elementFromPoint(event.clientX, event.clientY);
  
  let coords = getCoords(element);
  let shiftX = event.pageX - coords.left;
  let shiftY = event.pageY - coords.top;

  element.style.position = 'absolute';
  moveElement(event);
  document.body.appendChild(element);

  element.style.zIndex = 1000;

  function moveElement(event) {
    element.style.left = event.pageX - shiftX + 'px';
    element.style.top = event.pageY - shiftY + 'px';
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
