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

    // End Card Sifters

	$('body').velocity("fadeIn");


	// -------------------- ARTWORK SECTION SPECIFIC JS------------------------

    // Artwork Data         

    var dataset = [
		{ small_url: "ART/artsDistrict.png", url: "ART/artsDistrict.png", alpha: .82, kind: "mixed", title: "Stanford Arts District", materials: "watercolor, ink & gold leafing on Reeves BFK", dimensions: "24\" x 48\"", des: "A commissioned work for the Stanford Arts Institute to depict the construction and unification of the new Stanford Arts District."},
		{ small_url: "ART/A.png", url: "ART/A.png", alpha: .8 , kind: "mixed", title: "Stanford Arts Fancy 'A' (sketch)", materials: "watercolor & gold acrylic", dimensions: "6\" x 8\"", des: "A draft of a fancy 'A' to become an animated logo for the Stanford Arts Institute."},
		{ small_url: "ART/universe.png", url: "ART/universe.png", alpha: .7, kind: "mixed", title: "Imagining the Universe", materials: "inkjet transfer, acrylic, ink & watercolor on Reeves BFK", dimensions: "24\" x 24\"", des: "A commissioned work for the Stanford Arts Institute \"Imagining the Universe\" year-long series for advertisement."},
		{ small_url: "ART/unfolded_heart_small.png", url: "ART/unfoldedheart.jpg", alpha: .6, kind: "mixed", title: "Unfolded Heart", materials: "acrylic & silver leafing on cardstock", dimensions: "11\" x 14\"", des: "The folds of a paper heart create the shapes confining and recoloring the woman turned."},
		{ small_url: "ART/city_in_water_small.png", url: "ART/city_in_water.jpg", alpha: .52, kind: "painting", title: "City in Water", materials: "india ink & acrylic on mylar", dimensions: "36\" x 62\"", des: ""},
		{ small_url: "ART/light_small.jpg", url: "ART/light.jpg", alpha: .5, kind: "graphite", title: "Light & Shadow", materials: "acrylic on canvas", dimensions: "36\" x 48\"", des: "Independent study with Enrique Chagoya."},
		{ small_url: "ART/star_blend.jpg", url: "ART/star_blend.jpg", alpha: .44, kind: "mixed", title: "Star Blend", materials: "acrylic", dimensions: "4\" x 4\" x 4\"", des: "It takes approximately 2 minutes for the eye to adjust to darkness to perceive starlight. Each slide represents increments of 2 minutes, near stars appearing as etches, while already perceived ones bore holes. The entire piece is an imagined representation of the stars as seen by the retina."},
		{ small_url: "ART/fourSeasons_small.png", url: "ART/fourSeasons.jpg", alpha: .42, kind: "mixed", title: "Four Seasons", materials: "print", dimensions: "11\" x 14\"", des: "Vivaldi's Four Seasons compressed into one page with time represented through opacity."},
		{ small_url: "ART/14_.png", url: "ART/14_.png", alpha: .4, kind: "mixed", title: "Conceptual Layout of Disney Centrifuge (Disney Imaginations Entry)", materials: "ink", dimensions: "8\" x 11\"", des: ""},
		{ small_url: "ART/15_Disney3.png", url: "ART/15_Disney3.png", alpha: .38, kind: "graphite", title: "Carouselium (Disney Imaginations Entry)", materials: "lead on cardstock", dimensions: "12\" x 30\"", des: ""},
		{ small_url: "ART/pieces_small.jpg", url: "ART/pieces.jpg", alpha: .36, kind: "mixed", title: "Pieces", materials: "collage & acrylic", dimensions: "6\" x 8\"", des: "", materials: "sheet music, cardstock & acrylic", dimensions: "18\" x 24\"", des: ""},
		{ small_url: "ART/after_the_rain_small.jpg", url: "ART/after_the_rain.jpg", alpha: .34, kind: "painting", title: "After the Rain", materials: "acrylic on canvas", dimensions: "36\" x 48\"", des: ""},
		{ small_url: "ART/Beccharia_small.jpg", url: "ART/Beccharia.jpg", alpha: .32, kind: "graphite", title: "Piazza Beccharia", materials: "acrylic", dimensions: "8.5\" x 11\"", des: ""},
		{ small_url: "ART/florsketh.png", url: "ART/florsketh.png", alpha: .3, kind: "graphite", title: "Florence Streets", materials: "graphite", dimensions: "8.5\" x 11\"", des: ""},
		{ small_url: "ART/sketchpeople.png", url: "ART/sketchpeople.png", alpha: .28, kind: "graphite", title: "Moments in Florence", materials: "graphite", dimensions: "8.5\" x 11\"", des: ""},
		{ small_url: "ART/Winding_small.jpg", url: "ART/Winding.jpg", alpha: .24, kind: "graphite", title: "Winding at your Back", materials: "acrylic on canvas", dimensions: "18\" x 24\"", des: ""},
		{ small_url: "ART/whisking.jpg", url: "ART/whisking.jpg", alpha: .26, kind: "mixed", title: "Whisking Away", materials: "ink & acrylic", dimensions: "6\" x 10\"", des: "An airport composed of elements only found from an egg carton."},
		{ small_url: "ART/Trilled_small.jpg", url: "ART/Trilled.jpg", alpha: .22, kind: "painting", title: "Trilled", materials: "acrylic on canvas", dimensions: "18\" x 24\"", des: ""}, 
		{ small_url: "ART/Google_small.jpg", url: "ART/Google.jpg", alpha: .2, kind: "mixed", title: "Doodle4Google: What if Music Came to Life?", materials: "acrylic & ink on cardstock", dimensions: "4\" x 12\"", des: "As a 2008 Regional Finalist with the Doodle4Google theme \"What if…\" I transformed the 'Google' logo into some quintessential compositions. In order: Moonlight Sonata, Firebird Suite, The Planets, Flight of the Bumblebee, The Four Seasons & Waltz of the Flowers."},
		{ small_url: "ART/Wind_new.jpg", url: "ART/Wind_new.jpg", alpha: .18, kind: "graphite", title: "Wind", materials: "graphite", dimensions: "24\" x 36\"", des: ""},    
		{ small_url: "ART/Coaster_Land.jpg", url: "ART/Coaster_Land.jpg", alpha: .16, kind: "graphite", title: "Coaster Land", materials: "graphite", dimensions: "24\" x 36\"", des: ""},
		{ small_url: "ART/Bicycle.jpg", url: "ART/Bicycle.jpg", alpha: .14, kind: "graphite", title: "Bicycle", materials: "graphite", dimensions: "24\" x 36\"", des: ""}, 
		{ small_url: "ART/Shattered_Glass_small.jpg", url: "ART/Shattered_Glass.jpg", alpha: .12, kind: "painting", title: "Shattered Glass", materials: "acrylic on canvas", dimensions: "18\" x 24\"", des: ""}, 
		{ small_url: "ART/believe_small.jpg", url: "ART/believe_small.jpg", alpha: .1, kind: "painting", title: "Believe", materials: "acrylic on canvas", dimensions: "18\" x 24\"", des: ""}
	];

	// Image Preloading for dot hover

	for (var i = 0; i < dataset.length; ++i) {
	    var img = new Image();
	    img.src = dataset[i].small_url;
  	}

  	// ------------- Presets/globals ---------------------- 

  	var winHeight = $(window).innerHeight();
  	var winWidth = $(window).innerWidth();
  	var inner = winWidth - (48*2); //margin difference
  	// $('#artwork-container').css("height", winHeight - 60);
  	// $("#l-upper").css("width", 1000); //gets reset after initial opening dots
  	var horizontalCenter = (winHeight - 560) /2;
	var top = Math.max(horizontalCenter, 84);
	$("#artwork-container").css("margin-top", top);


	// Create the Portfolio simple data svg -------

  			// some globals for dot setup
			var w = 480;
			var h = 480;
			var radius = 24;
			var offset = 28;
			var len = dataset.length;
			var numSections = 4;
			var artistX = 0;
			var space = 25;

			var startWidth = Math.min(inner, 1000);
			$('#artwork-container').css("width", startWidth);
			// $('#wrapper').css("width", winWidth - (48*2));
			$("#l-upper").css("width", startWidth);
			$("#left").css("width", startWidth); //gets reset
			//Create SVG element
			var svg = d3.select("#l-upper")
						.append("svg")
						.attr("width", startWidth)
						.attr("height", h);

			var circles = svg.selectAll("circle")
			    .data(dataset)
			    .enter()
			    .append("circle");

				circles.attr("cx", function(d, i) {
					var columnSize = (startWidth/2) / numSections;
					var oneColumn = startWidth/numSections/2;
					var circleInColumn = oneColumn / 3; //that's the diameter of circles we want/ also the offset to space them
					radius = (circleInColumn *.58);
					return  Math.ceil((i % numSections) * (columnSize) + (columnSize /2) + (i * (radius*1.0)) -  radius);
				})
			   	.attr("cy", function(d, i){
			   		var rowSize = (h / (len/numSections));
			   		
			   		return Math.floor(i / numSections) * (rowSize) + (rowSize /2);
			   	})
			   	.attr("r", radius)
			    .attr("href", function(d) {
					return d.url;
			   	})
			   	.attr("rel", "light_theme")
			   	.attr("thumb", function(d){
			   		return d.small_url;
			   	})
			   	.attr("class", function(d){
			   		return d.kind;
			   	})
			   	.attr("title", function(d){
			   		return d.title;
			   	})
			   	.attr("materials", function(d){
			   		return d.materials;
			   	})
			   	.attr("dimensions", function(d){
			   		return d.dimensions;
			   	})
			   	.attr("des", function(d){
			   		return d.des;
			   	})
			   	.attr("fill", "#60698A")
			   	.attr("opacity", function(d){
			   		return d.alpha + .12;
			  	})
			  	.style("opacity", function(d){
			   			return d.alpha + .12;
			   		})

				 

// ---------------- Circle Interactivty ---------------

	  	function rolloverArt(){
	  		if($('#right .centered').length){
	  			$('#right .centered').velocity("fadeOut");
	  		}
	  		d3.select(this)
	  		.transition()
	  		.duration(200)
	  		.style('fill', function(d) { 
	  			switch (d.kind) {
		  			case "mixed" : return "#00BCD4"
		  			case "painting" : return "#FFEB3B"
		  			case "graphite" : return "#FF1744"
		  			default : return "#FFEA00";
	  			}
	  		 })
	  		if(!$('#preview').length){
		  		var title = $(this).attr("title");
		  		var url = $(this).attr("thumb");
		  		var materials = $(this).attr("materials");
		  		var dimensions = $(this).attr("dimensions");
		  		var des = $(this).attr("des");
		  		$("#right").append("<div id='preview'><img src='" + url + "' alt='Image preview' /><h1>" + title + "</h1>" + "<h2>" + materials + " " + dimensions + "</h2> " + "<p>" + des + "</p>" + "</div>");								 
				// $("#right").css("display", "block");
				$("#preview").velocity("fadeIn");
			}

	  	}

		function rollOffArt(){
			d3.select(this)
			.transition()
	  		.duration(100)
	  		.style("fill", "#60698A")
			
			if($('#preview').length){
				$('#preview').remove();
			}
		}


// ----------------- Dots After Initial --------------------

	function extra(){
		$('.resize').css("width", startWidth/2 - 10);
		$('#right').css('display', 'block');
		$('#right .centered').velocity("fadeIn");

		// Adding fancybox beta
		$("circle").fancybox({
			theme : 'light',
			// toolbar: false,
			buttons : ['close'],
			arrows: false,
			openEffect: "fade",
			closeEffect: "none",
			protect : true,
			caption : function() {
			return $(this).attr("title")},

			overlay: {
				closeClick : true
				// css : {color: blue}
			}
		});
	}

	$('[data-fancybox="lastfive"]').fancybox({
		theme : 'light',
			// toolbar: false,
			buttons : ['close'],
			arrows: true,
			openEffect: "fade",
			closeEffect: "none",
			protect : true,
			clickOutside : 'close',
			clickSlide : 'close'

	});

	$('[data-fancybox="oed"]').fancybox({
			theme : 'light',
			// toolbar: false,
			buttons : ['close'],
			arrows: true,
			openEffect: "fade",
			closeEffect: "none",
			protect : true,
			clickOutside : 'close',
			clickSlide : 'close'

	});

	$('[data-fancybox="intowoods"]').fancybox({
			theme : 'light',
			// toolbar: false,
			buttons : ['close'],
			arrows: true,
			openEffect: "fade",
			closeEffect: "none",
			protect : true,
			clickOutside : 'close',
			clickSlide : 'close'

	});

	$('[data-fancybox="aida"]').fancybox({
			theme : 'light',
			// toolbar: false,
			buttons : ['close'],
			arrows: true,
			openEffect: "fade",
			closeEffect: "none",
			protect : true,
			clickOutside : 'close',
			clickSlide : 'close'

	});

	function bindBack(){
		$("circle").bind( "mouseover", rolloverArt);
		$("circle").bind( "mouseout", rollOffArt);

	}

  	//-------------- Initital Interaction on Main page --------------

 		$('circle').bind("mouseover", highlightAll);
		$('circle').bind("mouseout", darkAgain);
		$("#l-upper").bind("click", startArt);
    

    	var initial = 0;
    	var onPage = 0;

		function startArt(){
			initial = 1; //global state based variable 
			$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
			$('p span#dynamic').text('FINE ART').velocity("fadeIn", {duration: 800});
			$('#l-upper').unbind('click');
			$('circle').unbind('mouseout', darkAgain);
			$('circle').unbind('mouseover', highlightAll);
			$('#words').velocity("fadeOut", { duration: 500 });
			
			// Animate circles left
			d3.selectAll('circle')
    			.transition()
			  	.delay(function(d, i) {
		    		return (Math.floor(i / 4)) * 40;
		  		})
		  		.duration(2000)
		  		.attr("fill", "#60698A")
		  		.attr("cx", function(d, i) {
		  			var columnSize = ((startWidth-20)/2/4);
					var oneColumn = startWidth/numSections/2;
					var circleInColumn = oneColumn / 3; //that's the diameter of circles we want/ also the offset to space them
					radius =  (circleInColumn /2);
					// return  Math.ceil((i % numSections) * (columnSize) + (columnSize /2) + (i * (radius*1.2)) -  circleInColumn);
					return  Math.ceil((i % numSections) * (columnSize) + radius + 6);
	
				})
				.each("end", count)
		    
    		// $("#l-lower").velocity("fadeIn", { duration: 1000, delay: 1500 });
    		// $('.centered').velocity("fadeIn", { duration: 1000, delay: 2200, opacity: .7});


		}

		var wordIndex = 0;

		var easterEgg = "<p>It is a bit impossible to fit <span id=\"c\">n</span> pigeons into <span id=\"m\">(n-1)</span> holes.</p>";

		$('#words').on('click', function(){
			if(wordIndex == 1){
				$("#words").velocity("fadeOut", { duration: 500 });
			} else{
				$(this).html(easterEgg).velocity("fadeIn", { duration: 300});
				wordIndex++;
			}
		})

		// adding dot interaction after animation

    	var dotCount = 1;

		function count(){
			if(dotCount == 24){
				extra();
				$.Velocity.animate($('#l-lower'), { opacity: 1 }, { display: "block" }, {duration: 1500})
				    /* Callback to fire once the animation is complete. */
				    .then(function() {
				    	$('.centered').velocity("fadeIn", {opacity: .7});
				     	console.log("Resolved."); 
				     	bindBack();
				 	})
				    /* Callback to fire if an error occurs. */
				    .catch(function(error) { 
				    	console.log("Rejected.");
				});
			} else {
				dotCount++;
			}
   			// rolloverArt.call(circles[0][0]);
		}


//-------------- Initial circle callbacks ----------------

		function highlightAll(){
			d3.selectAll("circle")
			  	.transition()
		    	.attr("fill", function(d) { 
		  			switch (d.kind) {
			  			case "mixed" : return "#00BCD4"
			  			case "painting" : return "#FFEB3B"
			  			case "graphite" : return "#FF1744"
			  			default : return "#FFEA00";
		  			}
		  		 })
		}	

		function darkAgain(){
			d3.selectAll("circle")
			  	.transition()
		    	.attr("fill", "#60698A")
		}	



//--------------- Dot Sifters --------------------------- 
	
		$('#mixed').hover(function(){
			$( this ).removeClass( "blueGray" );
		    $( this ).addClass( "mixHover" );
		  }, function() {
		    $( this ).removeClass( "mixHover" );
		    $( this ).addClass( "blueGray" );
		  }
		);

		$('#painting').hover(function(){
			$( this ).removeClass( "blueGray" );
		    $( this ).addClass( "paintHover" );
		  }, function() {
		    $( this ).removeClass( "paintHover" );
		    $( this ).addClass( "blueGray" );
		  }
		);

		$('#graphite').hover(function(){
		    $( this ).addClass( "graphHover" );
		    $( this ).removeClass( "blueGray" );
		  }, function() {
		    $( this ).removeClass( "graphHover" );
		    $( this ).addClass( "blueGray" );
		  }
		);

		// Click sifters for dot media

		var s_width = 5;

		$('#l-lower p').on("click", function(){
			var myID = $(this).attr("id");

			var shown = $('.sifted');
			if(shown.length){
				s_width = 0; //wants to turn off stroke;
				shown.removeClass('sifted');
			}
			if(myID != shown.attr("id")){
				$(this).addClass('sifted');
				s_width = 5;
			}

			circles.transition().duration(200)
				.attr("stroke", function(d) {
					if(d.kind == myID){
						switch (myID) {
				  			case "mixed" : 
				  				return "#00BCD4";
				  			case "painting" : 
				  				return "#FFEB3B";
				  			case "graphite" : 
				  				return "#FF1744";
				  			default : 
				  				return "#60698A";
				  		}	
					}
				})
				.attr("stroke-width", function(d) {
					if(d.kind == myID){
						return s_width;
					}
				})
  		});

// -------- NAVIGATION SYMBOLS -----------


	var navdata = [
	    { name :"fine art",  type: "circle", url: "first", color: "#00BCD4"},
	    { name:"UX/UI", type: "square", url: "second", color: "#FF1744"},
	   	{ name:"set design", type: "triangle-up", url: "third", color: "#FFEB3B"},
	   	{ name:"etc.", type: "cross", url: "fourth", color: "#60698A"}
	];

	var navWidth = 202,
	    navHeight = 60;

	var svgNav = d3.select("#navLinks").append("svg")
	    .attr("width", navWidth)
	    .attr("height", navHeight)

	var node = svgNav.selectAll(".node")
	    .data(navdata)
	    .enter().append("path")
	    .attr("class", "node")
	    .attr("fill", "white")
        .style("stroke", "#2646C3")
        .style("stroke-width", "1.5px")
	    .attr("class", "nav-link")
	    .attr("d", d3.svg.symbol()
	    	.type(function(d) { return d.type; })
	    	.size(240))
	    .attr("href", function(d){
	    	return d.url;
	    })
	    .attr("transform", function(d, i) { 
	    	return "translate(" + (i*50 + 10) + "," + (30) + ")"; 
	    })
		.call(d3.helper.tooltip(
	        function(d, i){
	          return d.name;
	        }
        ))
        .on("mouseenter", function(d) {
	        d3.select(this).transition()
	            .duration(300)
	            .attr("fill", "#60698A")
	  		
	    })
	    .on("mouseleave", function () {
	        d3.select(this).transition()
	            .duration(300)
	            .attr("fill", "white")
	    });

/** ------------------------------ Navigation Event ---------------------------------------*/

$(".nav-link").on("click", function() {
	// Grab the target page section's ID from the link's (contained within "this") href attribute
	var scrollTargetID = $(this).attr("href");
	var id = $('#'+ scrollTargetID).attr('id');
	sectionClick(id);
});

function sectionClick(scrollTargetID){
	var previous = $('.visible');
	var checkID = previous.attr('id'); //currently visible section
	if(scrollTargetID == "first" && initial == 0 && scrollTargetID == "first" && checkID == "first"){ // very big if case to call startArt
		console.log("caaaaaaaaaaaaaaaalllll");
		startArt();
	} else {
		switch(scrollTargetID){
			case "first":
				if(initial != 0){
					$('.centered').velocity("fadeIn", {opacity: .7});
					$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
					$('p span#dynamic').text('FINE ART').velocity("fadeIn", {duration: 800});
				} else {
					$('p span#bracket').text('').velocity("fadeIn", {duration: 800});
					$('p span#dynamic').text('').velocity("fadeIn", {duration: 800}); //empty
				}
				break;
			case "second":
				// overviewDes();
				$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
				$('p span#dynamic').text('HCI').velocity("fadeIn", {duration: 800});
				// $('#golden-container').velocity("fadeIn", { delay: 800, duration: 1000 });
				break;
			case "third":
				$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
				$('p span#dynamic').text('SETS').velocity("fadeIn", {duration: 800});
				break;
			case "fourth":
				$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
				$('p span#dynamic').text('ETC.').velocity("fadeIn", {duration: 800});
				break;
			case "fifth":
				$('p span#bracket').text('').velocity("fadeIn", {duration: 800});
				$('p span#dynamic').text('').velocity("fadeIn", {duration: 800});
				break;
		
		}

		previous.removeClass('visible');
		$('#'+ scrollTargetID).attr("class", 'visible');
		previous.velocity("fadeOut", {duration: 600});
		$('#'+ scrollTargetID).velocity("fadeIn", { delay: 800, duration: 1000 });
	}
}

	$('#me').on("click", function(){
		sectionClick('fifth');
	});

	$('#chameleon').on("click", function(){
		$('#tiny').velocity("fadeOut", {duration: 200});
		sectionClick('fifth');
	});

	// HCI Hover carryover

	function showDetail(){
		$(this).find('.hover').velocity("fadeIn", 500);
	}

	function noDetail(){
		$(this).find('.hover').velocity("fadeOut", 500);
	};

	// new code
	// $('.overview-project').bind('mouseenter', showDetail);
	// $('.overview-project').bind('mouseleave', noDetail);

	$('.overview-project').mouseenter(showDetail);
	$('.overview-project').mouseleave(noDetail);
	$('.overview-project-rect').mouseenter(showDetail);
	$('.overview-project-rect').mouseleave(noDetail);



	$('.landing-image--portrait').addClass('isShown');
	// $('.label-portrait').addClass('isShown');

	$('.landing--link--me').hover(function(){
		$('.landing-image--portrait').removeClass('isShown');
	    $('.landing-image--me').addClass('isShown');

	    $('.label-portrait').css("display", "none");
	    $('.label-me').css("display", "block");
	  }, function() {
	  	$('.landing-image--portrait').addClass('isShown');
	    $('.landing-image--me').removeClass('isShown');

	    $('.label-me').css("display", "none");
	    $('.label-portrait').css("display", "block");
	  }
	);


	$(".extra").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});

	// $('[data-fancybox="gallery"]').fancybox({
	// 	loop : true,
	// 	keyboard : true,
	// 	touch : true,
	// 	closeClickOutside : true,
	// 		height: "75%",
	// 	openEffect: "fade",
	// 	closeEffect: "none",
	// 	slideShow  : true,
	// 	thumbs : {
	// 		showOnStart : true
	// 	},
	
	// });

}); // document ready


