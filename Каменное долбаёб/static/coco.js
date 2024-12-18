const stSept = new Date(2023, 8, 1, 0, 0, 0);

let seconds;
let minutes;
let hours;
let days;
let months;

let today;

today = new Date();

seconds = stSept.getSeconds() - today.getSeconds();
minutes = stSept.getMinutes() - today.getMinutes();
hours = stSept.getHours() - today.getHours();
days = stSept.getDate() - today.getDate();
months = stSept.getMonth() - today.getMonth();

const checkingTimer = () => {
  if (seconds <= -1) {
    (seconds = 60 + seconds), (minutes += -1);
  }
  if (minutes <= -1) {
    (minutes = 60 + minutes), (hours += -1);
  }
  if (hours <= -1) {
    (hours = 24 + hours), (days += -1);
  }
  if (days <= -1) {
    (days = 31 + days), (months += -1);
  }
};

const timer = () => {
  setTimeout(() => {
    if (months >= 0) {

      document.querySelector("#second").textContent = seconds + " секунд";
      document.querySelector("#minute").textContent = minutes + " минут";
      document.querySelector("#hour").textContent = hours + " часов";
      document.querySelector("#day").textContent = days + " дней";
      document.querySelector("#month").textContent = months + " месяц";

      today = new Date();

      seconds = stSept.getSeconds() - today.getSeconds();
      minutes = stSept.getMinutes() - today.getMinutes();
      hours = stSept.getHours() - today.getHours();
      days = stSept.getDate() - today.getDate();
      months = stSept.getMonth() - today.getMonth();

      checkingTimer();
      console.log(months, days, hours, minutes, seconds);

      timer();
    } else {
      document.querySelector("#second").textContent = 0 + ' секунд';
      document.querySelector("#minute").textContent = 0 +' минут';
      document.querySelector("#hour").textContent = 0 +' часов';
      document.querySelector("#day").textContent = 0 + ' дней';
      document.querySelector("#month").textContent = 0 + ' месяц';
      clearTimeout(timer);
    }
  }, 1000);
};
timer();
