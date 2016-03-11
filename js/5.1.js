// 5.1. Создать объект "Пользователь" с полями имя, фамилия, год рождения и методами 
// sayName() - выводит фамилию и имя, 
// sayAge() - выводит возраст, 
// changeName(name, surname) - меняет имя на name, фамилию на surname.

var user = {
    name: 'Имя',
    surname: 'Фамилия',
    age: 'Возраст',
    sayName: function() {
        document.write(user.name+' ');
    },
    sayAge: function() {
        document.write(user.age+'<br>');
    },
    changeName: function(name, surname) {
        user.name = name;
        user.surname = surname;
        document.write(name + ' ' + surname);
    }
};


        var newName = prompt('Введите новое имя');
        var newSurname = prompt('Введите новую фамилию');

user.sayName();
user.sayAge();
user.changeName(newName, newSurname);
