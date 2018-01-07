const sequenceToMatch = 'donut';
let inputSequence = [];
let angle;

function detectKeySequence(e) {
  inputSequence.push(e.key);
  inputSequence.splice(-sequenceToMatch.length - 1, inputSequence.length - sequenceToMatch.length);

  let isAMatch = inputSequence.join('') === sequenceToMatch;

  if (isAMatch) {
    let gif = document.querySelector('iframe');

    angle = angle === 360 ? -360 : 360;
    gif.style.cssText = `opacity: 1; visibility: visible; transform: rotate(${angle}deg)`;
  }
}

window.addEventListener('keyup', detectKeySequence);
