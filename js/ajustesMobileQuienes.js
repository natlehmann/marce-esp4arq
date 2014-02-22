$(function() {
	
	if ($(window).width() <= 568) {
		$(".bulletGray").show();
	}

	$(window).resize(
		function() {
			if ($(window).width() > 568) {
				$(".bulletGray").hide();

			} else {
				$(".bulletGray").show();
			}

	});
	
});