const ipc = require('electron').ipcRenderer;

const timeSelector = document.getElementById('timeSelector');
const timerContainer = document.getElementById('timer');
const sleepBtn = document.getElementById('sleep');

const renderTimer = (duration) => {
  let minutes = parseInt(duration / 60, 10);
  let seconds = parseInt(duration % 60, 10);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timerContainer.textContent = minutes + ":" + seconds;
};

let timeout;

const timer = (duration, callback) => {
  if(timeout) {
    clearTimeout(timeout);
  }

  renderTimer(duration);

  timeout = setTimeout(() => {
    renderTimer(duration);

    if (duration <= 0) {
      clearTimeout(timeout);
      callback();
      return
    }

    timer(duration - 1, callback);
  }, 1000);
};

const runTimer = (callback) => {
  const secondsInMinute = 60;
  const minutes = timeSelector.options[timeSelector.selectedIndex].value;
  const duration = minutes * secondsInMinute;

  timer(duration, callback);
};

sleepBtn.addEventListener('click', function () {
  runTimer(() => {
    ipc.send('sleep');
  });
});
