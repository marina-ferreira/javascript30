const video = document.querySelector('.player__video'),
      seeker = document.querySelector('.progress'),
      seeker_filled = document.querySelector('.progress__filled'),
      playButton = document.querySelector('.player__button[data-control="play"]'),
      sliders = document.querySelectorAll('.player__slider'),
      skipButtons = document.querySelectorAll('.player__button[data-time]');

let isMouseDown = false;

function handlePlay() {
  video.paused ? video.play() : video.pause();
  video.paused ? playButton.innerHTML = '►' : playButton.innerHTML = '❚ ❚';
}

function autoSeek() {
  let filled_width = seeker.offsetWidth / video.duration * video.currentTime;
  seeker_filled.style.width = `${filled_width}px`;
}

function handleSeeker(e) {
  video.currentTime = e.offsetX * video.duration / seeker.offsetWidth;
  seeker_filled.style.width = `${e.offsetX}px`;
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.time);
}

function handleSlider() {
  video[this.dataset.control] = this.value;
}

video.addEventListener('click', handlePlay);
video.addEventListener('timeupdate', autoSeek);

seeker.addEventListener('click', handleSeeker);
seeker.addEventListener('mousemove', (e) => isMouseDown && handleSeeker(e));
seeker.addEventListener('mousedown', () => isMouseDown = true);
seeker.addEventListener('mouseup', () => isMouseDown = false);

playButton.addEventListener('click', handlePlay);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', handleSkip));

sliders.forEach(slider => {
  slider.addEventListener('change', handleSlider);
  slider.addEventListener('mousemove', handleSlider);
});
