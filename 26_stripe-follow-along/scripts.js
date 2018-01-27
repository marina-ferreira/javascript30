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
  dropdown.style.transition = `${styleProperty} .4s ease-in-out`;
  submenu.style.transition = 'opacity .2s ease-in-out';
}

function populateDropdown() {
  submenu.style.opacity = 0;
  submenu = document.querySelector(`.dropdown .submenu.${this.dataset.name}`);

  let submenuHeight = submenu.getBoundingClientRect().height;

  dropdown.style.height = `${submenuHeight}px`;
  submenu.style.opacity = 1;
}

function removeDropdown() {
  submenu.style.transition = 'opacity 0s';
  dropdown.classList.remove('active');
}

links.forEach(link => link.addEventListener('mouseenter', placeDropdown));
menu.addEventListener('mouseleave', removeDropdown);
