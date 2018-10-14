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

   
	// Nav

	// Works
	$(".work-item").hover(function(e){
		$(this).children('.work-item-inside').addClass("visuallyshowed");
	}, function(){ 
		$(this).children('.work-item-inside').removeClass("visuallyshowed");
	});
	

});
