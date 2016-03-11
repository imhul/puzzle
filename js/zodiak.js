
var month = prompt('Введите месяц вашего рождения в числовом формате');
var day = prompt('Введите день вашего рождения в числовом формате');

if ((day >= 20 && month == 1) || (day < 18 && month == 2)) {
alert('Водолей');
}
else if ((day >= 20 && month == 2) || (day < 18 && month == 3)) {
alert('Рыбы');
}
else if ((day >= 20 && month == 3) || (day < 18 && month == 4)) {
alert('Овен');
}
else if ((day >= 20 && month == 4) || (day < 18 && month == 5)) {
alert('Телец');
}
else if ((day >= 20 && month == 5) || (day < 18 && month == 6)) {
alert('Близнецы');
}
else if ((day >= 20 && month == 6) || (day < 18 && month == 7)) {
alert('Рак');
}
else if ((day >= 20 && month == 7) || (day < 18 && month == 8)) {
alert('Лев');
}
else if ((day >= 20 && month == 8) || (day < 18 && month == 9)) {
alert('Дева');
}
else if ((day >= 20 && month == 9) || (day < 18 && month == 10)) {
alert('Весы');
}
else if ((day >= 20 && month == 10) || (day < 18 && month == 11)) {
alert('Скорпион');
}
else if ((day >= 20 && month == 11) || (day < 18 && month == 12)) {
alert('Стрелец');
}
else {
alert('Козерог');
}
