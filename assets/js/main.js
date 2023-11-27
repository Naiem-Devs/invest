(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 




  // owlCarousel
  $(".reviw_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    dots: true
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  }); 


 
})(jQuery);
