// 4.1. Перестановка элементов одномерного массива (первый с последним, второй с предпоследним и т.д.)

var mas = ['a','b','c','d','e','f'];

for(var j=0; j<mas.length; j++) {
	  document.write(mas[j]);
}

document.write('<br>');
    
var a = mas.reverse();

for(var i=0; i<a.length; i++) {
	  document.write(a[i]);
}