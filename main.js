document.body.addEventListener('click', function(event) {
  let removingElems = document.elementFromPoint(event.clientX, event.clientY);
  removingElems.remove(); 
 });
 