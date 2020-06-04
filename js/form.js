$(document).ready(function() {					   
	$('#contactForm').submit(function(event) {
		event.preventDefault();
		
	// Form Validation
	var rhino_name = $('#namezzmphchw').val();
    var rhino_email = $('#emailzoomablki').val();
    var rhino_message = $('#messagefqotvmxzk').val();
	
    $(".error").remove();

    if (rhino_name.length < 1) {
      $('#namezzmphchw').after('<span class="error alert-error">This field is required!</span>');
	  $('#namezzmphchw').focus();
	  return false;
    }
	if (rhino_name.length < 2) {
      $('#namezzmphchw').after('<span class="error alert-error">This field must be at least 2 characters!</span>');
	  $('#namezzmphchw').focus();
	  return false;
    }
    if (rhino_email.length < 7) {
      $('#emailzoomablki').after('<span class="error alert-error">This field must be at least 7 characters!</span>');
	  $('#emailzoomablki').focus();
	 return false;
	} 
    if (rhino_message.length < 10) {
      $('#messagefqotvmxzk').after('<span class="error alert-error">Message must be at least 10 characters long!</span>');
	  $('#messagefqotvmxzk').focus();
	  return false;
    }	
	if (rhino_name.match(/^\s*$/)) {
   	 $('#namezzmphchw').after('<span class="error alert-error">No white spaces allowed in this field!</span>');
	 $('#namezzmphchw').focus();
	 return false;
	}
	if (rhino_email.match(/^\s*$/)) {
   	 $('#emailzoomablki').after('<span class="error alert-error">No white spaces allowed in this field!</span>');
	 $('#emailzoomablki').focus();
	 return false;
	}
	if (rhino_message.match(/^\s*$/)) {
   	 $('#messagefqotvmxzk').after('<span class="error alert-error">No white spaces allowed in this field!</span>');
	 $('#messagefqotvmxzk').focus();
	 return false;
	}
	if ($('input#name').val().length != 0) {
      return false;
    } 
	if ($('input#email').val().length != 0) {
      return false;
    } 

		var formData = $(this).serialize();
		
		$.ajax({
            type        : 'POST', 
			url         : "../libs/phpmail/mailer.php",
            data        : formData,
			processData : false,
            dataType    : 'html',
			success		: function() {
					$('#contactForm').hide(1000);
					$('#success_message').show(1000);
			}
		});
 
	});	
	return false;
});