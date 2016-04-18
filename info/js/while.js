var i = 0;
var num = +prompt('How much?', 10);
var stroka = '';

while(i<=num) {
	stroka += '<p>text'+i+'</p>';
	i++; //i=i+1 
}

document.write(stroka);
