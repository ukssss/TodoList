const clockForm = document.querySelector("#clock-div");

const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function setClock() {
  const defaultYears = new Date().getFullYear();
  const defaultMonths = new Date().getMonth();
  const defaultDays = new Date().getDate();
  const defaultWeeks = new Date().getDay();
  const defaultHours = new Date().getHours();
  const defaultMins = new Date().getMinutes();
  const defaultSecs = new Date().getSeconds();

  const years = String(defaultYears).padStart(4, "0");
  const months = MONTH[defaultMonths];
  const days = String(defaultDays).padStart(2, "0");
  const weeks = WEEKDAY[defaultWeeks];
  const hours = String(defaultHours).padStart(2, "0");
  const mins = String(defaultMins).padStart(2, "0");
  const secs = String(defaultSecs).padStart(2, "0");

  clockForm.innerHTML = `
  <span class="date">${weeks}, ${months} ${days}</span>
  <span class="clock">${hours}:${mins}</span>
  `;
}

setClock();
setInterval(setClock, 1000);
