// 3.2. Написать функцию нахождения площади прямоугольника. 
// Ввести данные двух прямоугольников. 
// Вывести прямоугольник, площадь которого больше.

var rectangle1a = prompt('Введите длину первого прямоугольника', 1);
var rectangle1b = prompt('Введите шириину первого прямоугольника', 2);
var rectangle2a = prompt('Введите длину второго прямоугольника', 3);
var rectangle2b = prompt('Введите шириину второго прямоугольника', 4);

function area(a,b) {
	return a * b;
}
if(area(rectangle1a,rectangle1b)>area(rectangle2a,rectangle2b)) {
     document.write('<div style="background-color:#FF4400;width:'+rectangle1a+'px;height:'+rectangle1b+'px;"></div>');
} else {
    document.write('<div style="background-color:#FF4400;width:'+rectangle2a+'px;height:'+rectangle2b+'px;"></div>');
}


