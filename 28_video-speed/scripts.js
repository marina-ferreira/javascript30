const speedContainer = document.querySelector('.speed-control'),
      speed = document.querySelector('.speed-value'),
      video = document.querySelector('video'),

      minRate = 0.5,
      maxRate = 4,
      speedPadding = parseInt(window.getComputedStyle(speed).paddingTop),
      containerHeight = speedContainer.offsetHeight - speedPadding;

let isMouseDown = false;

function setSpeed(e) {
  if (!isMouseDown) return;

  let height = e.offsetY  - speedPadding;
      playbackRate = height * (maxRate - minRate) / containerHeight + minRate;

  speed.style.setProperty('height', `${e.offsetY}px`);
  speed.textContent = playbackRate.toFixed(1);
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', setSpeed);
speed.addEventListener('mousedown', () =>   isMouseDown = true);
speed.addEventListener('mouseup', () => isMouseDown = false);

speedContainer.addEventListener('mousemove', setSpeed);
speedContainer.addEventListener('mousedown', () =>   isMouseDown = true);
speedContainer.addEventListener('mouseup', () => isMouseDown = false);
speedContainer.addEventListener('mouseleave', () => isMouseDown = false);
