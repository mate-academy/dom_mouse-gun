'use strict';
document.body.addEventListener('click', function(event) {
    let element = document.elementFromPoint(event.clientX, event.clientY);
    element.remove();
});