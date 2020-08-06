$(document).ready(function(){


$('.landing-link--me').hover(function(){
		console.log("helllooooo");
	    $('.label-portrait').css("display", "none");
	    $('.label-me').css("display", "block");
	  }, function() {

	    $('.label-me').css("display", "none");
	    $('.label-portrait').css("display", "block");
	  }
	);


}); // document ready