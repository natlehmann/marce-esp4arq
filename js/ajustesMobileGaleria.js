$(function() {
	
	if ($(window).width() <= 568) {
		
		$(".scroll").css("width", $(window).width() + "px");
		$(".scroll").css("height", ($(window).height() - 40) + "px");
		
		$(".galeria").css("width", $(window).width() + "px");
		$(".galeria img").css("width", $(window).width() + "px");
		$(".galeria img").css("height", "auto");
	}
	
});