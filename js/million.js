alert('Игра "Как стать миллионером"');

var answer1 = 4;
var answer2 = 6;
var answer3 = 8;
var answer4 = 10;
var answer5 = 12;


var question = +prompt('Первый вопрос: сколько будет 2+2?');

if(answer1 === question) {
question = +prompt('Поздравляем! Второй вопрос: сколько будет 3+3?'); 
	if(answer2 === question) {
	question = +prompt('Поздравляем! Третий вопрос: сколько будет 4+4?');
		if(answer3 === question) {
		question = +prompt('Поздравляем! Четвёртый вопрос: сколько будет 5+5?');
			if(answer4 === question) {
			question = +prompt('Поздравляем! Пятый вопрос: сколько будет 6+6?');
				if(answer5 === question) { alert('Поздравляем! Вы стали миллионером!');
				} else {alert('Вы проиграли');}
			} else {alert('Вы проиграли');}
		} else {alert('Вы проиграли');}
	} else {alert('Вы проиграли');}
} else {alert('Вы проиграли');}
