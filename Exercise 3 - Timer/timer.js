let intervalId;
let seconds = 29;
let isCounting = false;

function updateDisplay() {
  const timeString = `${seconds}s`;
  document.querySelector(".time-display").textContent = timeString;
}

function startTimer() {
  isCounting = true;
  intervalId = setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    updateDisplay();

    if (seconds === 0) {
      stopTimer();
    }
  }, 1000);

  document.querySelector(".start-stop").textContent = "Stop";
  document.querySelector(".add").disabled = true;
  document.querySelector(".subtract").disabled = true;
  document.querySelector(".reset").disabled = true;

  document.querySelector(".reset").classList.add("disabled");
  document.querySelector(".add").classList.add("disabled");
  document.querySelector(".subtract").classList.add("disabled");

  document.querySelector(".reset").style.backgroundColor = "#ccc";
  document.querySelector(".add").style.backgroundColor = "#ccc";
  document.querySelector(".subtract").style.backgroundColor = "#ccc";

  document.querySelector(".reset").style.cursor = "not-allowed";
  document.querySelector(".add").style.cursor = "not-allowed";
  document.querySelector(".subtract").style.cursor = "not-allowed";
}

function stopTimer() {
  clearInterval(intervalId);
  isCounting = false;

  document.querySelector(".start-stop").textContent = "Start";
  document.querySelector(".add").disabled = false;
  document.querySelector(".subtract").disabled = false;

  if (seconds === 0) {
    document.querySelector(".reset").disabled = true;
    document.querySelector(".reset").classList.add("disabled");
    document.querySelector(".reset").style.backgroundColor = "#ccc";
    document.querySelector(".reset").style.cursor = "not-allowed";
  } else {
    document.querySelector(".reset").disabled = false;
    document.querySelector(".reset").classList.remove("disabled");
    document.querySelector(".reset").style.backgroundColor = "#f44336";
    document.querySelector(".reset").style.cursor = "pointer";
  }

  document.querySelector(".add").classList.remove("disabled");
  document.querySelector(".subtract").classList.remove("disabled");
  document.querySelector(".add").style.backgroundColor = "#2196F3";
  document.querySelector(".subtract").style.backgroundColor = "#2196F3";
  document.querySelector(".add").style.cursor = "pointer";
  document.querySelector(".subtract").style.cursor = "pointer";
}

function resetTimer() {
  if (!isCounting && seconds === 0) {
    document.querySelector(".start-stop").disabled = true;
    document.querySelector(".start-stop").classList.add("disabled");
    document.querySelector(".start-stop").style.backgroundColor = "#ccc";

    return;
  }

  seconds = 0;
  updateDisplay();
  document.querySelector(".reset").disabled = true;
  document.querySelector(".reset").classList.add("disabled");
  document.querySelector(".reset").style.backgroundColor = "#ccc";
  document.querySelector(".reset").style.cursor = "not-allowed";
}

function addSecond() {
  if (!isCounting) {
    seconds += 1;
    updateDisplay();
  }
}

function subtractSecond() {
  if (!isCounting && seconds > 0) {
    seconds -= 1;
    updateDisplay();
  }
}

document.querySelector(".start-stop").addEventListener("click", () => {
  if (isCounting) {
    stopTimer();
  } else {
    startTimer();
  }
});

document.querySelector(".reset").addEventListener("click", resetTimer);
document.querySelector(".add").addEventListener("click", addSecond);
document.querySelector(".subtract").addEventListener("click", subtractSecond);

updateDisplay();
