document.addEventListener('mousedown', startMove);

function startMove(event) {
  document.onmousemove = (event) => {
    console.log(event.clientX + ':' + event.clientY);
  }
  document.onmouseup = () => {
    document.onmousemove = null;
  };
}