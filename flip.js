var selectIndex = function(child) {
var nodeList = Array.prototype.slice.call( document.querySelector('.uk-slideshow').children );
    return nodeList.indexOf(child);
    }
    
var children = document.querySelectorAll('.flip-container');
var childrenArr = Array.prototype.slice.call(children);

var handler = function(event, currentSlide, nextSlide) {
    var currentIndex = selectIndex(currentSlide[0]);
    if (currentIndex === 3) {
        var interval = setInterval(function() {
            var _element = childrenArr.shift();
            if (!_element) {
                clearInterval(interval);
                return false;
            }
        _element.classList.toggle('flip');
        }, 200);
    }
};
$('.uk-slideshow').on('show.uk.slideshow', handler);