window.onload = () => {
  var panels = document.querySelectorAll('.panel');

  panels.forEach(panel => panel.addEventListener('click', togglePanel));
  panels.forEach(panel => panel.addEventListener('transitionend', slideDetails));
}

function togglePanel(e) {
  this.classList.toggle('open');
}

function slideDetails(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('details-active');
  }
}
