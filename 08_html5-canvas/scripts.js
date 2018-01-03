window.onload = () => {
  window.isMouseUp = true;
  canvas.addEventListener('mousedown', getOrigin);
  canvas.addEventListener('mouseup', getOrigin);
  canvas.addEventListener('mousemove', getCoordinates);
}

getOrigin = (e) => {
  window.isMouseUp = e.type == 'mouseup';

  window.prevX = e.clientX;
  window.prevY = e.clientY;
}

function getCoordinates(e) {
  if (window.isMouseUp) return;

  let x = e.clientX;
  let y = e.clientY;
  console.log(window.prevX, window.prevY, x, y);

  draw(window.prevX, window.prevY, x, y);

  window.prevX = x;
  window.prevY = y;
}

  draw = (prevX, prevY, x, y) => {
  let canvas = document.querySelector('#canvas');
  let context = canvas.getContext('2d');

  context.beginPath();
  context.lineJoin = "round";
  context.moveTo(window.prevX, window.prevX);
  context.lineTo(x, y);
  context.closePath();
  context.stroke();
}
