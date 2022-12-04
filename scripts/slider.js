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
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
					arrows: false
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
			breakpoint: 850,
			settings: {
				arrows: false,
				fade: false,
			}
		},
	]
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.blog__cards:not(.slick-initialized)').slick({
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			dotsClass: 'slick-dots',
    });
  } else {
    $(".blog__cards.slick-initialized").slick("unslick");
  }
});
