const holes = document.querySelectorAll('.hole'),
      scoreBoard = document.querySelector('.score'),
      moles = document.querySelectorAll('.mole');

let timeUp = false,
    score = 0,
    lastHole;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length),
        hole = holes[index];

  if (hole === lastHole) {
    return randomHole(holes)
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000),
        hole = randomHole(holes);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');

    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();

  setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;

  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
