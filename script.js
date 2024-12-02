
const targetElement = document.getElementById("level");

function findDomLevel(element) {
  let level = 0;
  let currentElement = element;

  
  while (currentElement) {
    level++;
    currentElement = currentElement.parentElement;
  }

  return level;
}


const domLevel = findDomLevel(targetElement);


alert(`The level of the element is: ${domLevel}`);
