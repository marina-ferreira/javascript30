const buttons = document.querySelectorAll('.controls button'),
      enterTime = document.querySelector('.controls input'),
      clock = document.querySelector('.clock'),
      backAt = document.querySelector('.back-at');

let time = new Date(),
    isSet = false;

function setCountdown() {
  let now = new Date();
  isSet = true;

  time.setHours(0,0,0,0);
  time.setSeconds(this.value);

  clock.textContent = `${formatTime(time)}`;

  now.setSeconds(this.value);
  backAt.textContent = `Back at ${formatTime(now, true)}`;
}

function countdown() {
  if (!isSet) return;
  if (time.getMinutes() === '00' && time.getSeconds() === '00') return;

  time.setSeconds(time.getSeconds() - 1);
  clock.textContent = formatTime(time);
}

function formatTime(time, hour = false) {
  let hours = time.getHours().toString().length === 1 ? '0' + time.getHours() : time.getHours(),
      minutes = time.getMinutes().toString().length === 1 ? '0' + time.getMinutes() : time.getMinutes(),
      seconds = time.getSeconds().toString().length === 1 ? '0' + time.getSeconds() : time.getSeconds();

  return hour ? `${hours}:${minutes}` : `${minutes}:${seconds}`;
}

buttons.forEach(button => button.addEventListener('click', setCountdown));
enterTime.addEventListener('keyup', setCountdown);

setInterval(countdown, 1000);
