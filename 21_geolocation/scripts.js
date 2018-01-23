navigator.geolocation.getCurrentPosition(position => {
  let heading = position.coords.heading || 255,
      speed = position.coords.speed || 27.93,
      speedTag = document.querySelector('.speed');

  document.documentElement.style.setProperty('--heading', `${heading}deg`);
  speedTag.textContent = `${speed} km/h`;
});
