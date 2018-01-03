window.onload = () => {
  let isMouseUp = true;
  let canvas = document.querySelector('#canvas');
  let x, y;

  getClickPosition = (e) => {
    isMouseUp = e.type == 'mouseup';

    x = e.clientX;
    y = e.clientY;
  }

  draw = (e) => {
    if (isMouseUp) return;

    let context = canvas.getContext('2d');

    context.beginPath();
    context.lineJoin = "round";
    context.moveTo(x, y);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    x = e.offsetX;
    y = e.offsetY;
  }

  canvas.addEventListener('mousedown', getClickPosition);
  canvas.addEventListener('mouseup', getClickPosition);
  canvas.addEventListener('mousemove', draw);
}
