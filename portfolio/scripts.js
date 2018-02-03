const group = document.querySelector('.layer-group'),
      slides = document.querySelectorAll('.layer'),
      controls = document.querySelectorAll('.control');

let currentIndex = 0,
    lock = false;

function move(newIndex) {
  let animateLeft, slideLeft;

  slideLeft = newIndex > currentIndex ? 100 : -100;
  animateLeft = slideLeft * -1;

  slides[newIndex].style.left = `${slideLeft}%`;
  slides[newIndex].style.display = 'block';

  group.style.left = `${animateLeft}%`;

  setTimeout(() => {
    slides[currentIndex].style.display = 'none';
    group.style.left = 0;
    slides[newIndex].style.left = 0;

    currentIndex = newIndex;
    lock = false;
  }, 700);
}

function slide() {
  if (lock === true) return;
  lock = true;

  let firstSlide = 0,
      lastSlide = slides.length - 1;

  let isLast = currentIndex < (slides.length - 1),
      next = isLast ? currentIndex + 1 : firstSlide;

  let isFirst = currentIndex === 0,
      prev = isFirst ? lastSlide : currentIndex - 1;

  this.classList.contains('next') ? move(next) : move(prev);
}

controls.forEach(control => control.addEventListener('click', slide));
