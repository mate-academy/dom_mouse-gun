
  document.addEventListener('click', function(e) {
    const exisX = e.clientX;
    const exisY = e.clientY;
    const elem = document.elementFromPoint(exisX, exisY);
    console.log(elem);
    elem.remove();
  })
