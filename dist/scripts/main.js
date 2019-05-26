'use strict';

let isPrintingCoordinates = false;
let hasMouseupListner = false;
let answer;
const redCircle = document.querySelector('div.circle');
const printMouseCoordinates = (someEvent) => {
  console.clear();
  console.log('Mouse position is:');
  console.log(`X: ${someEvent.clientX}, Y: ${someEvent.clientY}`);
};
const moveRedCircleTo = (someEvent) => {
  redCircle.clientX = someEvent.clientX;
  redCircle.clientY = someEvent.clientY;
};
const addListnerForClicks = () => {
  document.addEventListener('click', printMouseCoordinates);
};
const deleteElementUnderMouse = (someEvent) => {
  someEvent.preventDefault();
  const selectedElement = document
    .elementFromPoint(someEvent.clientX, someEvent.clientY);
  if (selectedElement) {
    selectedElement.remove();
  }
};
const dragAndDropSelectedElement = () => {
  document.addEventListener('mousedown', (someEvent) => {
    const animationDuration = 1;
    const moveFromX = someEvent.pageX;
    const moveFromY = someEvent.pageY;
    let moveToX;
    let moveToY;
    const selectedElement = document
      .elementFromPoint(moveFromX, moveFromY);
    const dragableStyle = document.createElement('style');
    dragableStyle.type = 'text/css';
    dragableStyle.innerHTML = '.current-element_dragable {'
      + 'position: absolute;'
      + '}'
      + '.transitionably {'
      + `transition: translate ${animationDuration}s`
      + '}';
    document.getElementsByTagName('head')[0].appendChild(dragableStyle);
    selectedElement.classList.add('current-element_dragable');
    selectedElement.pageX = moveFromX;
    selectedElement.pageY = moveFromY;

    selectedElement.addEventListener('mouseup', (movedToEvent) => {
      movedToEvent.preventDefault();
      selectedElement.classList.add('transitionably');
      moveToX = movedToEvent.pageX;
      moveToY = movedToEvent.pageY;

      const dragToStyle = document.createElement('style');
      dragToStyle.type = 'text/css';
      dragToStyle.innerHTML = '.dragging {'
        + `translate: ${moveToX - moveFromX}px ${moveToY - moveFromY}px;`
        + '}';
      document.getElementsByTagName('head')[0].appendChild(dragToStyle);
      selectedElement.classList.add('dragging');
      window.setTimeout(() => {
        // selectedElement.classList.remove('transitionably');
        // selectedElement.classList.remove('dragging');
        selectedElement.pageX = moveToX;
        selectedElement.pageY = moveToY;
      }, animationDuration * 1000);
    });
  });
};

function main() {
  redCircle.hidden = true;
  answer = prompt('Enter, please, what point result do you '
    + 'want to see in the console? (from 1 to 8)');
  switch (+answer) {
    case 1:
      addListnerForClicks();
      break;
    case 2:
      document.addEventListener('mousemove', printMouseCoordinates);
      break;
    case 3:
      document.addEventListener('click', () => {
        if (isPrintingCoordinates) {
          document.removeEventListener('mousemove', printMouseCoordinates);
          console.log('Printing mouse position is stopped!');
        } else {
          document.addEventListener('mousemove', printMouseCoordinates);
        }
        isPrintingCoordinates = !isPrintingCoordinates;
      });
      break;
    case 4:
      document.addEventListener('mousedown', () => {
        console.log('down');
        if (!hasMouseupListner) {
          document.addEventListener('mouseup', () => {
            console.log('up');
          });
          hasMouseupListner = !hasMouseupListner;
        }
      });
      break;
    case 5:
      document.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', printMouseCoordinates);
      });
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', printMouseCoordinates);
      });
      break;
    case 6:
      document.addEventListener('mousedown', () => {
        redCircle.hidden = false;
        document.addEventListener('mousemove', moveRedCircleTo);
      });
      document.addEventListener('mouseup', () => {
        redCircle.hidden = true;
        document.removeEventListener('mousemove', moveRedCircleTo);
      });
      break;
    case 7:
      alert(
        `Copy the code below, and paste it to the console of another page:`
        + `\n(${addListnerForClicks.toString().replace(
          'printMouseCoordinates', printMouseCoordinates.toString()
        )})()`
      );
      break;
    case 8:
      alert(
        `Copy the code below, and paste it to the console of another page:\n`
        + `\n(${addListnerForClicks.toString().replace(
          'printMouseCoordinates', deleteElementUnderMouse.toString()
        )})()`
      );
      break;
    case 9:
      alert(
        `Copy the code below, and paste it to the console of another page:\n`
        + `\n(${dragAndDropSelectedElement})()`
      );
      break;
  }
}

document.addEventListener('DOMContentLoaded', main);

console.log('Thank you, mate academy!');
