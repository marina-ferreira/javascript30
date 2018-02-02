let menu = document.querySelector('.main-menu'),
    triggers = document.querySelectorAll('.menu-list > li'),
    dropdownBackground = document.querySelector('.dropdownBackground');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') &&
                   this.classList.add('trigger-enter-active'), 150);
  dropdownBackground.classList.add('open');

  let dropdown = this.querySelector('.dropdown');
  let dropdownCoords = dropdown.getBoundingClientRect();
  let navCoords = menu.getBoundingClientRect();
  let coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left
  }

  dropdownBackground.style.setProperty('width', `${coords.width}px`);
  dropdownBackground.style.setProperty('height', `${coords.height}px`);
  dropdownBackground.style.setProperty('top', `${coords.top}px`);
  dropdownBackground.style.setProperty('left', `${coords.left}px`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  dropdownBackground.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
