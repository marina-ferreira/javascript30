const slider = document.querySelector('.panels');
let isMouseDown = false,
    startX;

function handleMouseDown(e) {
  isMouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function handleScroll(e) {
  if (!isMouseDown) return;

  let currPosX = e.pageX - slider.offsetLeft,
      scrollX = (currPosX - startX) * 2;

  this.scrollLeft -= scrollX;
  startX = currPosX;
}

slider.addEventListener('mousemove', handleScroll);
slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseup', () => isMouseDown = false);
slider.addEventListener('mouseleave', () => isMouseDown = false);
