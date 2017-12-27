function setDate() {
  var now = new Date();
  
  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  var secondHand = document.querySelector('.second-hand');

  var minutes = now.getMinutes();
  var minutesDegrees = ((minutes / 60) * 360) + 90;
  var minuteHand = document.querySelector('.min-hand');

  var hours = now.getHours();
  var hoursDegrees = ((hours / 12) * 360) + 90;
  var hourHand = document.querySelector('.hour-hand');

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);
