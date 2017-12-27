window.onload = function() {
  document.addEventListener('input', updateImage);
}

function updateImage(e) {
  var inputKind = e.target.id;
  var suffix = inputKind === 'color' ? '' : 'px';
  var cssValue = `${e.target.value}${suffix}`

  document.documentElement.style.setProperty(`--${inputKind}`, cssValue);
}
