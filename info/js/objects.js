// Создание объектов //

// Обычно функции-конструкторы объектов называют с большой буквы

// function User(name1, age1) {
// 	this.name = name1;
// 	this.age = age1;
// 	this.sayHello = function() {
// 		document.write('Hello! My name is ' + this.name);
// 	}
// 	// return this;
// }

// var users = [];

// users.push(new User('Vasya', 24));
// users.push(new User('Tolya',34));
// users.push(new User('Tanya',12));
// users.forEach(function(user) {
// user.sayHello();
// });

///////////////////////Фабрика объектов///////////////////////////

// function User(name, age) {
// 	user.name = name;
// 	user.age = age;
// 	user.sayHello = function() {
// 		document.write('Hello! My name is ' + this.name);
// 	}
// 	return user;
// }

// var users = [];

// users.push(User('Vasya', 24));
// users.push(User('Tolya',34));
// users.push(User('Tanya',12));
// users.forEach(function(user) {
// user.sayHello();
// });

////////////////////////////////////////////////////////////////////

function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.sayHello = function() {
	document.write('Hello! My name is ' + this.name);
};

User.prototype.sayAge = function() {
	document.write('Hello! My age is ' + this.age);
};

var user1 = new User('Vasya', 24);
var user2 = new User('Tolya',34);
var user3 = new User('Tanya',12);
user1.sayHello();
