let divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);  // logs all thre classes due to event bubbling
  e.stopPropagation(); // stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: true, // run the function on the way down
  once: true // same as calling div.removeEventListener(...)
}))
