// Создание пустого массива

// var mas = new Array(); // Непростой способ создания массива

// var mas = []; // Простой способ создания массива

// var mas = new Array(5); // Новый массив, который будет состоять из пяти элементов var mas = [undefined, ...]

var mas = ['text', -45.34, false, [1,2,3,4,5], 'abcde'];
console.log(mas[0]);
console.log(mas.length); // Количество элементов массива
console.log(mas[3][1]); // Обращение в элементу вложенного массива
console.log('Длинна массива'+ mas.length); // Изменение кол-ва элементов (длинны) массива
mas.length = 100;
console.log(mas[0], mas[10], mas[99]);
mas[9] = 234;

// Вывод отдельно всех элементов массива
function printMas(arr) {
	for(i=0; i<arr.length; i++) {
		if(arr[i] instantof Array) {
		
		} else {
			
		}
	console.log('Елемент '+ i +' равен '+arr[i]);
	}
}
printMas(mas);

// Операция instantof возвращает true если объект был создан с помощью указанного конструктора

// Методы массивов:
