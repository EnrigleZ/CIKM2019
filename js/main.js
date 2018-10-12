jQuery(document).ready(function($) {
   'use strict';

	// var windowHeight = $(window).height();
	// var windowWidth = $(window).width();

	// Nav

	$("a.dropdown-toggle").click(function(e) {
		$('.menu').addClass("visuallyhidden");

		if (!$(this).parent().hasClass('open')) {
			$(this).parent().children('.menu').removeClass("visuallyhidden");
		} else {
		 	$(this).parent().children('.menu').addClass("visuallyhidden");	
		}
	});
    $(".menubutton").click(function(e) {
    	if ($('.menu').hasClass("visuallyhidden")) {
			$('.menu').removeClass("visuallyhidden");
			$('.menu-icon').addClass("close");
		} else {
			$('.menu').addClass("visuallyhidden");
			$('.menu-icon').removeClass("close");
		}
    });

   
	// Nav

	// Works
	$(".work-item").hover(function(e){
		$(this).children('.work-item-inside').addClass("visuallyshowed");
	}, function(){ 
		$(this).children('.work-item-inside').removeClass("visuallyshowed");
	});
	// Works

	// Skrollr · Mobile NONE
	// if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	//     skrollr.init({
	// 		beforerender: function(data) {
	// 			return data.curTop > data.lastTop;
	// 		}        
        	
	//     });
	// }
	// Skrollr

});


$(window).load(function() {

	fixSizes();
	$(".loader").delay(500).fadeOut('slow');
	$("body").css("overflow", "auto");
	$(".home-title").removeClass("jiji");
	$(".menu-icon").removeClass("jiji");
	
});


$(window).resize(function() {
	fixSizes();
});

function fixSizes() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$("#home").css('height', windowHeight);
	$(".home-title").each(function() {
		$(this).css('padding-top', ($(this).parent().height() - $(this).height()) / 2);
	});
	$(".work-item-inside-content").each(function() {
		$(this).css('margin-top', ($(this).parent().height() - $(this).height()) / 2);
	});
}