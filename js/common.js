jQuery(function($) {
	$(document).ready(function() {

		//Mobile menu
		$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
			if ($(".header__menu").hasClass('active')) {
				$(".header__menu").removeClass('active');
				document.body.style.overflow = 'visible';
			} else {
				$(".header__menu").addClass('active');
				document.body.style.overflow = 'hidden'; 
			}
		});
		$(".header__menu a").click(function() {
			$(".header__menu").removeClass('active');
			$(".sandwich").toggleClass("active");
			document.body.style.overflow = 'visible';
		});

		//Anchor scroll
		$(".main-screen__scroll-down").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
			return false;
		});

		//Animations
		$(".main-screen__content .h1").animated("fadeInDown");
		$(".blocks__item").animated("fadeIn");
		$(".btn").animated("fadeInDown");

		//Form inputs
		$('.input-group p').click(function() {
			if(!$(this).hasClass('active')) {
				$(this).addClass('active');
				$(this).siblings('input').focus();
				$(this).siblings('textarea').focus();
			}
		});
		$('.input-group input, .input-group textarea').focus(function() {
			$(this).siblings('p').addClass('active');
		});
		$('.input-group input, .input-group textarea').focusout(function() {
			$(this).siblings('p').removeClass('active');
		});

		//Map
		$('.map-toggle').click(function() {
			$(this).find('.tumbler').toggleClass('active');
			$('.singapore-map, .vietnam-map').toggleClass('active');
		});
	});	
});
