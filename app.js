
// Creates variables to target the clock hand divs
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

// Creates variable to target the h2 element
const h2 = document.querySelector('h2.get-time');

// Array to store months of year
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Setdate date function to use the built in date and time function to then manipulate the clock hand position
let setDate = () => {

  // Function variables
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();

  // Empty variables to use in the conditional for styling
  let updateMinutes;
  let updateSeconds;
  let updateHours;

  // Process to generate seconds and calculate second div angle
  const seconds = now.getSeconds();
  const secondsDegrees = (((seconds / 60) * 360) + 90 );
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Process to generate minutes and calculate minute div angle
  const minutes = now.getMinutes();
  const minutesDegrees = (((minutes / 60) * 360) + 90 );
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Process to generate hours and calculate hour div angle
  const hours = now.getHours();
  const hoursDegrees = (((hours / 12) * 360) + 90 );
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
  // Conditional to check if minutes, seconds or hours are single figures and if so, include an additional '0'.
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
  
  // Template literal string to display the time and date in the header
  h2.innerHTML = `${updateHours}:${updateMinutes}:${updateSeconds} <br> ${day} ${monthsOfYear[month]} ${year}`;

}

// setInterval is a built-in function that will call 'setDate' every 1000ms
setInterval(setDate, 1000);