'use strict';
$(function() {
	$('.owl-block').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#owl-next"></use></svg> '],
		nav: true,
		
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:1,
				margin: 0,
				dots: false
			},
			570 : {
				items:3,
			},
			768 : {dots: true},
			980 : {
				items:3,
			},
			1400 : {
				items:4,
			}
		}
	});	
});