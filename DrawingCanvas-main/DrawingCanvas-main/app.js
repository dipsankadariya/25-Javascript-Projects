const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');
const toolbarStroke = document.getElementById('stroke');
const toolbarLineWidth = document.getElementById('lineWidth');
const clearButton = document.getElementById('clear');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

toolbarStroke.addEventListener('change', () => {
  ctx.strokeStyle = toolbarStroke.value;
});

toolbarLineWidth.addEventListener('change', () => {
  ctx.lineWidth = toolbarLineWidth.value;
});

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;
});

window.addEventListener('mouseup', () => {
  isDrawing = false;
});