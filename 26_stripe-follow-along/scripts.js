let menu = document.querySelector('.menu'),
    links = document.querySelectorAll('.menu a'),
    dropdown = document.querySelector('.dropdown'),
    submenu = document.querySelector('.dropdown .submenu');

function placeDropdown(e) {
  let isActive = dropdown.classList.contains('active'),
      styleProperty = isActive ? 'all' : 'opacity',
      offsetX = this.offsetLeft + (this.offsetWidth - dropdown.offsetWidth) / 2;

  !isActive && dropdown.classList.add('active');
  populateDropdown.call(this);

  dropdown.style.transform = `translateX(${offsetX}px)`;
  dropdown.style.transition = `${styleProperty} .2s ease-in-out`;
}

function populateDropdown() {
  submenu.style.visibility = 'hidden';
  submenu = document.querySelector(`.dropdown .submenu.${this.dataset.name}`);

  let submenuHeight = submenu.getBoundingClientRect().height;

  dropdown.style.height = `${submenuHeight}px`;
  submenu.style.visibility = 'visible';
}

links.forEach(link => link.addEventListener('mouseenter', placeDropdown));
menu.addEventListener('mouseleave', () => dropdown.classList.remove('active'));
