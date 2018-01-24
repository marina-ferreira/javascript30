let links = document.querySelectorAll('a'),
    pill = document.querySelector('.pill');

function moveHover(e) {
  if (e.toElement.tagName !== 'A') return;

  pill.style.height = `${e.toElement.offsetHeight}px`;
  pill.style.width = `${e.toElement.offsetWidth}px`;
  pill.style.opacity = 1;

  pill.style.top = `${e.toElement.offsetTop}px`;
  pill.style.left = `${e.toElement.offsetLeft}px`;
}

links.forEach(link => addEventListener('mouseover', moveHover));
