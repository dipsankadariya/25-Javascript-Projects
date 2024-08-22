const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelector('.js-start-button');
const pauseButton = document.querySelector('.js-pause-button');
const resetButton = document.querySelector('.js-reset-button');

let timer;
let running = false;
let time = 0;

function updateTimer() {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = time % 1000;

  timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

startButton.addEventListener('click', () => {
  if (!running) {
    timer = setInterval(() => {
      time += 1; 
      updateTimer();
    }, 1); 
    running = true;
  }
});

pauseButton.addEventListener('click', () => {
  clearInterval(timer);
  running = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  running = false;
  time = 0;
  updateTimer();
});
