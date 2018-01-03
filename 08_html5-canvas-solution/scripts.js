window.onload = () => {
  const canvas = document.querySelector('#draw');
  const context = canvas.getContext('2d');
  let isDrawing = false;
  let lastX, lastY;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.strokeStyle = '#BADA55';
  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.lineWidth = 100;

  function setInitialCoordinates(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function draw(e) {
    if (!isDrawing) { return; }

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener('mousedown', setInitialCoordinates);
  canvas.addEventListener('mousemove', draw);

  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}
