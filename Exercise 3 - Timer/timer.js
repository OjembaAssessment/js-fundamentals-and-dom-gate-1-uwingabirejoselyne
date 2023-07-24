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
 let start=document.getElementsByClassName("start-stop")
 let add=document.getElementsByClassName("add")
 let subtract=document.getElementsByClassName("subtract")
 let reset= document.getElementsByClassName("reset")
  start.textContent = "Stop";
  add.disabled = true;
  subtract.disabled = true;
  reset.disabled = true;

  reset.classList.add("disabled");
  add.classList.add("disabled");
  subtract.classList.add("disabled");

  reset.style.backgroundColor = "#ccc";
  add.style.backgroundColor = "#ccc";
  subtract.style.backgroundColor = "#ccc";

  reset.style.cursor = "not-allowed";
  add.style.cursor = "not-allowed";
  subtract.style.cursor = "not-allowed";
}

function stopTimer() {
  clearInterval(intervalId);
  isCounting = false;

  start.textContent = "Start";
  add.disabled = false;
  subtract.disabled = false;

  if (seconds === 0) {
    reset.disabled = true;
    reset.classList.add("disabled");
    reset.style.backgroundColor = "#ccc";
    reset.style.cursor = "not-allowed";
  } else {
    document.getElementsByClassName("reset").disabled = false;
    document.getElementsByClassName("reset").classList.remove("disabled");
    document.getElementsByClassName("reset").style.backgroundColor = "#f44336";
    document.getElementsByClassName("reset").style.cursor = "pointer";
  }

  document.getElementsByClassName("add").classList.remove("disabled");
  document.getElementsByClassName("subtract").classList.remove("disabled");
  document.getElementsByClassName("add").style.backgroundColor = "#2196F3";
  document.getElementsByClassName("subtract").style.backgroundColor = "#2196F3";
  document.getElementsByClassName("add").style.cursor = "pointer";
  document.getElementsByClassName("subtract").style.cursor = "pointer";
}

function resetTimer() {
  if (!isCounting && seconds === 0) {
    document.getElementsByClassName("start-stop").disabled = true;
    document.getElementsByClassName("start-stop").classList.add("disabled");
    document.getElementsByClassName("start-stop").style.backgroundColor = "#ccc";

    return;
  }

  seconds = 0;
  updateDisplay();
  document.getElementsByClassName("reset").disabled = true;
  document.getElementsByClassName("reset").classList.add("disabled");
  document.getElementsByClassName("reset").style.backgroundColor = "#ccc";
  document.getElementsByClassName("reset").style.cursor = "not-allowed";
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
