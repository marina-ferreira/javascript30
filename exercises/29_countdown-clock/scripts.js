const buttons = document.querySelectorAll('.countdown-clock-controls button'),
      enterTime = document.querySelector('.countdown-clock-controls input'),
      clock = document.querySelector('.clock'),
      backAt = document.querySelector('.back-at');

let timer;

function startTimer(seconds) {
  clearInterval(timer);

  let now = Date.now(),
      then = now + (seconds * 1000);

  displayTimeLeft(seconds);
  displayBackAt(then);

  timer = setInterval(() => {
    let secsLeft = Math.round((then - Date.now()) / 1000);

    if (secsLeft < 0) {
      clearInterval(timer);
      return;
    }

    displayTimeLeft(secsLeft);
  }, 1000);
}

function displayTimeLeft(secsLeft) {
  let minutes = Math.floor(secsLeft / 60),
      secs = secsLeft % 60;

  clock.textContent = `${formatTime(minutes)}:${formatTime(secs)}`;
}

function displayBackAt(then) {
  let end = new Date(then),
      hours = end.getHours(),
      minutes = end.getMinutes();

  backAt.textContent = `Back at ${formatTime(hours)}:${formatTime(minutes)}`;
}

function formatTime(time) {
  return `${time < 10 ? '0' : ''}${time}`;
}

function setSeconds(e) {
  let value = parseInt(this.value),
      secs = e.type === 'click' ? value : value * 60;

  startTimer(secs);
}

buttons.forEach(button => button.addEventListener('click', setSeconds));
enterTime.addEventListener('keyup', setSeconds);
