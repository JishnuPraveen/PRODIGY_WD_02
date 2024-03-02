
var display = document.querySelector(".display");

var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");

var hours = 0;
var minutes = 0;
var seconds = 0;
var timer = null;

function formatTime() {
  
  var hoursText = hours < 10 ? "0" + hours : hours;
  var minutesText = minutes < 10 ? "0" + minutes : minutes;
  var secondsText = seconds < 10 ? "0" + seconds : seconds;

  return hoursText + ":" + minutesText + ":" + secondsText;
}

function updateDisplay() {
  display.textContent = formatTime();
}

function incrementTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  
  updateDisplay();
}


function startStopwatch() {
  
  if (timer === null) {
    timer = setInterval(incrementTime, 1000);
  }
}

function stopStopwatch() {
  
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function resetStopwatch() {
  
  stopStopwatch();

  hours = 0;
  minutes = 0;
  seconds = 0;

  updateDisplay();
}

start.addEventListener("click", startStopwatch);
stop.addEventListener("click", stopStopwatch);
reset.addEventListener("click", resetStopwatch);
