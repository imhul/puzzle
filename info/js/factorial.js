// var factorial = 1;
// var num = prompt('Впишите любое число');
// var i = 1;

// while(i<=num) {
//     factorial *= i;
//     i++;
// }
// document.write('<h1>'+num+'! = '+factorial+'<h1>');

var num = prompt('Впишите любое число');

function f(n) {
  return n ? n * f(n - 1) : 1;
}

document.write(f(num));