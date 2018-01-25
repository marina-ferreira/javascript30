let links = document.querySelectorAll('.menu a');
let dropdown = document.querySelector('.dropdown');

function placeDropdown(e) {
  if (!dropdown.classList.contains('active')) {
    dropdown.style.left = `${this.offsetLeft + (this.offsetWidth / 2) - (dropdown.offsetWidth / 2)}px`;
    dropdown.classList.add('active');
    return;
  }

  dropdown.style.transform = `translateX(${this.offsetLeft + (this.offsetWidth / 2) - (dropdown.offsetWidth / 2)}px)`;
}

links.forEach(link => link.addEventListener('mouseenter', placeDropdown));
links.forEach(link => link.addEventListener('mouseleave', () => dropdown.classList.remove('active')));
