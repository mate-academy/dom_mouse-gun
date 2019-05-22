'use strict';

// Task 1
const clicked = document.getElementById('clicked');
clicked.onclick = function() {
  console.log(event.clientY, event.clientX);
};

// Task 2
const mouseMove = document.getElementById('mousemove');
mouseMove.onmousemove = function() {
  console.log(event.clientY, event.clientX);
};

// Task 3
const afterClick = document.getElementById('afterClick');
afterClick.onclick = function() {
  afterClick.onmousemove = function() {
    console.log(event.clientY, event.clientX);
  };
};

// Task 4
const downUp = document.getElementById('down-up');
downUp.onmousedown = function() {
  console.log('down');
};
downUp.onmouseup = function() {
  console.log('up');
};

// Task 5
const downMove = document.getElementById('down-move');
downMove.onmousedown = function() {
  downMove.onmousemove = function() {
    console.log(event.clientY, event.clientX);
  };
};
downMove.onmouseup = function() {
  downMove.onmousemove = false;
};

// Task 6
const outer = document.getElementById('down-block');
const inner = outer.children[0];

outer.onmousedown = function() {
  outer.onmousemove = function() {
    const leftP = event.clientX - (inner.clientHeight / 2);
    const topP = event.clientY - (inner.clientWidth / 2);
    inner.style.left = leftP + 'px';
    inner.style.top = topP + 'px';
  };
};
outer.onmouseup = function() {
  outer.onmousemove = false;
};

// Task 7
document.onclick = function() {
  console.log(event.pageY, event.pageX);
};

/*
// Task 8
// Task from 2019/05/20 dom_mouse-gun
// Inputed on console and click on element of page
document.onclick = function() {
  // easy way:
  // event.target.style.display = 'none';

  // Task way:
  const posX = event.clientX;
  const posY = event.clientY;
  const elem = document.elementFromPoint(posX, posY);

  elem.style.display = 'none';
};
*/

/*
// Task 9
// Optional task from 2019/05/20 dom_mouse-gun
// Inputed on console.
// Take an element on the page and move it somewhere
document.onmousedown = function() {
  const elStyle = event.target.style;
  let left = event.clientX;
  let top = event.clientY;
  if(event.target.tagName !== 'BODY' && event.target.tagName !== 'HTML') {
    document.getElementsByTagName('BODY')[0].style.position = 'relative';
    elStyle.position = 'absolute';
    elStyle.left = left + 'px';
    elStyle.top = top + 'px';
    document.onmousemove = function() {
      left = event.clientX;
      top = event.clientY;
      elStyle.left = left + 'px';
      elStyle.top = top + 'px';
    };
  }
};
document.onmouseup = function() {
  document.onmousemove = false;
}
*/
