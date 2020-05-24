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

	});
});

$(window).load(function() {

});
