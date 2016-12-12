/**
* Code segment shifts perspective by using user coordinates for region in space.
*/

// Allows mouse position to trigger opacity shift in layered cubes

var width = window.innerWidth;
var height = window.innerHeight;
var threshold = width /5;
var hThreshold = height /8;
var lower = false; // when true lower has the opacity in it's layers and upper toggles to opaque.
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



