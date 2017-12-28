window.onload = () => {
  var panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => panel.addEventListener('mouseover', slideUp));
  panels.forEach((panel) => panel.addEventListener('mouseleave', slideDown));
}


function slideUp(e) {
  var info = this.lastElementChild;

  if (info) {
    info.style = 'transform: translateY(-200px); visibility: visible';
  }
}

function slideDown(e) {
  var info = this.lastElementChild;

  if (info) {
    info.style = 'transform: translateY(200px); visibility: hidden';
  }
}
