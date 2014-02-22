$( window ).load(function() {
	
	if ($(window).width() <= 568) {
		var altoImagen = $(window).height() - 50 + 40 - 42 * 6;
		$("#contenidoHome").css("height", altoImagen  + "px");
		
		
		$("#slideShowImages").slidesjs({
	        width: $(window).width(),
	        height: altoImagen,
	        navigation: {
	            active: false,
	            effect: "fade"
	        },
	        pagination: {
	            active: false,
	            effect: "fade"
	        },
	        play: {
	            active: false,
	            effect: "fade",
	            interval: 2000,
	            auto: true,
	            swap: true,
	            pauseOnHover: false,
	            restartDelay: 2500
	        },
	        effect: {
	            fade: {
	              speed: 1200
	            }
	        }
      });
		
		
	if ( $('#slideShowImages .slidesjs-container').height() == 0) {
		$('#slideShowImages .slidesjs-container').css("height", altoImagen + "px");
	}
	
	var anchoPantalla = $(window).width();
	var nuevoAncho = anchoPantalla * 1.6;
	
	if ( $('#slideShowImages .slidesjs-container').width() == 0) {
		$('#slideShowImages .slidesjs-container').css("width", nuevoAncho + "px");
		$('#slideShowImages .slidesjs-container').css("left", 
				((nuevoAncho - anchoPantalla) / 2) * (-1) + "px");
	}
	
	if ( $('#slideShowImages .slidesjs-control').height() == 0) {
		$('#slideShowImages .slidesjs-control').css("height", altoImagen + "px");
	}
	
	if ( $('#slideShowImages .slidesjs-control').width() == 0) {
		$('#slideShowImages .slidesjs-control').css("width", $(window).width() * 1.6 + "px");
	}
	
	
	} else {
		$("#slideShowImages").slidesjs({
	        width: $("#contenidoHome").width(),
	        height: $("#contenidoHome").height(),
	        navigation: {
	            active: false,
	            effect: "fade"
	        },
	        pagination: {
	            active: false,
	            effect: "fade"
	        },
	        play: {
	            active: false,
	            effect: "fade",
	            interval: 2000,
	            auto: true,
	            swap: true,
	            pauseOnHover: false,
	            restartDelay: 2500
	        },
	        effect: {
	            fade: {
	              speed: 1200
	            }
	        }
      });
	}
});