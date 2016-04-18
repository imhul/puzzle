var output = document.querySelector('.output');
var input = document.querySelector('input');
var after;
var before;
var result;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var randomInt = getRandomInt(10, 31);
output.innerText = randomInt;

input.addEventListener('click', fn, false);

function fn() {
    input.value = 'Stop';
    output.innerText = '';
    before = new Date();
    input.addEventListener('click', end, false);
    input.removeEventListener('click', fn, false);
}    

function end() {
        after = new Date();

        result = (after-before)/1000;
        output.innerText = result;
        var test = randomInt-result;
        var win = 0.5;
        if(test < win) {
            output.innerText +=' Ok!';
            } else {
                output.innerText +=' Try again!';
        }
}




