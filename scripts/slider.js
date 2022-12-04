$(document).ready(function () {
	$('.partners__slider').slick({
		infinite: false,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/button/arrow-l.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/button/arrow-r.svg"></button>',
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 810,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 790,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			},
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			}
		]
	});
});

$('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	speed: 1100,
	autoplay: true,
	autoplaySpeed: 11000,
	dots: true,
	fade: true,
	centerMode: true,
	dotsClass: 'slick-dots',
	prevArrow: '<button type="button" class="slick-prev"><img src="../images/button/arrow-l.svg"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="../images/button/arrow-r.svg"></button>',
	responsive: [
		{
			breakpoint: 800,
			settings: {
				arrows: false,
			}
		},
	]
});

/* $(window).resize(function () {
	if (window.matchMedia("(max-width: 766px)").matches) {
		$('.blog__cards').slick({
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			dotsClass: 'slick-dots',
		});
	}
}); */
