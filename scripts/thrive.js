// On your marks, get set...

$(document).ready(function(){


	// function isMobileDevice() {
 //    	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	// };

	// var checker = isMobileDevice();
	// console.log("checker " + checker);

	// if(checker == true){
	// 	$('first').css("display", "none");
	// 	$('#nav').css("display", "none");
	// 	$('#tiny').css("display", 'block');
	// } else{
	// 	$('#first').css("display", "block");
		
	// 	$('#nav').css("display", "block");
	// }

	$('#tiny').click(function(e){
		$('#tiny').velocity('fadeOut');

			$('#first').velocity("fadeIn", { delay: 605, duration: 1000 });
			$('#nav').velocity("fadeIn", { delay: 605, duration: 1000 });
		// $('#first').css("display", "block");
		
		// $('#nav').css("display", "block");

	});

	$('#etcetera a').click(function(e){
		e.preventDefault();
	});

	$('.thrive-sift a').click(function(e){
		e.preventDefault();
	});

	$('a.pennyStudio').click(function(e){
    	$('html, body').animate({scrollTop:$('#pennyStudio').position().top}, 'slow');
	    return false;
    });

    $('a.wS').click(function(){
		$('html, body').animate({scrollTop:$('#wS').position().top}, 'slow');
	    return false;
    });

    $('a.bier').click(function(){
    	$('html, body').animate({scrollTop:$('#bier').position().top}, 'slow');
	    return false;
    });

    $('a.greetingCards').click(function(){
    	$('html, body').animate({scrollTop:$('#greetingCards').position().top}, 'slow');
	    return false;
    });

    // Card Sifters

    $(".card-sift").on("click", function() {
		// Grab the target page section's ID from the link's (contained within "this") href attribute
		var scrollTargetID = $(this).attr("href");
		console.log("card sift " + scrollTargetID);
		var whichCard = $(scrollTargetID).attr('id');
		console.log("cardsift id " + whichCard);
		cardShift(whichCard);
	});

	function cardShift(fadeToID){
		var previous = $('.cardVis');
		var checkID = previous.attr('id'); //currently visible section
		var newString = fadeToID + "Card";
		if(newString != checkID){
			previous.removeClass('cardVis');
			$('#'+ newString).addClass('cardVis');
			previous.velocity("fadeOut", {duration: 600});
			$('#'+ newString).velocity("fadeIn", { delay: 800, duration: 1000 });
		}
	}

    $(".met-sift").on("click", function() {
		// Grab the target page section's ID from the link's (contained within "this") href attribute
		var scrollTargetID = $(this).attr("href");
		console.log("card sift " + scrollTargetID);
		var whichCard = $(scrollTargetID).attr('id');
		console.log("cardsift id " + whichCard);
		metShift(whichCard);
	});

	function metShift(fadeToID){
		var previous = $('.metVis');
		var checkID = previous.attr('id'); //currently visible section
		var newString = fadeToID + "Card";
		if(newString != checkID){
			previous.removeClass('metVis');
			$('#'+ newString).addClass('metVis');
			previous.velocity("fadeOut", {duration: 600});
			$('#'+ newString).velocity("fadeIn", { delay: 800, duration: 1000 });
		}
	}

	$(".wabi-sift").on("click", function() {
		// Grab the target page section's ID from the link's (contained within "this") href attribute
		var scrollTargetID = $(this).attr("href");
		console.log("card sift " + scrollTargetID);
		var whichCard = $(scrollTargetID).attr('id');
		console.log("cardsift id " + whichCard);
		wabiShift(whichCard);
	});

	function wabiShift(fadeToID){
		var previous = $('.wabiVis');
		var checkID = previous.attr('id'); //currently visible section
		var newString = fadeToID + "Card";
		if(newString != checkID){
			previous.removeClass('wabiVis');
			$('#'+ newString).addClass('wabiVis');
			previous.velocity("fadeOut", {duration: 600});
			$('#'+ newString).velocity("fadeIn", { delay: 800, duration: 1000 });
		}
	}


	$('.thrive-sift').click(thriveFunc);

	function thriveFunc(){
		console.log("pppppppppppppo");
		// Grab the target page section's ID from the link's (contained within "this") href attribute
		var scrollTargetID = $(this).attr("id");
		console.log("card sift " + scrollTargetID);
		var whichCard = $(scrollTargetID).attr('id');
		console.log("cardsift id " + whichCard);
		thriveShift(scrollTargetID);
	}


	function thriveShift(fadeToID){
		var previous = $('.thriveVis');
		var checkID = previous.attr('id'); //currently visible section
		var newString = fadeToID + "Card";
		if(newString != checkID){
			previous.removeClass('thriveVis');
			$('#'+ newString).addClass('thriveVis');
			previous.velocity("fadeOut", {duration: 600});
			$('#'+ newString).velocity("fadeIn", { delay: 800, duration: 1000 });
		}
	}

	$(".sbg-sift").on("click", function() {
		// Grab the target page section's ID from the link's (contained within "this") href attribute
		var scrollTargetID = $(this).attr("href");
		console.log("card sift " + scrollTargetID);
		var whichCard = $(scrollTargetID).attr('id');
		console.log("cardsift id " + whichCard);
		oxyShift(whichCard);
	});

	function oxyShift(fadeToID){
		var previous = $('.oxyVis');
		var checkID = previous.attr('id'); //currently visible section
		var newString = fadeToID + "Card";
		if(newString != checkID){
			previous.removeClass('oxyVis');
			$('#'+ newString).addClass('oxyVis');
			previous.velocity("fadeOut", {duration: 600});
			$('#'+ newString).velocity("fadeIn", { delay: 800, duration: 1000 });
		}
	}

  

}); // document ready
