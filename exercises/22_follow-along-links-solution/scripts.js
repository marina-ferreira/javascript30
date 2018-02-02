let triggers = document.querySelectorAll('a'),
    highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(e) {
  let linkCoords = this.getBoundingClientRect(),
      coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
      }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
