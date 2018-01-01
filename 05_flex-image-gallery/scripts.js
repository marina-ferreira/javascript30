window.onload = () => {
  var panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => panel.addEventListener('mouseover', slideUp));
  panels.forEach((panel) => panel.addEventListener('mouseleave', slideDown));
}

function slideUp(e) {
  var panelTitle = this.querySelector('.title');
  var details = this.querySelector('.details');

  if (!panelTitle || !details) return;

  panelTitle.style = 'transform: translateY(150px); visibility: visible';
  details.style = 'margin-bottom: 60px; visibility: visible';
}

function slideDown(e) {
  var panelTitle = this.querySelector('.title');
  var details = this.querySelector('.details');

  if (!panelTitle || !details) return;

  panelTitle.style = 'transform: translateY(-150px); visibility: hidden; opacity: 0';
  details.style = 'margin-bottom: -250px; visibility: hidden; opacity: 0';
}
