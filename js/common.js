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

		
	});
});
