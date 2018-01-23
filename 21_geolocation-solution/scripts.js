let arrow = document.querySelector('.arrow');
let speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => console.log(err));
