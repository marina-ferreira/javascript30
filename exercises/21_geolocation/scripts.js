let speedTag = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(position => {
  let heading = position.coords.heading || 255,
      speed = position.coords.speed || 27.93;

  document.documentElement.style.setProperty('--heading', `${heading}deg`);
  speedTag.textContent = speed;
}, (err) => console.err(err));
