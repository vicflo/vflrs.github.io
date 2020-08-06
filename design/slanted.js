  // String.repeat is only available in ECMA6, so most browsers don't have it.
if (!String.prototype.repeat) {
  String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this);
  }
}

$('.slanted').each(function() {

  var slantedText = $(this);
  slantedText
  // Wrap inside the paragraph to keep it isolated from the "push" spans we're about to add
    .wrapInner('<span class="slanted_inner"></span>')
    // Add the extra spans required 
    .prepend('<span class="push"></span>'.repeat(20));

  // Push the content over a little more each row
  var push = $('.push', slantedText);

  push.each(function(i) {
    // include number is how wide each step is
    var incline = 32;
    // iterate through each "push" span, multiplying the position by the incline.
    $(this).css('width', (++i * incline) + 'px');
  });

  // Set the height of the pullquote to be the height of its text.
  // Pairing this with overflow: hidden in the CSS will keep any extra "push" spans from showing.
  function setSlantedTextHeight(slantedText) {
    var slantedTextInner = $('.slanted_inner', slantedText);
    // Get the height of the inner text
    var height = parseInt(slantedTextInner.height()) + 12;
    slantedText.css('height', height);
  }

  // Call height function
  setSlantedTextHeight(slantedText);

});