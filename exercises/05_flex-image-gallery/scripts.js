const panels = document.querySelectorAll('.panel');

function togglePanel(e) {
  this.classList.toggle('open');
}

function slideDetails(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('details-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));
panels.forEach(panel => panel.addEventListener('transitionend', slideDetails));
