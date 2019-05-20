document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
    const X = event.clientX;
    const Y = event.clientY;
    const elem = document.elementFromPoint(X, Y);
    elem.remove();
  })
})