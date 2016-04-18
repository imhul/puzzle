alert('Конвертер валют');
var sum = +prompt('Введите сумму обмена');
var convertTo = prompt('Введите валюту');
var result;
var error = false;

switch(convertTo) {
	case 'usd': result = sum * 25; break;
	case 'rub': result = sum / 0.3; break;
	case 'eur': result = sum * 29.4; break;
	default: error = true;
}

if(error) {
	alert('Ошибка!');
} else {
	alert(result);
}