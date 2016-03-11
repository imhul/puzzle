alert('Конвертер из метров в мм, см, км');
var length = +prompt('Введите длину в метрах\nA: Ответ1\nB: Ответ2');
var convertTo = prompt('Во что перевести метры? Введите мм, см или км.', 'км');
var result;
var error = false;

switch(convertTo) {
	case 'mm': result = length * 1000; break;
	case 'sm': result = length * 100; break;
	case 'km': result = length / 1000; break;
	default: error = true;
}

if(error) {
	alert('Ошибка!');
} else {
	alert(result);
}