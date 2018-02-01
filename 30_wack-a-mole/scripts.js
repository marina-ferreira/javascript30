const start = document.querySelector('.controls button[name="start"]');
const moles = document.querySelectorAll('.mole');
const timer = document.querySelector('.timer');
const score = document.querySelector('.controls .score span');

let playTime;
let countdown;

function startGame() {
  playTime = 10;
  score.textContent = 0
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
  let moleMax = moles.length;
  let standMin = 0.5;
  let standMax = 1.5;
  let randomMole = Math.floor(Math.random() * moleMax);
  let randomStand = (Math.random() * (standMax - standMin) + standMin).toFixed(2) * 1000;

  let mole = moles[randomMole];
  mole.style.setProperty('transform', `translateY(0)`);
  mole.style.setProperty('opacity', 1);

  setTimeout(() => {
    mole.style.setProperty('transform', `translateY(140px)`);
    mole.style.setProperty('opacity', 0);
  }, randomStand);
}

function scorePoints() {
  score.textContent = parseInt(score.textContent) + 1;
  this.style.setProperty('transform', `translateY(140px)`);
  this.style.setProperty('opacity', 0);
}

start.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', scorePoints));
