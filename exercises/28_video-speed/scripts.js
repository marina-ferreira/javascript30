const speed = document.querySelector('.speed'),
      bar = document.querySelector('.speed-bar'),
      video = document.querySelector('video'),

      min = 0.5,
      max = 4,
      padding = parseInt(window.getComputedStyle(bar).paddingTop),
      bgHeight = speed.offsetHeight - padding;

let isMouseDown = false;

function setSpeed(e) {
  if (!isMouseDown) return;

  let playbackRate = e.offsetY * (max - min) / bgHeight + min;

  bar.style.height = e.offsetY + 'px';
  bar.textContent = playbackRate.toFixed(1);
  video.playbackRate = playbackRate;
}

bar.addEventListener('mousemove', setSpeed);
bar.addEventListener('mousedown', () =>   isMouseDown = true);
bar.addEventListener('mouseup', () => isMouseDown = false);

speed.addEventListener('mousemove', setSpeed);
speed.addEventListener('mousedown', () =>   isMouseDown = true);
speed.addEventListener('mouseup', () => isMouseDown = false);
speed.addEventListener('mouseleave', () => isMouseDown = false);
