document.addEventListener('keydown', function(event) {
  var key = document.querySelector("[data-key='" + event.keyCode + "']");

  if (key) {
    key.classList.add('active');

    var fileName = key.childNodes[3].innerText;
    var audio = new Audio('sounds/' + fileName + '.mp3');
    audio.play();
  }
});

document.addEventListener('keyup', function() {
  var key = document.querySelector("[data-key='" + event.keyCode + "']");

  key && key.classList.remove('active');
});
