const gif = document.querySelector('iframe'),
      sequenceToMatch = 'donut';

let inputSequence = [];

function detectKeySequence(e) {
  inputSequence.push(e.key);
  inputSequence.splice(-sequenceToMatch.length - 1, inputSequence.length - sequenceToMatch.length);

  let isMatch = inputSequence.join('') === sequenceToMatch;
  isMatch && gif.classList.add('show');
}

window.addEventListener('keyup', detectKeySequence);
