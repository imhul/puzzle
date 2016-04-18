// 4.2. Задан массив, содержащий несколько нулевых элементов. Сжать его, выбросив эти элементы.

var origin = [, 1, 8, 0, , 3, 6];
	var result = [];
	for (var i = 0; i < origin.length; i++) {
	    if(i in origin) {
	        result.push(origin[i]);
	    }
	}


document.write('origin = ' + origin + '<br>result = ' + result);