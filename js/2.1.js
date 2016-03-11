var str = '<table style="background-color:#8ab32d;color:#666;border: 1px solid #888;"><tr><td style="width:50%;"><table style="margin:10px 0 10px 10px;background-color:#CDF76F;border: 1px solid #888;">';

for (var i=1; i<=10; i++) {
  str += '<tr>';
  for (var j=1; j<=5; j++) {
    str += '<td style="padding:5px;">'+j+' * '+i+' = '+(j*i)+'</td>';
  }
  str += '</tr>';
}
str += '</table></td>';

document.write(str);

var str2 = '<td style="width:50%;"><table style="margin:10px 10px 10px 0;border: 1px solid #888;background-color:#CDF76F;">';

for (var a=1; a<=10; a++) {
  str2 += '<tr>';
  for (var b=6; b<=10; b++) {
    str2 += '<td style="padding:5px;">'+b+' * '+a+' = '+(b*a)+'</td>';
  }
  str2 += '</tr>';
}
str2 += '</table></td></tr></table>';

document.write(str2);