function setClock() {
  var hoursHand = document.querySelector('.hours');
  var minutesHand = document.querySelector('.minutes');
  var secondsHand = document.querySelector('.seconds');

  var now = new Date();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();

  var hoursAngle = (360 * hours) / 12;
  var minutesAngle = (360 * minutes) / 60;
  var secondsAngle = (360 * seconds) / 60;

  hoursHand.style.transform = `rotate(${hoursAngle}deg) translate(0, -50%)`;
  minutesHand.style.transform = `rotate(${minutesAngle}deg) translate(0, -50%)`;
  secondsHand.style.transform = `rotate(${secondsAngle}deg) translate(0, -50%)`;
}

setInterval(setClock, 1000);
