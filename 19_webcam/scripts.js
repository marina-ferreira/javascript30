const canvas = document.querySelector('canvas'),
      video = document.querySelector('video'),
      screenshotButton = document.querySelector('input[name="takeScreenshot"]'),
      context = canvas.getContext('2d');

function startCam() {
  let media = navigator.mediaDevices.getUserMedia({ video: true, audio: false });

  media.then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(error => console.log('Video could not be loaded', error));
}

function drawToCanvas() {
  return setInterval(() => {
    let width = video.width,
        height = video.height;

    context.drawImage(video, 0, 0, width, height);

    let pixels = context.getImageData(0, 0, width, height);
    pixels = setFilter(pixels);

    context.putImageData(pixels, 0, 0);
  }, 16);
}

function takeScreenshot() {
  let screenshot = canvas.toDataURL('image/jpeg'),
      link = document.createElement('a');

  link.href = screenshot;
  link.setAttribute('download', 'photo');
  link.textContent = 'Download Image';
  link.innerHTML = `<img src="${screenshot}" alt="Screenshot">`;

  document.querySelector('.screenshots').append(link);
}

function redEffect(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }

  return pixels;
}

function rgbSplit(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i + 500] = pixels.data[i + 1];
    pixels.data[i - 550] = pixels.data[i + 2];
  }

  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });

  for (var i = 0; i < pixels.data.length; i++) {
    let red = pixels.data[i + 0];
    let green = pixels.data[i + 1];
    let blue = pixels.data[i + 2];
    let alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
        pixels.data[i + 3] = 0;
      }
  }

  return pixels;
}

function setFilter(pixels) {
  const filter = document.querySelector('.toggle-filters input:checked');
  return filter.value == 'noFilter' ? pixels : window[filter.value](pixels);
}

startCam();

video.addEventListener('canplay', drawToCanvas);
screenshotButton.addEventListener('click', takeScreenshot);
