// 3.1. Ввести 4 числа. Найти max{min(a, b), min(c, d)}, 
// используя созданную функцию нахождения максимального и минимального из двух чисел.

var a = prompt('Введите первое число', 1);
var b = prompt('Введите второе число', 2);
var c = prompt('Введите третье число', 3);
var d = prompt('Введите четвертое число', 4);

function minMax() {
	var aB = Math.min(a, b);
    var cD = Math.min(c, d);
    return Math.max(aB, cD);
}

document.write(minMax());