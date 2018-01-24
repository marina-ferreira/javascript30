let links = document.querySelectorAll('a'),
    pill = document.querySelector('.pill');

function moveHover(e) {
  pill.style.opacity = 1;

  pill.style.height = `${e.toElement.offsetHeight}px`;
  pill.style.width = `${e.toElement.offsetWidth}px`;

  pill.style.top = `${e.toElement.offsetTop}px`;
  pill.style.left = `${e.toElement.offsetLeft}px`;
}

links.forEach(link => link.addEventListener('mouseenter', moveHover));
