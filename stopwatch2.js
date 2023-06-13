const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startStopwatch() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopStopwatch() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 ) {
      sec = "0" + sec;
    }
    if (min < 10 ) {
      min = "0" + min;
    }
    if (hr < 10 ) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}
function resetStopwatch() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}
let timerInterval;
let timerRunning = false;
let timerDuration = 60; // Duration in seconds

function formatTime(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
function startTimer() {
  if (!timerRunning) {
    let time = timerDuration;
    timerInterval = setInterval(function () {
      time--;
      document.getElementById("timer").textContent = formatTime(time);
      if (time === 0) {
        stopTimer();
      }
    }, 1000);
    timerRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("stopTimer").addEventListener("click", stopTimer);