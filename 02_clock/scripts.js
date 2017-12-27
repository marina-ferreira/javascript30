window.onload = function() {
  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds');
  var hoursAngle = 0.00416667;
  var minutesAngle = 0.1;
  var secondsAngle = 6;

  setInterval(function() {
    hours.style.transform = `rotate(${hoursAngle}deg) translate(0%, -50%)`;
    hoursAngle += 0.00416667;

    minutes.style.transform = `rotate(${minutesAngle}deg) translate(0%, -50%)`;
    minutesAngle += 0.1;

    seconds.style.transform = `rotate(${secondsAngle}deg) translate(0%, -50%)`;
    secondsAngle += 6;
  }, 1000);
}
