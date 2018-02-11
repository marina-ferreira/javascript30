const panels = document.querySelectorAll('.panel');

function togglePanel(e) {
  const delay = 300;
  let isOpen = this.classList.contains('open');

  if (isOpen) {
    this.classList.remove('active');
    setTimeout(() => this.classList.remove('open'), delay);

    return;
  }

  this.classList.add('open');
  setTimeout(() => this.classList.add('active'), delay);
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));
