const videoList = document.querySelector('.videos'),
      videos = Array.from(document.querySelectorAll('[data-time]'));
let hours, minutes, seconds, totalTime, min, sec;

seconds = videos.map(video => video.dataset.time)
                .map(timeCode => {
                  [min, sec] = timeCode.split(':').map(parseFloat);
                  console.log(min, sec);
                  return min * 60 + sec;
                }).reduce((total, secs) => total + secs);

hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;
minutes = Math.floor(seconds / 60);
seconds = seconds % 60;

totalTime = `<span class="full-length">Total length: ${hours}h ${minutes}m ${seconds}s</span>`;
videoList.insertAdjacentHTML('afterend', totalTime);
