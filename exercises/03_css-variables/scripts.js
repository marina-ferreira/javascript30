function updateImage(e) {
  let inputKind = e.target.id,
      suffix = inputKind === 'color' ? '' : 'px',
      cssValue = `${e.target.value}${suffix}`;

  document.documentElement.style.setProperty(`--${inputKind}`, cssValue);
}

document.addEventListener('input', updateImage);
