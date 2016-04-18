var number = +prompt('введите число');
var system = +prompt('в какую систему счисления');
var x='';

while (number>system) {
    var ostatok = number%system;
    number= (number-ostatok)/system;
    str=String(ostatok);
    if(str==10){
        str='A';
    }
    if(str==11){
        str='B';
    }
    if(str==12){
        str='C';
    }
    if(str==13){
        str='D';
    }
    if(str==14){
        str='E';
    }
    if(str==15){
        str='F';
    }
    x =str+x;
}
x=String(number)+x;

document.write(x);