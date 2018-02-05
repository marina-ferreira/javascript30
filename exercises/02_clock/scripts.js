function setClock() {
  const hoursHand = document.querySelector('.hours'),
        minutesHand = document.querySelector('.minutes'),
        secondsHand = document.querySelector('.seconds');

  let now = new Date(),
      seconds = now.getSeconds(),
      minutes = now.getMinutes(),
      hours = now.getHours(),

      hoursAngle = (360 * hours) / 12,
      minutesAngle = (360 * minutes) / 60,
      secondsAngle = (360 * seconds) / 60;

  hoursHand.style.transform = `rotate(${hoursAngle}deg) translate(0, -50%)`;
  minutesHand.style.transform = `rotate(${minutesAngle}deg) translate(0, -50%)`;
  secondsHand.style.transform = `rotate(${secondsAngle}deg) translate(0, -50%)`;
}

setInterval(setClock, 1000);
