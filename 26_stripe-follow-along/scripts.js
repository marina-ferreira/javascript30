let menu = document.querySelector('.menu'),
    links = document.querySelectorAll('.menu a'),
    dropdown = document.querySelector('.dropdown');

function placeDropdown(e) {
  let isActive = dropdown.classList.contains('active'),
      styleProperty = isActive ? 'all' : 'opacity',
      offsetX = this.offsetLeft + (this.offsetWidth - dropdown.offsetWidth) / 2;

  !isActive && dropdown.classList.add('active');

  dropdown.style.transform = `translateX(${offsetX}px)`;
  dropdown.style.transition = `${styleProperty} .2s ease-in-out`;
}

links.forEach(link => link.addEventListener('mouseenter', placeDropdown));
menu.addEventListener('mouseleave', () => dropdown.classList.remove('active'));
