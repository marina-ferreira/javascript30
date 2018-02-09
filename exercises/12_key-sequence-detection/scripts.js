const sequenceToMatch = 'donut';
let inputSequence = [],
    angle;

function detectKeySequence(e) {
  inputSequence.push(e.key);
  inputSequence.splice(-sequenceToMatch.length - 1, inputSequence.length - sequenceToMatch.length);

  let isAMatch = inputSequence.join('') === sequenceToMatch;

  if (isAMatch) {
    let gif = document.querySelector('iframe');

    gif.classList.add('show');
  }
}

window.addEventListener('keyup', detectKeySequence);
