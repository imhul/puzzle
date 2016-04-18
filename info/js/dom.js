// как разбить DOM-Element на части и обернуть в другой элемент http://jsbin.com/fekufeziya/edit?js,output

// var p = document.getElementById('para1');
// var txt = p.textContent;
// var word = 'minus';
// var position = txt.indexOf(word);
// var secondPart = p.firstChild.splitText(position);
// secondPart.splitText(word.length);

// var strong = document.createElement('strong');
// p.replaceChild(strong, secondPart);
// strong.appendChild(secondPart);

function checkAge() {
  var name = document.getElementById('username').value;
  var age = +document.getElementById('userage').value;
  var output = document.querySelector('output');
  if (age >= 18) {
    output.classList.remove('rejected');
    output.classList.add('accepted');
    output.innerText = 'Hi, ' + name;
  } else {
    output.classList.remove('accepted');
    output.classList.add('rejected');
    output.innerText = 'Get lost, ' + name;
  }
}

var btn = document.getElementsByName('enterBtn')[0];
btn.addEventListener('click', checkAge, false);