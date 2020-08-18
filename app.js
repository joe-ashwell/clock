const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const h2 = document.querySelector('h2.get-time');

let setDate = () => {

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getUTCMonth();
  const day = now.getUTCDate();

  const seconds = now.getUTCSeconds();
  const secondsDegrees = (((seconds / 60) * 360) + 90 );
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getUTCMinutes();
  const minutesDegrees = (((minutes / 60) * 360) + 90 );
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getUTCHours();
  const hoursDegrees = (((hours / 12) * 360) + 90 );
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
  h2.innerHTML = `${hours}:${minutes}:${seconds} <br> ${day}/${month + 1}/${year}`;

}

setInterval(setDate, 1000);