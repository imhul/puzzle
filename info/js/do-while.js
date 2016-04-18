var i = 1;
var num = +prompt('How much?', 10);
var stroka = '';

do {
	stroka += '<p>text'+i+'</p>'; 
	i++;
}
while(i<=num);

document.write(stroka);
