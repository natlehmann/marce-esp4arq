$(function() {
	
	if ($(window).width() <= 568) {
		
		$(".bulletGray").show();
		
		$(".contenidoInternoVerde").css("width", $(window).width() + "px");
		$(".contenidoInternoVerde").css("height", ($(window).height() - 40) + "px");
		
		$(".contenidoInternoVerde .descripcionQuienes").css("width", $(window).width() + "px");
		$(".contenidoInternoVerde .descripcionQuienes").css("height", ($(window).height() - 40) + "px");
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