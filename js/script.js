// On your marks, get set...
$(document).ready(function(){

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
  	$('#artwork-container').css("height", winHeight - 60);
  	$("#l-upper").css("width", 1000); //gets reset after initial opening dots
  	$("#left").css("width", 1000); //gets reset
  	var horizontalCenter = (winHeight - 560) /2;
	var top = Math.max(horizontalCenter, 84);
	$("#artwork-container").css("margin-top", top);


	// Create the Portfolio simple data svg -------

  			// some globals for dot setup
			var w = 480;
			var h = 480;
			var radius = 24;
			var len = dataset.length;
			var numSections = 4;
			var artistX = 0;
			
			//Create SVG element
			var svg = d3.select("#l-upper")
						.append("svg")
						.attr("width", 1000)
						.attr("height", h);

			var circles = svg.selectAll("circle")
			    .data(dataset)
			    .enter()
			    .append("circle");

				circles.attr("cx", function(d, i) {
					var columnSize = w / numSections;
					// var shift = startWidth / (9);
					return Math.floor(i % numSections) * (columnSize) + (columnSize /2) + (i * 25) - 28;
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

		// Counting function to complete initital dot loading animation

	 	var counter = 1;

		function countDots(){
			if(counter == 24){
				$('circle').bind("mouseover", highlightAll);
		    	$('circle').bind("mouseout", darkAgain);
		    	$("#l-upper").bind("click", startArt);
			} else {
				counter++;
			}
		}
				 

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
		  		console.log("url   " + url);
		  		$("#right").append("<div id='preview'><img src='" + url + "' alt='Image preview' /><h1>" + title + "</h1>" + "<h2>" + materials + " " + dimensions + "</h2> " + "<p>" + des + "</p>" + "</div>");								 
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
		$('#left').css("width", w);
		$('#l-upper').css("width", w);

		// Adding fancybox beta
		$("circle").fancybox({
			theme : 'light',
			width: '75%',
			height: "75%",
			arrows: false,
			openEffect: "fade",
			closeEffect: "none",

			overlay: {
				closeClick : true
				// css : {color: blue}
			}
		});
	}

	function bindBack(){
		$("circle").bind( "mouseover", rolloverArt);
		$("circle").bind( "mouseout", rollOffArt);

	}

  	//-------------- Initital Interaction on Main page --------------

 		$('circle').bind("mouseover", highlightAll);
		$('circle').bind("mouseout", darkAgain);
		$("#l-upper").bind("click", startArt);
    

    	var initial = 0;

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
					var columnSize = w / numSections;
					return Math.floor(i % numSections) * (columnSize) + (columnSize /2) - 28;
	
				})
				.each("end", count)
		    
		    console.log("circles should be done moving now");
    		$("#l-lower").velocity("fadeIn", { duration: 1000, delay: 1500 });
    		$('.centered').velocity("fadeIn", { duration: 1000, delay: 2200, opacity: .7});

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
				bindBack();
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
	    { name:"hci", type: "square", url: "second", color: "#FF1744"},
	   	{ name:"set design", type: "triangle-up", url: "third", color: "#FFEB3B"},
	   	{ name:"etc.", type: "cross", url: "fourth", color: "#60698A"}
	];

	var navWidth = 300,
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
	    	return "translate(" + (i*90 + 10) + "," + (30) + ")"; 
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
		console.log("scrollTargetID " + scrollTargetID);
		var id = $('#'+ scrollTargetID).attr('id');
		var previous = $('.visible');
		if(scrollTargetID == "first" && initial == 0 && previous.attr('id') == "first"){ // very big if case to call startArt
			console.log("called startArt")
			startArt();
		} else {
			switch(id){
				case "first":
					console.log("trying to fade");
					if(initial != 0){
						$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
						$('p span#dynamic').text('FINE ART').velocity("fadeIn", {duration: 800});
					} else {
						$('p span#bracket').text('').velocity("fadeIn", {duration: 800});
						$('p span#dynamic').text('').velocity("fadeIn", {duration: 800}); //empty
					}
					break;
				case "second":
					overviewDes();
					$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
					$('p span#dynamic').text('HCI').velocity("fadeIn", {duration: 800});
					break;
				case "third":
					$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
					$('p span#dynamic').text('SET DESIGN').velocity("fadeIn", {duration: 800});
					break;
				case "fourth":
					$('p span#bracket').text('//').velocity("fadeIn", {duration: 800});
					$('p span#dynamic').text('ETC.').velocity("fadeIn", {duration: 800});
					break;
			}

			previous.removeClass('visible');
			$('#'+ scrollTargetID).attr("class", 'visible');
			previous.velocity("fadeOut", {duration: 600});
			$('#'+ scrollTargetID).velocity("fadeIn", { delay: 800, duration: 1000 });

   		}

		// $('#'+ scrollTargetID).velocity("scroll", { duration: 1000, easing: "easeInOutCubic" });
	});

	// HCI Hover carryover

	function showDetail(){
		$(this).find('.hover').velocity("fadeIn", 500);
	}

	function noDetail(){
		$(this).find('.hover').velocity("fadeOut", 500);
	};

/** HCI Section layout; Golden Ratio nested divs **/

//  HAVING SOME FUN WITH THE GOLDEN RATIO

specialProjects = [
	{ subpage: "FINAL-POLARR-DOC.pdf", p_title: "Polarr" , des: "Exploring Visual Identity" , color: "rgba(0, 188, 212, 1)", opacity: "rgba(255, 255, 255, .1)",  tags: ["Branding", "Identity"], image: "projects/polarr_tile_small.png", tile: "projects/polarr_tile_large.png"},
	{ subpage: "https://cloud-arch.com/projects/common-ground/", p_title: "Common Ground", des: "Connecting SF Market Street", color:"rgba(255, 235, 59, 1)", opacity: "rgba(255, 255, 255, .1)", tags: ["Experience", "Architecture", "Cross-Discipline"], image: "projects/common_small_tile.png", tile: "projects/common_tile_large.png"},
	{ subpage: "http://vicflo.github.io/Project-Pages/Cloud-Architecture/cloud-archived.html", p_title: "Cloud Architecture" , des: "Collective Launch Site" , color:"rgba(255, 23, 68, 1)",opacity: "#f7f5f7", tags: ["UX/UI", "Web"], image: "projects/cloud.jpg", tile: "projects/cloud_tile_large.png"},
	{ subpage: "subCharlotte.html", p_title: "Charlotte", des: "Visualizing Web Design", color:"rgba(255, 23, 68, 1)", opacity: "rgba(255, 23, 68, .05)", tags: ["DataViz", "Web"], image: "projects/char_tile_small.png", tile: "projects/char_tile_large.png"},
	{ subpage: "subCitadels.html", p_title: "Bricolage", des: "Visualizing Tobacco Factories", color:"rgba(255, 235, 59, 1)", opacity: "rgba(255, 255, 255, .1)", tags: ["Research", "Architecture"], image:"projects/bricolage_tile_small.jpg", tile: "projects/bricolage_tile_large.jpg"},
	{ subpage: "subStart.html", p_title: "Start.Home", des: "Encouraging a Sustainable Lifestyle", color:"rgba(255, 23, 68, 1)", opacity: "rgba(255, 255, 255, .1)", tags: ["UX/UI", "DataViz", "Cross-Discipline", "iPad"], image: "projects/start_tile_small.png", tile: "projects/solar_tile_large.jpg"},
	{ subpage: "subInspixel.html", p_title: "Inspixel", des: "Organizing Inspiration by Color",color:"rgba(255, 23, 68, 1)", opacity: "rgba(255, 255, 255, .1)",  tags: ["UX/UI", "Mobile"], image: "projects/inspixel_tile_small.jpg", tile: "projects/inspixel_tile_large.jpg"}
];

// Image Preloading for hci hover

for (var i = 0; i < specialProjects.length; ++i) {
    var img = new Image();
    img.src = specialProjects[i].tile;
}


function takeCloserLook(box){

	var info = specialProjects[box];
	//select left box for info display
	var tileWidth = $('.overview-project').width();
	var tileHeight = $('.overview-project').height();
	console.log(info.p_title);
	var cap = $('<div id="pretty" class="caption"></div>');
	
	var newLink = $("<a />", {href : info.subpage, target : "_blank"});
	var h_title = $('<h3>' + info.p_title + '</h3>');
	var h_des = $('<p>' + info.des + '</p>');
	var tags = $('<h5 class="tags"></h5>');
	for(var i=0; i < info.tags.length; i++){
		var newTag = $('<span>' + info.tags[i] + '</span>');
		newTag.appendTo(tags);
	}
	var hoverHci = $('<div class="hover"></div>');

	var img = $('<img>',{'alt': info.p_title, 'src': info.tile , 'width': tileWidth, 'height': tileHeight});

	newLink.empty().append(h_title,h_des, tags);
	hoverHci.empty().append(newLink);

	$('.overview-project').empty().append(cap, hoverHci, img).velocity("fadeIn");
	$('.overview-project').css("background-color", info.opacity);
	$('.tags span').css("border-color", info.color);
}

var state = 0;

$('#second').on("click", '.hci-project', function(){
	if(state ==0){
		$('.overview-project').bind('mouseenter', showDetail);
		$('.overview-project').bind('mouseleave', noDetail);
		state = 1;
	}

	// console.log($(this));
	$('#right .centered').velocity("fadeOut");
	$('.hci-project').each(function(){
    	$(this).removeClass('project-selected');
	});
	$(this).addClass('project-selected');
	var whichBox = getIndex($(this).attr('id'));
	takeCloserLook(whichBox);
});


// takes in id of the form $targetBox.attr('id') as parameter return index in array

function getIndex(index){
	finalIndex = index[0] - 1 //getting index from id with string manipulation, good times!
	return finalIndex;
}

function overviewDes(){
	$('.overview-project').css('background-color', "white");
	var hci_div = $('<div class="centered"></div>');
	var hci_title = $('<h5>HCI & Design</h5>');
	var hci_des = $('<p>As a designer I strive to create solutions that delight but are also intuitive in that they pay close attention to detail, connotative relationships, narrative, visual procession, chain of causation, and drill-down of information.</p>');
	hci_div.append(hci_title, hci_des);
	$('.overview-project').empty().append(hci_div);
	$('#second .centered').velocity("fadeIn", { duration: 1000, delay: 1000, opacity: .7});
}


// After tiles created, is called to populate with project data
function populateGolden(){
	var allBoxes = $('.hci-project');
	//  change id of one box for algorithm sequence anomaly
	$('#6-right').attr('id','7-right');
	$('#7-right').removeClass("hci6");
	$('#7-right').addClass("hci7");

	for(var i = 0; i < allBoxes.length; i++){
		targetBox = allBoxes[i];
		var $targetBox = $(targetBox);
		var index = getIndex($targetBox.attr('id'));
		var boxWidth = $targetBox.width();
		var boxHeight = $targetBox.height();
		var current = specialProjects[index];
		$targetBox.append(
			$('<img>',{'alt': current.p_title, 'src': current.image , 'width': boxWidth, 'height': boxHeight})
		);	
	}
	var tileWidth = $('.overview-project').width();
	console.log("hello  " + tileWidth);
	// $('.overview-project').css("width", tileWidth - 6 + "px");
	// overviewDes();
}

/** -------------- Create Golden Ratio Structure from Scratch -----*/

	// Keep Left, Upper, Down, Right Pattern

	var space = 72; //margin space
	
	var numSquares =7; // i.e. number of projects
	var currWidth = window.innerWidth - (56 * 2);
	var currHeight = Math.max(window.innerHeight, 650) - (space * 2);
	var flip = true; //bool to flip
	var keep = true; //bool to flip
	var paddingGolden = 6;
	var $targetElement = $('#golden-container'); // this get's updated to each next wrapper
	
	$('#golden-container').css("width", currWidth);
	$('#golden-container').css("height", currHeight);

	var squareNum = -1; //global counter


	for(var i = 0 ; i < numSquares; i++){
		if(flip == true) {
			// cut vertical, maintain height, halve width
			var width = currWidth /2 - paddingGolden; 
			currWidth = width; //update width
			// create two divs for split
			$targetElement.append(
	            $('<div/>', {'class': 'left-golden', 'id': i + '-left', 'width': currWidth, 'height': currHeight})
	        ).append(
	        	$('<div/>', {'class': 'right-golden', 'id': i + '-right', 'width': currWidth, 'height': currHeight}) 
	        )
	        if(keep == true){
	        	//keep the left most as a project div and the other as a wrapper.
	        	if(i != 0){
	        		$('#' + i + '-left').addClass( "hci-project" );
	        		$('#' + i + '-left').addClass( "hci" + i );
	        	} else {
	        		$('#' + i + '-left').addClass( "overview-project" ); //special case of the info side of divs
	        	}
	        	$('#' + i + '-right').addClass( "golden-wrapper" );
	        	$targetElement = $('#' + i + '-right');
	        	
	        } else {
	        	if(i != numSquares -1){
	        		$('#' + i + '-left').addClass( "golden-wrapper" );
	        	} else {
	        		$('#' + i + '-left').addClass( "hci-project" );
	        		$('#' + i + '-left').addClass( "hci" + i);
	        		console.log("last one");
	        	}
	        	
	        	$('#' + i + '-right').addClass( "hci-project" );
	        	$('#' + i + '-right').addClass( "hci" + i ); 
	        	$targetElement = $('#' + i + '-left');
	        }

			flip = false;

		} else {
			// cut horizontal, maintain width, halve height
			var height = currHeight /2 - paddingGolden;
			currHeight = height;

			$targetElement.append(
	            $('<div/>', {'class': 'upper-golden', 'id': i + '-upper', 'width': currWidth, 'height': currHeight})
	        ).append(
	            $('<div/>', {'class': 'lower-golden', 'id': i + '-lower', 'width': currWidth, 'height': currHeight})   
	        )

	        if(keep == true){
	        	//keep the upper and wrapper for lower.
	        	$('#' + i + '-upper').addClass( "hci-project" );
	        	$('#' + i + '-upper').addClass( "hci" + i);
	        	$('#' + i + '-lower').addClass( "golden-wrapper" );
	        	$targetElement = $('#' + i + '-lower');
	        	keep = false;
	        } else {
	        	//keep lower and wrapper upper
	        	$('#' + i + '-upper').addClass( "golden-wrapper" );
	        	$('#' + i + '-lower').addClass( "hci-project" );
	        	$('#' + i + '-lower').addClass( "hci" + i);
	        	$targetElement = $('#' + i + '-upper');
	        	keep = true;
	        }

			flip = true;
		}
		if(i == (numSquares - 1)){
			populateGolden(); // special case to launch image population after creation within loop
		}
	}

}); // document ready



// FAQ
