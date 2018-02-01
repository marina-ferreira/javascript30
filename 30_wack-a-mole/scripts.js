const start = document.querySelector('.controls button[name="start"]'),
      moles = document.querySelectorAll('.mole'),
      timer = document.querySelector('.timer'),
      score = document.querySelector('.controls .score span');

let playTime, countdown, lastIndex;

function startGame() {
  playTime = 10;
  score.textContent = 0;
  clearInterval(countdown);

  countdown = setInterval(() => {
    if (playTime < 0) {
      clearInterval(countdown);
      return;
    }

    timer.textContent = playTime;
    playTime--;

    showMoles();
  }, 1000);
}

function showMoles() {
  let mole = randomMole(moles.length),
      time = randomTime(0.5, 1.5);

  mole.style.transform = 'translateY(0)';
  mole.style.opacity = 1;

  setTimeout(() => {
    mole.style.transform = 'translateY(140px)';
    mole.style.opacity = 0;
  }, time);
}

function scorePoints() {
  score.textContent = parseInt(score.textContent) + 1;

  this.style.transform = 'translateY(140px)';
  this.style.opacity = 0;
}

function randomTime(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2) * 1000;
}

function randomMole(molesCount) {
  let index = Math.floor(Math.random() * molesCount),
      mole = moles[index];

  if (index === lastIndex) return randomMole(molesCount);
  lastIndex = index;

  return mole;
}

start.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', scorePoints));
