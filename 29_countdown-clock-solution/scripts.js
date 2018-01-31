const timerDisplay = document.querySelector('.display__time-left'),
      endTime = document.querySelector('.display__end-time'),
      buttons = document.querySelectorAll('[data-time]');

let countdown;

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now(),
        then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.round(seconds / 60),
        remainderSeconds = seconds % 60,
        display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp),
        hour = end.getHours(),
        minutes = end.getMinutes();

  endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function handleSubmit(e) {
  e.preventDefault();

  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', handleSubmit);
