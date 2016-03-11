var fibonacci1 = 1;
var fibonacci2 = 1;
 
var n = prompt('Значение какого элемента ряда Фибоначчи вы хотите узнать?', 77);
n = parseInt(n);
var i = 2;
while (i < n) {
    var fibonacci = fibonacci2 + fibonacci1;
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci;
    i += 1;
}
document.write('<h1 style="color:#666;"><span style="color:#888;">Значение: </span>'+fibonacci+'</h1>');