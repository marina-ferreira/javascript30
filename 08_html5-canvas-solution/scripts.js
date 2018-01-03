window.onload = () => {
  const canvas = document.querySelector('#draw');
  const context = canvas.getContext('2d');
  let hue = 0,
      isDrawing = false,
      direction = true,
      lastX, lastY;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.lineWidth = 50;

  function setInitialCoordinates(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function draw(e) {
    if (!isDrawing) { return; }

    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    hue = hue % 360;

    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
      direction = !direction;
    }

    direction ? context.lineWidth++ : context.lineWidth--;
  }

  canvas.addEventListener('mousedown', setInitialCoordinates);
  canvas.addEventListener('mousemove', draw);

  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}
