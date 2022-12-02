$(document).ready(function () {
	$('.partners__slider').slick({
		infinite: false,
		speed: 400,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/button/arrow-l.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/button/arrow-r.svg"></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 888,
				settings: {
					slidesToShow: 4,
					arrows: false
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 4,
					arrows: false
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 4,
					arrows: false
				}
			},
			{
				breakpoint: 410,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			}
		]
	});
});
