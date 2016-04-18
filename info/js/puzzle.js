// Canvas section
function draw() {
  var output = document.querySelector('#canvas');
  if (output.getContext) {
    var context = output.getContext('2d');
  }
}
/////////////////////////
// DRAG-n-DROP section //
/////////////////////////
var puzzles = document.querySelectorAll('.puzzles');

for (var i = 0; i < puzzles.length; i++) {
  bub[i].addEventListener('mousedown', dragStart, false);
}
var dragObject;
var dragOffsetX = 0;
var dragOffsetY = 0;
document.addEventListener('mousemove', drag, false);
document.addEventListener('mouseup', dragEnd, false);
document.addEventListener('selectstart', helper, false);
document.addEventListener('dragstart', helper, false);

function dragStart(event) {
  event = event || window.event;
  dragObject = event.target || event.srcElement;
  dragOffsetX = event.offsetX;
  dragOffsetY = event.offsetY;
}

function drag(event) {
  event = event || window.event;
  if (dragObject) {
    dragObject.style.top = event.pageY - dragOffsetY + 'px'; // pageX и pageY - координаты относительно всей страници, даже если она с прокруткой
    dragObject.style.left = event.pageX - dragOffsetX + 'px';
  }
}

function dragEnd(event) {
  event = event || window.event; // Поддержка IE до 8 включительно
  dragObject = null;
}

function helper(event) { // Функция, отменяющая действия браузера по умолчанию!
  event.preventDefault(); // Для новых браузеров
  return false; // Для всех остальных
}
