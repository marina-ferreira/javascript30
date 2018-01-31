const buttons = document.querySelectorAll('.controls button');
const enterTime = document.querySelector('.controls input');
const clock = document.querySelector('.clock');
let time = new Date();

function setCountdown() {
  time.setHours(0,0,0,0);
  time.setSeconds(this.value);

  let missingTime = `${time.getMinutes() || '00'}:${time.getSeconds() || '00'}`;

  clock.textContent = missingTime;
}

buttons.forEach(button => button.addEventListener('click', setCountdown));
enterTime.addEventListener('keyup', setCountdown);
