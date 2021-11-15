const secondsArm = document.querySelector(".seconds"),
  longArm = document.querySelector(".long-arm"),
  shortArm = document.querySelector(".short-arm"),
  secondsD = document.querySelector(".digital-seconds"),
  minutesD = document.querySelector(".minutes"),
  hoursD = document.querySelector(".hours");
const setTime = () => {
  const now = new Date();
  const secs = now.getSeconds(),
    mins = now.getMinutes(),
    hours = now.getHours();

  //  Calculations for analog clock
  const secondsDeg = (secs / 60) * 360 + 90;
  secondsArm.style.transform = `rotate(${secondsDeg}deg)`;
  const minutesDeg = (mins / 60) * 360 + (secs / 60) * 6 + 90;
  longArm.style.transform = `rotate(${minutesDeg}deg)`;
  const hoursDeg = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  shortArm.style.transform = `rotate(${hoursDeg}deg)`;

  // Digital CLock Display
  secondsD.innerText = secs <  10 ? "0" + secs : secs;
  minutesD.innerText = mins <  10 ? "0" + mins : mins;
  hoursD.innerText = hours <  10 ? "0" + hours : hours;
};
// Default Button

const changeButton = document.getElementById("switch");
changeButton.innerText = "ANALOG CLOCK";
const digitalClock = document.querySelector(".digital-clock"),
  analogClock = document.querySelector(".analog-clock");

var digital = true;

// Change Clock
changeButton.addEventListener("click", () => {
  if (digital) {
    digitalClock.classList.add("hide");
    analogClock.classList.remove("hide");
    digital = false;
    changeButton.innerText = "ANALOG CLOCK";
  } else {
    analogClock.classList.add("hide");
    digitalClock.classList.remove("hide");
    digital = true;
    changeButton.innerText = "DIGITAL CLOCK";
  }
});

// Start Time
setInterval(setTime, 1000)
setTime()
