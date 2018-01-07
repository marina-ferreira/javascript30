const sequenceToMatch = 'donut';
let inputSequence = [];

function detectKeySequence(e) {
  inputSequence.push(e.key);

  let isAMatch = inputSequence.join('') === sequenceToMatch;

  if (isAMatch) {
    let gif = document.querySelector('iframe');
    gif.style.cssText = 'opacity: 1; visibility: visible';
  }
}

window.addEventListener('keyup', detectKeySequence);
