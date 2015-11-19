$(document).ready(function() {

	if ($("#newsletter_form").length > 0) {
		$("#newsletter_form").submit(function() {
		
			$("#newsletter_form .warn").remove();
			var fields = $(this).serializeArray();
			
			$.ajax({
				type : 'POST',
				url : '/inc/form.php',
				data : fields,
				dataType : 'json',
				success: function(data) {
					if (data.error) {
						$.each(data.fields, function(k, v) {
							$('.' + k).append('<span class="warn">' + v + '</span>');
							$('.warn').fadeIn(500);
						});
					} else {
						$("#newsletter_form").fadeOut(500, function() {
						
	$(".newsletter_form").hide().html(data.message).fadeIn(500);
						
						});
					}
				},
				error: function(data) {
	$(".newsletter_form").hide().html('<p>Error occurred</p>').fadeIn(500);
				}
			});
			
			return false;
			
		});
	}

});