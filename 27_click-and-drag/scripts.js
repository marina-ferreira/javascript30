const panels = document.querySelectorAll('.panel'),
      slider = document.querySelector('.panels');

let isMouseDown = false,
    posX;

function handleMouseDown(e) {
  isMouseDown = true;
  posX = e.pageX - slider.offsetLeft;
}

function handleScroll(e) {
  if (!isMouseDown) return;

  let currPosX = e.pageX - slider.offsetLeft,
      scrollX = currPosX - posX;

  this.parentElement.scrollLeft -= scrollX;
  posX = currPosX;
}

panels.forEach(panel => panel.addEventListener('mousemove', handleScroll));
panels.forEach(panel => panel.addEventListener('mousedown', handleMouseDown));
panels.forEach(panel => panel.addEventListener('mouseup', () => isMouseDown = false));
slider.addEventListener('mouseleave', () => isMouseDown = false);
