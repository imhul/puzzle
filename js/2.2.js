var str = '<table style="color:#888;border: 1px solid #888;">';
var a = prompt('Введите количество строк', 5);
var b = prompt('Введите количество столбцов', 5);

for (var i=1; i<=a; i++) {
  str += '<tr>';
  for (var j=1; j<=b; j++) {
      if((i+j)%2===0) {
          str += '<td style="background-color:#8AB32D; padding:5px;">Строка ' + i + ', столбец ' + j + '</td>';
      } else {
    str += '<td>Строка ' + i + ', столбец ' + j + '</td>';
      }
  }
  str += '</tr>';
}
str += '</table><br><br>';

document.write(str);

