/**
* Code segment shifts perspective by using user coordinates for region in space.
*/

// Allows mouse position to trigger perspective shift in layered cubes

var width = window.innerWidth;
var height = window.innerHeight;
var threshold = width /4;
var hThreshold = height /4;
var lower = false; 
var upperLeft = false;
var upperRight = false;


var zAngle = 0;
var zShift = 0;

$(window).mousemove(function( event ) {
  if((event.pageX <= threshold) && (event.pageY <= hThreshold) && (upperLeft == false)){
    //  checks which region mouse is coming from to make it appear clock wise or counter
    if(lower == true){
        zShift+=120;
    } else { 
        zShift-=120;
    }

    $('.stage').css('webkit-transform',"rotateZ("+ (zShift + zAngle) +"deg");
    upperLeft = true;
    upperRight = false;
    lower = false;

  } 
  if((event.pageX > threshold) && (event.pageY <= hThreshold) && (upperRight == false)){
    if(upperLeft == true){
        zShift+=120;
    } else { 
        zShift-=120;
    }

    $('.stage').css('webkit-transform',"rotateZ("+ (zShift + zAngle) +"deg");
    upperLeft = false;
    upperRight = true;
    lower = false;
  } 

  if((event.pageY > hThreshold) && (lower == false)){ // if here then it has to be lower
    if(upperRight == true){
        zShift+=120;
    } else { 
        zShift-=120;
    }

    $('.stage').css('webkit-transform',"rotateZ("+ (zShift + zAngle) +"deg");
    upperRight = false;
    upperLeft = false;
    lower = true;
  }

  return false;
});


/* Averages given colors
 *
 * Arguments:
 * rgb value array
 * 
 * Return:
 * rgba object of average color between background and cube face color
 */

function computeHue(color1, color2){
    nextR = (color1[0] + color2[0]) /2;
    nextG = (color1[1] + color2[1]) /2;
    nextB = (color1[1] + color2[1]) /2;
    return [nextR, nextG, nextB];
}

var $body = $('body');

$('figure').on("mouseenter", function(){
    var background = $body.css('background-color').match(/\d+/g).map(Number);;
    var rgb = $(this).css('background-color').match(/\d+/g).map(Number);;
    var newHue = computeHue(rgb, background);

    $body.velocity({
        backgroundColorRed: newHue[0],
        backgroundColorGreen: newHue[1],
        backgroundColorBlue: newHue[2]
    }, { easing: "easeOutQuad", duration: 100});     

});



var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;
var chromeHeight = screenHeight - document.documentElement.clientHeight;

$('.hex')
    .css("perspective-origin", screenWidth/2 + "px" + ((screenHeight * 0.45) - chromeHeight) + "px")
    .velocity({
        rotateZ: [360],
        opacity: [1, 0]
    }, { duration: 3000, easing: "easeOutQuad"});





