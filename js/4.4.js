// 4.4. Пусть дан квадратный двумерный массив целых чисел A[n][n]. 
// Необходимо элементам, находящимся на главной диагонали проходящей из левого верхнего угла в правый нижний 
// (то есть тем элементам A[i][j], для которых i==j) присвоить значение 1, 
// элементам, находящимся выше главной диагонали – значение 0, элементам, находящимся ниже главной диагонали – значение 2. 
// То есть получить такой массив (пример для n==4):
// 1 0 0 0
// 2 1 0 0
// 2 2 1 0
// 2 2 2 1

var mass = [[2,4,1,6],
            [7,8,9,2],
            [3,6,2,9],
            [3,5,3,7]];

for(var i=0; i<mass.length; i++) { // Вычесляем координаты встроенных массивов
    for(var j=0; j<mass[i].length; j++) { // Вычесляем координаты элементов внутри встроенных массивов
    //  document.write('i(Координата встроеннего массива)='+i+', '+'j(Координата элемента внутри встроеннего массива)='+j+'<br>');
        if(i===j) { // Если элемент находится на первой диагонали массива
            mass[i][j] = 1; // 
        } else if(i<j) {
            mass[i][j] = 0;
        } else if(i>j) {
            mass[i][j] = 2;
        }
    }
}
function print(mass) {
    for(var a=0; a<mass.length; a++) {
        document.write(mass[a]+'<br>');
    }
}

print(mass);

