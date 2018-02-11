function play(e) {
  let key = document.querySelector(`[data-key="${e.keyCode}"]`),
      fileName = key.childNodes[3].innerText,
      audio = new Audio(`sounds/${fileName}.mp3`);

  if (!key) return;

  key.classList.add('active');
  audio.play();
}

function removeActive(e) {
  let key = document.querySelector(`[data-key="${e.keyCode}"]`);
  key && key.classList.remove('active');
}

document.addEventListener('keydown', play);
document.addEventListener('keyup', removeActive);
