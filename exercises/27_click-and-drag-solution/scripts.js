const slider = document.querySelector('.items');
let isDown = false,
    startX, scrollLeft;

function handleMouseDown(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function handleMouseUp() {
  isDown = false;
  slider.classList.remove('active');
}

function handleMouseLeave() {
  isDown = false;
  slider.classList.remove('active');
}

function handleMouseMove(e) {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft,
        walk = (x - startX) * 3;

  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseLeave);
slider.addEventListener('mouseup', handleMouseUp);
slider.addEventListener('mousemove', handleMouseMove);
