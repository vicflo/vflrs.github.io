/*
The MIT License (MIT)

Copyright (c) 2014 Chris Wilson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var audioContext = null;
var meter = null;
var canvasContext = null;
var WIDTH=500;
var HEIGHT=50;
var rafID = null;

window.onload = function() {

    // grab our canvas
    canvasContext = document.getElementById( "meter" ).getContext("2d");
    
    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    
    // grab an audio context
    audioContext = new AudioContext();

    // Attempt to get audio input
    try {
        // monkeypatch getUserMedia
        navigator.getUserMedia = 
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;

        // ask for an audio input
        navigator.getUserMedia(
        {
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            },
        }, gotStream, didntGetStream);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }

}


function didntGetStream() {
    alert('Stream generation failed.');
}

var mediaStreamSource = null;

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Create a new volume meter and connect it.
    meter = createAudioMeter(audioContext);
    mediaStreamSource.connect(meter);

    // kick off the visual updating
    drawLoop();
}


$.fn.velocity.defaults.easing = "easeInOutSine";

function r(min, max){
    console.log("being called r");
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}


var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;
var chromeHeight = screenHeight - document.documentElement.clientHeight;

var translateZMin = -725;
var translateZMax = 600;

$("#container")
    .css("perspective-origin", screenWidth/2 + "px" + ((screenHeight * 0.45) - chromeHeight) + "px")
    .velocity({
        perspective: [0, 50],
       
    }, { duration: 800, delay: 3250, loop: 1});


// $('.cube')
// // .css("perspective-origin", screenWidth/2 + "px" + ((screenHeight * 0.45) - chromeHeight) + "px")
//     .velocity({
//         rotateX: [
//             35,
//             145
//         ],
//         rotateY: [
//             45,
//             45
//         ],
//     }, { duration: 1000})
//     .velocity("reverse", { easing: "easeOutQuad"});


// $('.stage').css('webkit-transform',"rotateZ("+ (zShift + zAngle) +"deg");

function drawLoop( time ) {
    // clear the background
    // canvasContext.clearRect(0,0,WIDTH,HEIGHT);
    // check if we're currently clipping
    if (meter.checkClipping()){
        // canvasContext.fillStyle = "red";
        console.log("blowing");

    }else{
        // canvasContext.fillStyle = "green";
         // console.log("meter volume " + meter.volume);
        if((meter.volume*1000) > 60){
            console.log("calling cube")
        $('.upper .cube')
            .velocity({
                rotateX: [
                    25,
                    3500
                ],
                rotateY: [
                    45,
                    45
                ],
                translateY: [0, 38]

            }, {easing: "easeOutQuad",  duration: meter.volume * 35000});

            $('.lower .cube').each(function(){
                var offset = $(this).offset();

                 $(this).velocity({
      
                    opacity: [0 , 1]
     
                }, {easing: "easeOutQuad",  duration: meter.volume * 45000});
            });
           
        } else{
             // $('.cube').velocity("reverse");
            $('.cube').velocity("stop");
        }
        // $('.cube').velocity("fadeIn", {easing: "easeOutQuad", duration: meter.volume*WIDTH*1.4});
    }

    // draw a bar based on the current volume
    // canvasContext.fillRect(0, 0, meter.volume*WIDTH*1.4, HEIGHT);

    // set up the next visual callback
    rafID = window.requestAnimationFrame( drawLoop );
}
