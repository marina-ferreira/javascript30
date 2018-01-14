const canvas = document.querySelector('canvas'),
      video = document.querySelector('video'),
      screenshotList = document.querySelector('.screenshots'),
      controls = document.querySelector('.controls'),
      ranges = controls.querySelectorAll('input[type="range"]'),
      checkbox = controls.querySelector('input[type="checkbox"]'),
      screenshotButton = controls.querySelector('input[type="button"]'),
      context = canvas.getContext('2d');

function startCam() {
  let media = navigator.mediaDevices.getUserMedia({ video: true });

  media.then(stream => {
    video.srcObject = stream;
    video.play();
  });
}

function handleFilter(e) {
  document.documentElement.style.setProperty(`--opacity`, .5);
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}`);
}

function toggleFilter() {
  let opacity = document.documentElement.style.getPropertyValue("--opacity");

  opacity = opacity == 0 ? .5 : 0;
  document.documentElement.style.setProperty(`--opacity`, opacity);
}

function takeScreenshot() {
  context.drawImage(video, 0, 0, 640, 480);
  var screenshot = new Image();
  screenshot.src = canvas.toDataURL('image/jpeg');
  context.clearRect(0, 0, canvas.width, canvas.height);

  screenshotList.append(screenshot);
}

startCam();

ranges.forEach(range => range.addEventListener('change', handleFilter));
checkbox.addEventListener('change', toggleFilter);
screenshotButton.addEventListener('click', takeScreenshot);
