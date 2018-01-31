const speed = document.querySelector('.speed'),
      bar  = document.querySelector('.speed-bar'),
      video = document.querySelector('.flex');

function setSpeed(e) {
  let y = e.pageY  - this.offsetTop,
      percent = y / this.offsetHeight,
      min = 0.5,
      max = 4,
      height = Math.round(percent * 100) + '%',
      playbackRate = percent * (max - min) + min;

  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';

  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', setSpeed);
