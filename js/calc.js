var input = document.getElementById('input');

// 0-9
document.getElementsByName('btnOne')[0].addEventListener('click', 
function(){input.value += '1';}, false);

document.getElementsByName('btnTwo')[0].addEventListener('click', 
function(){input.value += '2';}, false);

document.getElementsByName('btnThree')[0].addEventListener('click', 
function(){input.value += '3';}, false);

document.getElementsByName('btnFour')[0].addEventListener('click', 
function(){input.value += '4';}, false);

document.getElementsByName('btnFive')[0].addEventListener('click', 
function(){input.value += '5';}, false);

document.getElementsByName('btnSix')[0].addEventListener('click', 
function(){input.value +='6';}, false);

document.getElementsByName('btnSeven')[0].addEventListener('click', 
function(){input.value += '7';}, false);

document.getElementsByName('btnEight')[0].addEventListener('click', 
function(){input.value += '8';}, false);

document.getElementsByName('btnNine')[0].addEventListener('click', 
function(){input.value += '9';}, false);

document.getElementsByName('btnZero')[0].addEventListener('click', 
function(){input.value += '0';}, false);

// C
document.getElementsByName('btnClear')[0].addEventListener('click', 
function(){input.value = '';}, false);

// + - / * % 
document.getElementsByName('btnDivide')[0].addEventListener('click', 
function(){
	equal();
	operator = '/';
	input.value = '';
	}, false);

document.getElementsByName('btnPercent')[0].addEventListener('click', 
function(){
	equal();
	operator = '%';
	input.value = '';
	}, false);

document.getElementsByName('btnMinus')[0].addEventListener('click', 
function(){
	equal();
	operator = '-';
	input.value = '';
	}, false);

document.getElementsByName('btnMultiply')[0].addEventListener('click', 
function(){
	equal();
	operator = '*';
	input.value = '';
	}, false);

document.getElementsByName('btnPlus')[0].addEventListener('click', 
function(){
	equal();
	operator = '+';
	input.value = '';
	}, false);

// =
var first = 0;
var second, operator;

document.getElementsByName('btnEquals')[0].addEventListener('click', equal, false);

function equal(){
	second = +input.value;
	if(!operator) {
		return;
	}
	switch(operator) {
		case '+': input.value = first+second; break;
		case '-': input.value = first-second; break;
		case '*': input.value = first*second; break;
		case '/': input.value = first/second; break;
		case '%': input.value = (first*100)/second; break;
		default: break;
	}
	first = 0;
	second = '';
	operator = '';
}
	