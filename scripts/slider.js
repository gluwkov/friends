// слайдер блока partners
$(document).ready(function () {
	$('.slider-min').slick({
		infinite: false,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="./images/button/arrow-l.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./images/button/arrow-r.svg"></button>',
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

	// слайдер блока promo, friends
	$('.slider').slick({
		slidesToShow: 1,
		speed: 900,
		autoplay: true,
		autoplaySpeed: 11000,
		dots: true,
		fade: true,
		dotsClass: 'slick-dots',
		prevArrow: '<button type="button" class="slick-prev"><img src="./images/button/arrow-l.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./images/button/arrow-r.svg"></button>',
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
});

// слайдер блока blog
$(window).on('load resize', function () {
	if ($(window).width() < 769) {
		$('.blog__cards:not(.slick-initialized)').slick({
			speed: 1100,
			autoplay: true,
			autoplaySpeed: 13000,
			slidesToShow: 1,
			arrows: false,
			dots: true,
			dotsClass: 'slick-dots',
		});
	} else {
		$(".blog__cards.slick-initialized").slick("unslick");
	}
});

// скрол для кнопки из слайдера в блок programs
$(function () {
	$("a[href='#scroll-programs']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top }, 1500);
		return false;
	});
});

