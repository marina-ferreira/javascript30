function moveShadow(e) {
  let x = (40 * e.pageX / window.innerWidth) - 20,
      y = (40 * e.pageY / window.innerHeight) - 20;

  document.documentElement.style.setProperty('--x', `${x}px`);
  document.documentElement.style.setProperty('--y', `${y}px`);
}

window.addEventListener('mousemove', moveShadow);
