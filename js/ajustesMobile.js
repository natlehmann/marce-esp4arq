$( window ).load(function() {
	
	var altoContenido = $("#contenido").css("height");
	
	if ($(window).width() <= 568) {
		$("#contenido").css("height", $(window).height() - 35 + "px");
	}

	$(window).resize(
		function() {
			if ($(window).width() > 568) {
				$("#contenido").css("height", altoContenido);

			} else {
				$("#contenido").css("height", $(window).height() - 35 + "px");
			}

	});
});