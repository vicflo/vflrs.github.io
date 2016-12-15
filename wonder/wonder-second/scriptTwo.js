var svg = null;
var lilypad = null;


d3.xml("wonderLily.svg", function(error, xml) {
  if (error) throw error;
    
 // "xml" is the XML DOM tree
  var htmlSVG = document.getElementById('lily');  // the svg-element in our HTML file
  // append the "maproot" group to the svg-element in our HTML file
  htmlSVG.appendChild(xml.documentElement.getElementById('lilyroot'));

  // d3 objects for later use
  svg = d3.select(htmlSVG);
  lilypad = svg.select('#lilyroot');


  // get the svg-element from the original SVG file
  var xmlSVG = d3.select(xml.getElementsByTagName('svg')[0]);
  // copy its "viewBox" attribute to the svg element in our HTML file
  svg.attr('viewBox', xmlSVG.attr('viewBox'));

  init();
  
});

var left = null;
var leftOuter = null;
var right = null;
var rightOuter = null;

var lLines = null;
var lOLines = null;
var rLines = null;
var rOLines = null;


function init(){
  left = lilypad.select('#left-lily');
  lLines = left.selectAll('line');

  leftOuter = lilypad.select('#left-outer');
  lOLines = leftOuter.selectAll('line');

  right = lilypad.select('#right-lily');
  rLines = right.selectAll('line');

  rightOuter = lilypad.select('#right-outer');
  rOLines = rightOuter.selectAll('line');


  lLines.each(function(index) {
    d3.select(this).style('stroke', '#d50000')
    .on("mouseover", colorLine)
  });

  lOLines.each(function() {
    d3.select(this).style('stroke', '#FFFFFF')
    .on("mouseover", colorLine)
  });


  rLines.each(function() {
    d3.select(this).style('stroke', '#3949AB')
    .on("mouseover", colorLine)
  });


  rOLines.each(function() {
    d3.select(this).style('stroke', '#FAFAFA')
    .on("mouseover", colorLine)
  });

}

function reset(theseLines, color){
  theseLines.each(function(){
    d3.select(this).style('stroke', color);
    d3.select(this).attr('stroke', color);
  });
}

var countTeal = 0;

function animateCheck(){
  if(countTeal == 30){
    reset(lLines,'#d50000');
    $('#left-lily').velocity({
      rotateZ: "360deg",
      stroke: "#d50000"
    }, { duration: 5500, easing: "easeInOutQuad"})
  };

  if(countTeal == 60){
    reset(rLines, '#3949AB');
    $('#right-lily').velocity({
        rotateZ: "360deg",
        stroke: "#3949AB"
      }, { duration: 5500, easing: "easeInOutQuad"})
  };

  if(countTeal == 90){
   
    $('#left-outer').velocity({
        rotateZ: "360deg",
        stroke: "#FFFFFF"
      }, { duration: 55000, easing: "easeInOutQuad"})
  };

  if(countTeal == 120){
    countTeal = 0;
    reset(rOLines, '#FAFAFA');
    $('#right-outer').velocity({
        rotateZ: "360deg",
        stroke: "#FAFAFA"
    }, { duration: 55000, easing: "easeInOutQuad"});
    countTeal = 0;
    reset(lOLines, '#FFFFFF');
    reset(rOLines, '#FAFAFA');
  }
    
}

function colorLine(){
  animateCheck();

  curr = $(this).attr('stroke');
  switch (curr){

    case "#d50000" :
      // red
      $(this).css('stroke', "#ffebee");
      $(this).attr('stroke', "#ffebee");
      break;
    case "#3949AB" :
      // blue
      $(this).css('stroke', "#E8EAF6");
       $(this).attr('stroke', "#E8EAF6");
       break;
    case "#8BC34A" :
      // green
      $(this).css('stroke', "#607D8B");
      $(this).attr('stroke', "#607D8B");
       break;
    case "#FF9800" :
      //orange
      $(this).css('stroke', "#37474F");
       $(this).attr('stroke', "#37474F");
       break;
    case "#FFEB3B" :
      //yellow
      $(this).css('stroke', "#37474F");
      $(this).attr('stroke', "#37474F");
       break;
    case "#AA00FF" :
      //purple
      $(this).css('stroke', "#607D8B"); 
      $(this).attr('stroke', "#607D8B"); 
       break;
    case "#607D8B" :
      //lightgray
      countTeal++;
       $(this).css('stroke', " #00BCD4"); 
       $(this).attr('stroke', " #00BCD4"); 
        break;
    case "#37474F" :
      //darkgray
      countTeal++;
      $(this).css('stroke', " #00BCD4"); 
      $(this).attr('stroke', " #00BCD4"); 
       break;
    case "#FAFAFA" :
      //whiteish
      $(this).css('stroke', "#8BC34A");
      $(this).attr('stroke', "#8BC34A");
       break;
    case "#FFFFFF"  :
      //white
      $(this).css('stroke', "#FF9800"); 
      $(this).attr('stroke', "#FF9800"); 
       break;
    case "#ffebee" :
      //light red
      $(this).css('stroke', "#AA00FF");
      $(this).attr('stroke', "#AA00FF");
      break;
    case "#E8EAF6" :
     //light blue
      $(this).css('stroke', "#FFEB3B");
      $(this).attr('stroke', "#FFEB3B");
      break;
    case "#00BCD4" :
       break;
  }
}
