const start = document.querySelector('.controls button[name="start"]'),
      moles = document.querySelectorAll('.mole'),
      scoreBoard = document.querySelector('.controls .score span');

let playTime, interval, lastIndex;
let score = 0;

function startGame() {
  playTime = 10;
  scoreBoard.textContent = 0;
  score = 0;

  clearInterval(interval);
  countdown();

  showMole();
}

function showMole() {
  let mole = randomMole(moles.length),
      time = randomTime(500, 1500);

  mole.classList.add('out');

  setTimeout(() => {
    mole.classList.remove('out');

    if (playTime > 0) showMole();
  }, time);
}

function scorePoint() {
  score++;
  scoreBoard.textContent = score;

  this.classList.remove('out');
}

function countdown() {
  const timer = document.querySelector('.timer');

  interval = setInterval(() => {
    if (playTime < 0) {
      clearInterval(interval);
      return;
    }

    timer.textContent = playTime;
    playTime--;
  }, 1000);
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomMole(molesCount) {
  let index = Math.floor(Math.random() * molesCount),
      mole = moles[index];

  if (index === lastIndex) return randomMole(molesCount);
  lastIndex = index;

  return mole;
}

start.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', scorePoint));
