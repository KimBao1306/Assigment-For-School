window.onscroll = function() {scrollFunction()};

var element1 = document.documentElement
var element2 = document.body;

var btnTop = document.getElementById('scroll-to-top');
var headerFixed = document.getElementById('header-bottom-fixed');
// var btnBottom = document.getElementById('scroll-to-bottom');

btnTop.addEventListener('click', toTop);
// btnBottom.addEventListener('click', toBottom);


function scrollFunction(){
	if(element1.scrollTop > 60 || element2.scrollTop > 60){
		btnTop.style.display = 'block';
		headerFixed.classList.add('header-bottom-fixed')
	} else {
		btnTop.style.display = 'none';
		headerFixed.classList.remove('header-bottom-fixed')
	}
}

function toTop(){
	element1.scrollTop = 0;
	element2.scrollTop = 0;
}

// function toBottom(){
// 	document.body.scrollTop = document.body.scrollHeight;
// 	document.documentElement.scrollTop = document.documentElement.scrollHeight;
// }





