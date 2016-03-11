// Возведение в степень

var a = prompt('Введите число', 2);
var b = prompt('Введите множитель', 2);

function pow(a, b) {
	for(var i=0;i<b;i++) {
		var result = (a*a)*i;
	}
	return result;
}
document.write(pow(a,b));