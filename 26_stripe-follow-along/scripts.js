let menu = document.querySelector('.menu'),
    links = document.querySelectorAll('.menu a'),
    dropdown = document.querySelector('.dropdown');

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
  let content = document.querySelector(`.submenu.${this.dataset.name}`),
      contentHeight = content.getBoundingClientRect().height,
      clone = content.cloneNode(true);

  dropdown.style.height = `${contentHeight}px`;
  dropdown.innerHTML = '';
  dropdown.append(clone);

  clone.style.visibility = 'visible';
}

function removeDropdown() {
  dropdown.classList.remove('active');
}

links.forEach(link => link.addEventListener('mouseenter', placeDropdown));
menu.addEventListener('mouseleave', removeDropdown);
