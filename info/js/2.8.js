// 2.8 Используя циклы и метод String.charCodeAt() выяснить, есть ли во введенной пользователем строке латинские буквы.

var str = prompt('Введите слово');
str = str.toUpperCase();

for(var i = 0; i <= str.length; i++) {
  
  var charCode = str.charCodeAt(i);

  if(charCode >= 65 && charCode <= 90) {
      document.write('Есть латинские символы');
  } else {
      document.write('Нет латинских символов');
  }
}