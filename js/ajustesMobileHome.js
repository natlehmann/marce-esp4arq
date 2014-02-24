$( window ).load(function() {
	
	if ($(window).width() <= 568) {
		
		$("#contenidoHome").css("height", $(window).height() + "px");
		
		$("#slideShowImages img").hide();
		
//		$("#slideShowImages img").css("width", $(window).width() + "px");
//		$("#slideShowImages img").css("height", "auto");
//		$("#slideShowImages img").css("top", "-5000px");

		initSlider( 1, 1, function(){
			
			$(".slidesjs-control").css("width", $(window).width() + "px");
    		$(".slidesjs-control").css("height", "180px");
    		
    		$(".slidesjs-container").css("width", $(window).width() + "px");
    		$(".slidesjs-container").css("height", "180px");
    		
    		$("#slideShowImages").css("margin-top", "0px");
    		
    		var altoItems = ($(window).height() - 60 - 180) / 6;
    		$(".menuHomeMobile .menu-item").css("height", altoItems + "px");
    		$(".menuHomeMobile .menu-item a").css("line-height", altoItems + "px");
		} );
	
	
	} else {
		
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