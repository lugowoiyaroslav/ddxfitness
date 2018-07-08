$(document).ready(function () {

	$(".promo__block-img").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	fade: true,
	autoplay: true,
	arrows: false
	});
	$(".slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	fade: true,
	arrows: false,
	asNavFor: '.photo__text'
	});
	$(".photo__text").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider',
	focusOnSelect: true,
	arrows: false,
	variableWidth: true,
	responsive: [
	{
				breakpoint: 991,
				settings: 'unslick'
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					focusOnSelect: true,
	arrows: false,
	variableWidth: true
				}
			}
		]
	});

	$('.photo__text .slick-slide').removeClass('slick-active');
	$('.photo__text .slick-slide').eq(0).addClass('slick-active');
	$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var mySlideNumber = nextSlide;
		$('.photo__text .slick-slide').removeClass('slick-active');
		$('.photo__text .slick-slide').eq(mySlideNumber).addClass('slick-active');
	});
	$('.map img').on('touchstart', function() {
		$(this).css('left','auto')
	});
	$('.schedule__nav>ul>li>a').click(function () {
		$(this).toggleClass('open');
		$(this).next().fadeToggle( "slow", "linear" );
		$('.dropdown').not($(this).next('.dropdown')).fadeOut( "slow", "linear" );
		$('.open').not($(this)).removeClass('open');
		return false;
	});
	
	$('.add__calendar>.open__link').click(function () {
		$(this).next().fadeToggle( "slow", "linear");
		$('.opened__link-add-calendar').not($(this).next('.opened__link-add-calendar')).fadeOut( "slow", "linear" );
		return false;
	});
	
	$(".tooday").prev().addClass('next-day');

	var tabs = $('#tabs');
	$('.about__tab-content > .tab_content', tabs).each(function (i) {
		if (i != 0) $(this).fadeOut(0);
	});
	tabs.on('click', '.tabs li.tab a', function (e) {
		e.preventDefault();
		var tabId = $(this).attr('href');
		$('.tabs li.tab a', tabs).removeClass();
		$(this).addClass('active');
		$('.about__tab-content > .tab_content', tabs).fadeOut(0);
		$(tabId).fadeIn();
	});
	$(".faq-content> a").on("click", function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.faq-content p').slideUp(200);
		} else {
			$(".faq-content> a").removeClass("active");
			$(this).addClass("active");
			$(this).parents('.faq-content').addClass("active");
			$('.faq-content p').slideUp(200);
			$(this).siblings('.faq-content p').slideDown(200);
			return false;
		}
	});
	$(".faq-content>a").on("click", function () {
		$('.faq-club>.faq-content').not($(this).parents('.faq-content')).removeClass('active');
	});
	$("body").on("click","a.ankor", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href');
		$(id).css( "display", "flex" );
		$('body').addClass('scroll');
	});
	
	$(".close-popup").click(function () {
		$('.popup-overlay').css( "display", "none" );
		$('body').removeClass('scroll');
		return false;
	});
	$('.menu__mob').click(function () {
		$('.header__block-top').toggleClass('header__mob');
		$('.menu').toggleClass('menu__open');
		return false;
	});

	if ($(window).width() < 767) {
		$('.card-description > .online-trainers').each(function() {
			$(this).parents('.trainers__main-card').children('.card-img').append(this);
		});
		$('.trainers__main-menu>ul>li.current').click(function () {
			$(this).toggleClass("drop-close");
			$(this).siblings("li").toggle();
			return false;
		});
		$(".schedule__nav > ul").prepend('<li class="open-filter"><a href="#">Фильтры</a></li>');
		$('.schedule__nav>ul>li.open-filter').click(function () {
			$(this).toggleClass("drop-close");
			$(this).siblings("li").toggle();
			return false;
		});
		$('.schedule__week-nav>a').click(function () {
			$(this).siblings("a").removeClass("active");
			$(this).addClass("active");
			return false;
		});
		$('.schedule__week-nav>a:eq(0)').click(function () {
			$('.schedule__week-mob2>.schedule__days').removeClass("tooday");
			$('.schedule__week-mob2>.schedule__days:eq(1)').addClass("tooday");
			return false;
		});
		$('.schedule__week-nav>a:eq(1)').click(function () {
			$('.schedule__week-mob2>.schedule__days').removeClass("tooday");
			$('.schedule__week-mob2>.schedule__days:eq(2)').addClass("tooday");
			return false;
		});
		$('.schedule__week-nav>a:eq(2)').click(function () {
			$('.schedule__week-mob2>.schedule__days').removeClass("tooday");
			$('.schedule__week-mob2>.schedule__days:eq(3)').addClass("tooday");
			return false;
		});
		$('.schedule__week-nav>a:eq(3)').click(function () {
			$('.schedule__week-mob2>.schedule__days').removeClass("tooday");
			$('.schedule__week-mob2>.schedule__days:eq(4)').addClass("tooday");
			return false;
		});
		$('.schedule__week-nav>a:eq(4)').click(function () {
			$('.schedule__week-mob2>.schedule__days').removeClass("tooday");
			$('.schedule__week-mob2>.schedule__days:eq(5)').addClass("tooday");
			return false;
		});
		$('.schedule__week-nav>a:eq(5)').click(function () {
			$('.schedule__week-mob2>.schedule__days').removeClass("tooday");
			$('.schedule__week-mob2>.schedule__days:eq(6)').addClass("tooday");
			return false;
		});
		$('.schedule__week-nav>a:eq(6)').click(function () {
			$('.schedule__week-mob2>.schedule__days').removeClass("tooday");
			$('.schedule__week-mob2>.schedule__days:eq(7)').addClass("tooday");
			return false;
		});
	}

	if ($(window).width() < 992) {
		$(".logo-mywell").clone().prependTo(".menu");
		$('.schedule__week').wrap('<div class="schedule__week-wrap"></div>');
	}

	if ($(window).width() < 1280) {
		$(".payment__left-final button").appendTo(".payment__right");
	}
	$(".subscription__plan").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 1,
			autoplay: false,
			variableWidth: true,
			centerMode: true,
			centerPadding: '100px',
			arrows: true,
			nextArrow: '.slider__aboniment-nav-next',
			prevArrow: '.slider__aboniment-nav-prev',
			responsive: [
			{
				breakpoint: 2000,
				settings: 'unslick'
			},
			{
				breakpoint: 721,
				settings: {
					slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 1,
			autoplay: false,
			variableWidth: true,
			centerMode: true,
			centerPadding: '100px',
			arrows: true,
			nextArrow: '.slider__aboniment-nav-next',
			prevArrow: '.slider__aboniment-nav-prev'
				}
			}
		]
		});
	$(".subscription__description-img").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			variableWidth: true,
			arrows: true,
			nextArrow: '.slider__br-nav-next',
			prevArrow: '.slider__br-nav-prev',
			responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			variableWidth: true,
			arrows: true,
			nextArrow: '.slider__br-nav-next',
			prevArrow: '.slider__br-nav-prev',
				}
			},
			{
				breakpoint: 1920,
				settings: 'unslick'
			}
		]
		});
	$(window).on('orientationchange', function() {
		$('.subscription__description-img').slick("getSlick").refresh();
		$('.photo__text').slick("getSlick").refresh();
	});
	var userAgent, ieReg, ie;
	userAgent = window.navigator.userAgent;
	ieReg = /msie|Trident.*rv[ :]*11\./gi;
	ie = ieReg.test(userAgent);

if(ie) {
	$(".slider__item").each(function () {
		var $container = $(this),
		imgUrl = $container.find("img").prop("src");
	if (imgUrl) {
		$container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
	}
	});
}

$(".phone-val").mask("+7 (999) 999-9999");
});

