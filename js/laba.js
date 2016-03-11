function plus(a,b) {
	return a+b;
}
function minus(a,b) {
	return a-b;
}
function multiply(a,b) {
	return a*b;
}
function divid(a,b) {
	return a/b;
}
var process;
function calc() {
	process = prompt('выберите действие: +, -, *, /');
	var a = prompt('введите первое число', 10);
	var b = prompt('введите второе число', 33);

	if(process==='+') {
		document.write(plus(a,b));
	} else if(process==='-') {
		document.write(minus(a,b));
	} else if(process==='*') {
		document.write(multiply(a,b));
	} else if(process==='/') {
		document.write(divid(a,b));
	}
}
do { calc(); }
while(confirm("Again?"));