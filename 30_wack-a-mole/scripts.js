const start = document.querySelector('.controls button[name="start"]'),
      moles = document.querySelectorAll('.mole'),
      timer = document.querySelector('.timer'),
      score = document.querySelector('.controls .score span');

let playTime, countdown;

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
  let moleMax = moles.length,
      standMin = 0.5,
      standMax = 1.5,
      randomMole = Math.floor(Math.random() * moleMax),
      randomStand = (Math.random() * (standMax - standMin) + standMin).toFixed(2) * 1000,
      mole = moles[randomMole];

  mole.style.transform = 'translateY(0)';
  mole.style.opacity = 1;

  setTimeout(() => {
    mole.style.transform = 'translateY(140px)';
    mole.style.opacity = 0;
  }, randomStand);
}

function scorePoints() {
  score.textContent = parseInt(score.textContent) + 1;

  this.style.transform = 'translateY(140px)';
  this.style.opacity = 0;
}

start.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', scorePoints));
