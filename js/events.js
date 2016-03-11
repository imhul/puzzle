// Окончание загрузки документа - событие load
window.addEventListener('load',function(){alert('load');},false);

// Событие перед закрытием окна - onbeforeunload
window.onbeforeunload = function() {
	return 'no,no,no))';
};

// событие DOMContentLoaded - окончание загрузки HTML
document.addEventListener('DOMContentLoaded',function(){alert('DOM loaded');},false);

// Ошибка загрузки объекта, например картинки - error
document.addEventListener('error',function(){this.outerHtml = 'error';},false);

// dblclick - событие 'двойной клик'

// contextmenu - событие - появление контекстного меню

// При нажатии кнопки мыши срабатывает три 
// события в таком порядке: mousedown, mouseup, click

// При нажатии кнопки на клавиатуре срабатывает три 
// события в таком порядке: keydown, keyup, keypress

// Наведение курсора мыши mouseover, mouseout - уход курсора с элемента

// Движение курсора мыши mousemove

// События, связанные с формой:

// Событие сброса данных формы - reset

// Событие submit срабатывает перед отправкой формы

// Событие focus срабатывает по готовности формы принимать данные, 
// например при переходе от логина к паролю с помощью кнопки Tab
// !!! ОБРАЩЕНИЕ К ЛЮБОМУ ЭЛЕМЕНТУ ФОРМЫ: form.elements.имя элемента !!!
// Событие blur срабатывает при потере фокуса(focus)

// Событие change срабатывает на элементе формы, когда введено значение, но только при потере фокуса, перед событием blur

// checked - проверка состояния чекбоксов - если стоит галочка, возвращает true и наоборот.

// Свойство selected определяет, выцбрана ли опция элемента select формы.

// ОБЪЕКТ СОБЫТИЕ : 

function handler(event) {event = event || window.event}

// event.type - тип события
// event.currentTarget - с каким элементом произошло событие
// event.target - на каком элементе сработало событие.
// event.clientX - координаты мыши
// event.clientY - координаты мыши
// event.relatedTarget - элемент, с которого ушла мышь
// event.button - какая кнопка вызвала событие

// ВСПЛЫВАНИЕ СОБЫТИЯ : см. тетрадь!

// setTimeout
var timerId = setTimeout(fn, 1000); // Сделает действие fn через 1 секунду один раз

function fn() {
	//...
}

clearTimeout(timerId);

// setInterval

var timerId2 = setInterval(fn2, 1000); // Сделает действие fn2 множество раз с шагом в 1 секунду, пока не остановится,

function fn2() {
	//...
}

clearInterval(timerId2); // встретив э ту строку

//////////////////////////////////


