var minuteValue = document.querySelector(".minutes");
var secondValue = document.querySelector(".seconds");
var logDiv = document.querySelector(".log");
var btnStart = document.querySelector(".btnStart");
var btnPause = document.querySelector(".btnPause");
var btnReset = document.querySelector(".btnReset");
var progressBar = document.querySelector(".progressBar");
var minute;
var second;
var remainingSeconds = 0;
const totalSeconds = remainingSeconds;
var interval = null;

//to get input minute
function setTimeMin() {
  const inputMin = prompt("ENTER MINUTES:");
  minute = 0;

  inputMin == null || isNaN(inputMin) == true
    ? (minuteValue.textContent = "00")
    : (minuteValue.textContent = inputMin);
  parseInt(inputMin) < 10
    ? (minuteValue.textContent = "0" + inputMin)
    : (minuteValue.textContent = inputMin);
  log(
    "Timer set to " +
      inputMin +
      " minutes " +
      secondValue.textContent +
      " secods......"
  );

  btnStart.disabled = false;
}

//to get input second
function setTimeSec() {
  const inputSec = prompt("ENTER SECONDS:");
  second = 0;

  inputSec == null || isNaN(inputSec) == true
    ? (secondValue.textContent = "00")
    : (secondValue.textContent = inputSec);
  parseInt(inputSec) < 10
    ? (secondValue.textContent = "0" + inputSec)
    : (secondValue.textContent = inputSec);
  log(
    "Timer set to " +
      minuteValue.textContent +
      " minutes " +
      inputSec +
      " secods......"
  );
  btnStart.disabled = false;
}

//to format time
function timeFormat() {
  minuteValue.textContent < 10
    ? (minuteValue.textContent = "0" + minuteValue.textContent)
    : console.log(minuteValue.textContent);
  secondValue.textContent < 10
    ? (secondValue.textContent = "0" + secondValue.textContent)
    : console.log(secondValue.textContent);
}

//update time
function updateTime() {
  if (remainingSeconds !== 0) {
    minuteValue.textContent = Math.floor(remainingSeconds / 60);
    secondValue.textContent = remainingSeconds % 60;
    timeFormat();
  } else {
    reset();
  }
}

//to start countdown
function start() {
  minute = parseInt(minuteValue.textContent);
  second = parseInt(secondValue.textContent);
  remainingSeconds = minute * 60 + second;

  btnPause.disabled = false;
  btnReset.disabled = false;

  if (remainingSeconds !== 0) {
    interval = setInterval(() => {
      remainingSeconds--;
      btnStart.disabled = true;
      updateTime();
      progress();
    }, 1000);
    log("Timer Started......");
  }
}

//for pausing timer
function pause() {
  clearInterval(interval);
  log("Timer Paused.......");
  btnPause.disabled = true;
  btnStart.disabled = false;
}

//to reset all the value and timer
function reset() {
  clearInterval(interval);
  minuteValue.textContent = "00";
  secondValue.textContent = "00";
  btnReset.disabled = true;
  btnStart.disabled = true;
  btnPause.disabled = true;
  log("Timer Reset.......");
}

//to keep log of user actions in logbox
function log(msg) {
  const newSpan = document.createElement("span");
  newSpan.className = "msg";
  logDiv.appendChild(newSpan);
  newSpan.innerHTML = "<br>" + msg;
}

//progressbar control animation
function progress() {
  progressBar.max = 100;
  progressBar.value = remainingSeconds;
}
