const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const h2 = document.querySelector('h2.get-time');

const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


let setDate = () => {

  let updateMinutes;
  let updateSeconds;
  let updateHours;
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
  
  if ( minutes < 10 ) {

    updateMinutes = `0${minutes}`;

  } else {

    updateMinutes = `${minutes}`;

  }
  if ( seconds < 10 ) {

    updateSeconds = `0${seconds}`;

  } else {

    updateSeconds = `${seconds}`;

  }
  if ( hours < 10 ) {

    updateHours = `0${hours}`;

  } else {

    updateHours = `${hours}`;

  }
  
  h2.innerHTML = `${updateHours}:${updateMinutes}:${updateSeconds} <br> ${day} ${monthsOfYear[month]} ${year}`;

}

setInterval(setDate, 1000);