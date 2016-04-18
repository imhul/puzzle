do {
    var num = prompt('Впишите вашу температуру в виде целого числа', 36);
    var bool = isNaN(num);
if(num < 35) {
    alert('Вы труп!');
} else if(num > 35 && num < 37){
    alert('Вы здоровы!');
} else if(num > 37 && num < 40) {
    alert('Вы больны!');
} else if(num > 40 && num < 42) {
    alert('Вы в коме!');
} else if(num > 42) {
    alert('Вы горите!');
} }
while(bool===true); 