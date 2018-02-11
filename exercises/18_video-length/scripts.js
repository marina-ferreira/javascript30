const videoList = document.querySelector('.videos'),
      videos = Array.from(document.querySelectorAll('[data-time]'));

(function calculateTotalTime() {
  let hours, minutes, seconds, totalTime, min, sec;

  seconds = videos.map(video => video.dataset.time)
  .map(timeCode => {
    [min, sec] = timeCode.split(':').map(parseFloat);
    return min * 60 + sec;
  }).reduce((total, secs) => total + secs);

  hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  totalTime = `
    <div class="full-length">
      <img class="clock" src="./img/clock.png" />
      <span>Total length: ${hours}h ${minutes}m ${seconds}s</span>
    </div>
  `;
  videoList.insertAdjacentHTML('afterend', totalTime);
})();

(function buildTemplate() {
  videos.forEach((video, index) => {
    let name = index % 2 === 0 ? 'wooden-' : '';

    video.innerHTML = `
      <img class="image video"️ src="./img/${name}video.png"/>
      <span class="duration">🕰️ ${video.dataset.time}</span>
    `;
  });
})();
