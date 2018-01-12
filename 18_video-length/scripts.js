const videoList = document.querySelector('.videos'),
      videos = Array.from(document.querySelectorAll('[data-time]'));

let videosLength = videos.map(video => {
  let time = video.dataset.time.split(':');
  return time.reduce((a, b) => parseInt(a) * 60 + parseInt(b), 0);
});

let fullLength = videosLength.reduce((a, b) => a + b, 0),
    element = `<span class="full-length">Total length: ${fullLength}s</span>`;

videoList.insertAdjacentHTML('afterend', element);
