const start = document.querySelector('button[name="start"]');
const moles = document.querySelectorAll('.mole');
const timer = document.querySelector('.timer');

let secs;
let moleMax = moles.length;
let standMin = 0.5;
let standMax = 2;
let countdown;

function startGame() {
  secs = 10;
  clearInterval(countdown);

  countdown = setInterval(() => {
    if (secs < 0) {
      clearInterval(countdown);
      return;
    }

    timer.textContent = secs;
    secs--;
    showMoles();
  }, 1000);
}

function showMoles() {
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


start.addEventListener('click', startGame);
