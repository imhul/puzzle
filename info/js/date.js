// Дата и время

var now = new Date();

var birthday = new Date('December 17, 1995 03:24:00');

var date1 = new Date(4564651321); // c 1 января 1970 года
var date2 = new Date(2016, 2, 4, 19, 52, 30, 999); // Месяци нумеруются от 0, как массивы

console.log(now.getFullYear()); // текущий год
console.log(now.setFullYear(1999, 4, 29)); // change year, month, day
console.log(now.getMonth(0)); // текущий месяц
console.log(now.setMonth(0)); // изменить текущий месяц
console.log(now.getDate(0)); // текущее число месяца
console.log(now.setDate(0)); // изменить текущее число месяца
console.log(now.getDay(0)); // текущий день недели, от 0(вс)до 6
console.log(now.getHours(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.setHours(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.getMinutes(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.setMinutes(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.getSeconds(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.setSeconds(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.getMilliseconds(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.setMilliseconds(0)); // текущее время(часы, минуты, секунды, милисекунды)
console.log(now.getTime(0)); // текущее время в виде миллисекунд от 1970 г
console.log(now.setTime(0)); // текущее время в виде миллисекунд от 1970 г

console.log(now.timeZoneOffset); // сколько нужно добавить минут, чтобы получилось UTC

console.log(now.getUTCFullYear, now.getUTCMonth, now.getUTCDate);// и т.д. То же самое, только привязка к UTC

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toUTCString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-EN', {weekday: 'long', era: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'long'}));


