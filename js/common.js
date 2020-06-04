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
			if($(this).val().length == 0) {
				$(this).siblings('p').removeClass('active');
			}
		});

		//Map
		$('.map-toggle').click(function() {
			$(this).find('.tumbler').toggleClass('active');
			$('.singapore-map, .vietnam-map').toggleClass('active');
		});

		//Validate
		$("form button[type=submit]").on("click", validate);
 
		// Validate email
		function validateEmail(email) {
			let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			return re.test(String(email).toLowerCase());
		}
		function validateName(name) {
			if(name.length < 1 || name.length > 40) {
				return false;
			}
			let nameArr = name.split('');
			for(let i = 0; i < nameArr.length; i++) {
				if(nameArr[i] == ' ') {
					return false;
				}
			}
			return true;
		}
		
		// send form
		// function sendForm() {
		// 	$(".alert-error").text("Form sending").fadeIn();
		// }
		
		// validate email and send form after success validation
		function validate() {
			let email = $(".email").val(),
				name = $(".name").val(),
				mess = $(".message").val(),
				emailError = $(".input-group__email .alert-error"),
				nameError = $(".input-group__name .alert-error"),
				messError = $(".input-group__message .alert-error");

			emailError.text("");
			nameError.text("");
			messError.text("");
		
			if (validateEmail(email)) {
				emailError.fadeOut();
			} else {
				emailError.fadeIn();
				emailError.text("Field is not valid");
				
			}

			if (validateName(name)) {
				nameError.fadeOut();
			} else {
				nameError.fadeIn();
				nameError.text("Field is not valid");
			}

			if(mess.length < 5 || mess.length > 500) {
				messError.fadeIn();
				messError.text("Field is not valid");
				
			} else {
				messError.fadeOut();
			}

			return false;
		}
	});	
});
