const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

let isMouseUp = true,
    hue = 0,
    thickness = true,
    x, y;

if (window.innerWidth) {
  canvas.width = window.innerWidth * .8;
  canvas.height = window.innerHeight * .9;
}

context.lineCap = 'round';
context.lineJoin = "round";
context.lineWidth = 100;

getClickPosition = (e) => {
  isMouseUp = e.type == 'mouseup';

  x = e.clientX;
  y = e.clientY;
}

draw = (e) => {
  if (isMouseUp) return;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [x, y] = [e.offsetX, e.offsetY];
  hue++;
  hue = hue % 360;

  if (context.lineWidth > 100 || context.lineWidth <= 1) { thickness = !thickness; }
  thickness ? context.lineWidth++ : context.lineWidth--;
}

canvas.addEventListener('mousedown', getClickPosition);
canvas.addEventListener('mouseup', getClickPosition);
canvas.addEventListener('mousemove', draw);
