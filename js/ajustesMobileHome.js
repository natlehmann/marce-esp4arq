$( window ).load(function() {
	
	if ($(window).width() > 568) {
		
		initSlider( $("#contenidoHome").width(), $("#contenidoHome").height(), function(number) {
			// Passes start slide number
		} );
	}
});


function initSlider(imgWidth, imgHeight, loadedCallback) {
	
	$("#slideShowImages").slidesjs({
        width: imgWidth,
        height: imgHeight,
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
        },
        callback: {
            loaded: loadedCallback,
            
            start: function(number) {
              // Passes slide number at start of animation
            },
            complete: function(number) {
              // Passes slide number at end of animation
            }
        }
  });
}