// 3.4. Написать 2 функции. 
// Функция printTableRow(cols) возвращает строку, 
// представляющую собой html-код строки таблицы 
// с заданным количеством ячеек. 
// Функция printTable(rows, cols) возвращает строку, 
// представляющую собой html-код таблицы и использующую внутри первую функцию. 
// С помощью функции printTable вывести на экран 3 таблицы разного размера.

var row = prompt('Введите количество строк');
var col = prompt('Введите количество столбцов');
var str = '<table border="1">';


function getTable(rows, cols) {
        str += document.write('<tr>'+getCols(cols)+'</tr>');
	function getCols(cols) {
            str += document.write('<td><p>Hello World!</p></td>');
        return;
	}
    return;
}

str += getTable(row, col)+'</table>';
document.write(str);

