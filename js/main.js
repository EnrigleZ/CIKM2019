jQuery(document).ready(function($) {
   'use strict';

	$("a.dropdown-toggle").click(function(e) {
		$('.menu').addClass("visuallyhidden");

		if (!$(this).parent().hasClass('open')) {
			$(this).parent().children('.menu').removeClass("visuallyhidden");
		} else {
		 	$(this).parent().children('.menu').addClass("visuallyhidden");	
		}
	});
	$(".menu ul li a").click(function(e) {
		$('.menu').addClass("visuallyhidden");
	});
	$(".navbar-toggle").click(function(e) {
		$('.menu').addClass("visuallyhidden");
	});
    // $(".menubutton").click(function(e) {
    // 	if ($('.menu').hasClass("visuallyhidden")) {
	// 		$('.menu').removeClass("visuallyhidden");
	// 		$('.menu-icon').addClass("close");
	// 	} else {
	// 		$('.menu').addClass("visuallyhidden");
	// 		$('.menu-icon').removeClass("close");
	// 	}
	// });
	$(".hoveredimage").hover(function(e){
		$(this).children('.imagehover').addClass("visuallyshowed");
	}, function(){ 
		$(this).children('.imagehover').removeClass("visuallyshowed");
	});
});
