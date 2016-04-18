// call(), apply(), bind() http://jsbin.com/xosucozoci/edit?js

var user1 = {
  name: 'Anton',
  age: 25
};
var user2 = {
  name: 'Ivan',
  age: 30
};

function sayHello(prefix, suffix) {
  prefix = prefix || '';
  suffix = suffix || '';
  console.log(prefix + 'My name is ' + this.name + '. I am ' + this.age + '.' + suffix);
}

//sayHello.call(user1, 'Hi! ', ' Bye!');
//sayHello.apply(user1, ['Hi! ', ' Bye!']);

var myFunc = sayHello.bind(user1, 'Hi! ', ' Bye!');
myFunc();