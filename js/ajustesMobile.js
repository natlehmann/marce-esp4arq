$( window ).load(function() {
	
	var altoContenido = $("#contenedor").css("height");
	
	if ($(window).width() <= 568) {
		$("#contenedor").css("height", $(window).height() + "px");
	}

	$(window).resize(
		function() {
			if ($(window).width() > 568) {
				$("#contenedor").css("height", altoContenido);

			} else {
				$("#contenedor").css("height", $(window).height() + "px");
			}

	});
});