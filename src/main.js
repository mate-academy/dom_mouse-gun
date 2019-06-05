'use strict';

// Task 1
const clicked = document.getElementById('clicked');
clicked.addEventListener('click', function() {
  console.log(event.clientY, event.clientX);
});

// Task 2
const mouseMove = document.getElementById('mousemove');
mouseMove.addEventListener('mousemove', function() {
  console.log(event.clientY, event.clientX);
});

// Task 3
const afterClick = document.getElementById('afterClick');
afterClick.addEventListener('click', function() {
  afterClick.addEventListener('mousemove', function() {
    console.log(event.clientY, event.clientX);
  });
});

// Task 4
const downUp = document.getElementById('down-up');
downUp.addEventListener('mousedown', function() {
  console.log('down');
});
downUp.addEventListener('mouseup', function() {
  console.log('up');
});

// Task 5
const downMove = document.getElementById('down-move');
downMove.addEventListener('mousedown', function() {
  downMove.addEventListener('mousemove', function() {
    console.log(event.clientY, event.clientX);
  });
});
downMove.addEventListener('mouseup', function() {
  downMove.addEventListener('mousemove', false);
});

// Task 6
const outer = document.getElementById('down-block');
const inner = outer.children[0];

outer.addEventListener('mousedown', function() {
  outer.addEventListener('mousemove', function() {
    const leftP = event.clientX - (inner.clientHeight / 2);
    const topP = event.clientY - (inner.clientWidth / 2);
    inner.style.left = leftP + 'px';
    inner.style.top = topP + 'px';
  });
});
outer.addEventListener('mouseup', function() {
  outer.addEventListener('mousemove', false);
});

// Task 7
document.addEventListener('click', function() {
  console.log(event.pageY, event.pageX);
});

/*
// Task 8
// Task from 2019/05/20 dom_mouse-gun
// Inputed on console and click on element of page
document.addEventListener('click', function() {
  const posX = event.clientX;
  const posY = event.clientY;
  const elem = document.elementFromPoint(posX, posY);
  elem.parentNode.removeChild(elem);
});

// Task 9
// Optional task from 2019/05/20 dom_mouse-gun
// Inputed on console.
// Take an element on the page and move it somewhere
document.addEventListener('mousedown', function() {
  const elStyle = event.target.style;
  let left = event.clientX;
  let top = event.clientY;
  if(event.target.tagName !== 'BODY' && event.target.tagName !== 'HTML') {
    document.querySelector('body').style.position = 'relative';
    elStyle.position = 'absolute';
    elStyle.left = left + 'px';
    elStyle.top = top + 'px';
    document.addEventListener('mousemove', function() {
      left = event.clientX;
      top = event.clientY;
      elStyle.left = left + 'px';
      elStyle.top = top + 'px';
    });
  }
});
document.addEventListener('mouseup', function() {
  document.addEventListener('mousemove', false);
});
*/
