// Creates Sticky Header finding the header ID, offsetting it from the Y-axis Scroll and adding and removing the fixed class.

var header = document.querySelector('.header');
var origOffsetY = header.offsetTop;

function onScroll(e) {
	
	if (window.scrollY >= origOffsetY) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
}

document.addEventListener('scroll', onScroll);