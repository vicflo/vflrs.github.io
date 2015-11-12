$(document).ready(function () {

      /* Apply fancybox to multiple items */
      $("a.swatch").fancybox({
        'opacity'   : true,
        'overlayShow' : false,
        'transitionIn'  : 'fade',
        'transitionOut' : 'none',
        'hideOnOverlayClick': true
      });
  
      /* Using custom settings */
      
      $("a#inline").fancybox({
        'hideOnOverlayClick': true
      });
  
     
      $('#shift').fadeIn(800);
      $('#home').fadeIn(800);
      $('#swatch').fadeIn(800);

});