alert('Игра "Как стать миллионером"');

var answer1 = 4;
var answer2 = 6;
var answer3 = 8;
var answer4 = 10;
var answer5 = 12;


var question = +prompt('Первый вопрос: сколько будет 2+2?');

if(answer1 === question) {
var question = +prompt('Поздравляем! Второй вопрос: сколько будет 3+3?'); 
} else {alert('Вы проиграли');}

if(answer2 === question) {
var question = +prompt('Поздравляем! Третий вопрос: сколько будет 4+4?');
} else {alert('Вы проиграли');}

if(answer3 === question) {
var question = +prompt('Поздравляем! Четвёртый вопрос: сколько будет 5+5?');
} else {alert('Вы проиграли');}

if(answer4 === question) {
var question = +prompt('Поздравляем! Пятый вопрос: сколько будет 6+6?');
} else {alert('Вы проиграли');}

if(answer5 === question) { alert('Поздравляем! Вы стали миллионером!');
} else {alert('Вы проиграли');}



//var question1 = +prompt('Первый вопрос: сколько будет 2+2?');
//       if(answer1 === question1) {
//var question2 = +prompt('Поздравляем! Второй вопрос: сколько будет 3+3?'); 
//} else if(answer2 === question2) {
//var question3 = +prompt('Поздравляем! Третий вопрос: сколько будет 4+4?');
//} else if(answer3 === question3) {
//var question4 = +prompt('Поздравляем! Четвёртый вопрос: сколько будет 5+5?');
//} else if(answer4 === question4) {
//var question5 = +prompt('Поздравляем! Пятый вопрос: сколько будет 6+6?');
//} else if(answer5 === question5) { alert('Поздравляем! Вы стали миллионером!');
//} else {alert('Вы проиграли');} 
