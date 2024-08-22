const displayTime = document.querySelector(".displayTime");
const startButton = document.querySelector(".start-button");
let timerInterval;
let initialTime = 30 * 60;  

function updateDisplayTime() {
  const minutes = Math.floor(initialTime / 60);
  const seconds = initialTime % 60;
  displayTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}



function handleStartPauseClick() {
  if (startButton.textContent === 'Start') {
    startButton.textContent = 'Pause';
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    startButton.textContent = 'Start';
    clearInterval(timerInterval);
  }
}


function updateTimer() {
  if (initialTime === 0) {
    clearInterval(timerInterval);
  
  } else {
    initialTime--;
    updateDisplayTime();
  }
}

startButton.addEventListener('click', handleStartPauseClick);


updateDisplayTime();