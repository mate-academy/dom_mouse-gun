const circle = document.querySelector('.circle');
document.addEventListener('mousemove', (e) => {
  let left = event.clientX;
  let top = event.clientY;

  circle.style.left = `${left - 50}px`;
  circle.style.top = `${top - 50}px`;
});