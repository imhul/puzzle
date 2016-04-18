
var num = +prompt('How much?', 10);
var stroka = '';

for (var i=0;i<=num;i++) {
	stroka += '<p>text'+i+'</p>';
}


document.write(stroka);
