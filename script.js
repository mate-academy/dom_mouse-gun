// Task 7
/*
document.querySelector('html').addEventListener('click', event => {
  event.preventDefault()
  document.elementFromPoint(event.clientX, event.clientY).remove()
})
*/

//task 8
const html = document.querySelector('html');

const draggingElement  = (event) => {
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
  html.addEventListener('mousemove', draggingElement)
  document.body.appendChild(element)
});

html.addEventListener('mouseup', event => {
  html.removeEventListener('mousemove', draggingElement)
});
