$(document).ready(function(){


function showDetail(){
		$(this).find('.hover').velocity("fadeIn", 500);
	}

	function noDetail(){
		$(this).find('.hover').velocity("fadeOut", 500);
	};

	$('.overview-project').mouseenter(showDetail);
	$('.overview-project').mouseleave(noDetail);
	$('.overview-project-rect').mouseenter(showDetail);
	$('.overview-project-rect').mouseleave(noDetail);

}); // document ready