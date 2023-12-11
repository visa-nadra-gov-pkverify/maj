$(document).ready(function(){
	$(".clear-field").each(function() {
		$(this).val("");
	})
	
	$(".toggle-password").parent("button").click(function() {

		$(this).find(".toggle-password").toggleClass("fa-eye-slash fa-eye");
		var input = $($(this).find(".toggle-password").attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
	
});



