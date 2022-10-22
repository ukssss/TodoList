const clockForm = document.querySelector("#clock-div");
const clock = clockForm.querySelector(".clock");

function setClock() {
  const defaultYears = new Date().getFullYear();
  const defaultMonths = new Date().getMonth() + 1;
  const defaultDays = new Date().getDate();
  const defaultHours = new Date().getHours();
  const defaultMins = new Date().getMinutes();
  const defaultSecs = new Date().getSeconds();

  const years = String(defaultYears).padStart(4, "0");
  const months = String(defaultMonths).padStart(2, "0");
  const days = String(defaultDays).padStart(2, "0");
  const hours = String(defaultHours).padStart(2, "0");
  const mins = String(defaultMins).padStart(2, "0");
  const secs = String(defaultSecs).padStart(2, "0");

  if (mins == 59) {
    clock.innerHTML = `<h1 style="color:red;">${years}년 ${months}월 ${days}일 ${hours}시 ${mins}분 ${secs}초</h1>`;
  } else {
    clock.innerHTML = `<h1 style="color:#FF6815;">${years}년 ${months}월 ${days}일 ${hours}시 ${mins}분 ${secs}초</h1>`;
  }
}

setClock();
setInterval(setClock, 1000);
