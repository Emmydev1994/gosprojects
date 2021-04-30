( function ($, elementor) {
	"use strict";


    var Privsa = {

        init: function () {
            
            var widgets = {
                'privsa-service.default': Privsa.Service_filter_mixcontent,
                'privsa-main-slider.default': Privsa.Main_Slider,
                'privsa-popup.default': Privsa.Privsa_popup,

            };
            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
      },

      Service_filter_mixcontent: function ($scope) {

        var $container = $scope.find('#mixcontent');
        
        $container.mixItUp({
           animation: {
               effects: 'fade translateX(50%)',
               reverseOut: true,
               duration: 1000
           },
           load: {
               filter: 'all'
           }
       });																									
       
     },

     
		// Main Slider
        Main_Slider: function ($scope) {

            var $container = $scope.find('.main-slider-style1');
           
            if ($container.length > 0) {
                var swiper = new Swiper('.swiper-container', {
                    loop: true,
                    grabCursor: true,
                    speed: 1500,
                    parallax: true,
                    autoplay: true,
                    effect: "slide",
                    mousewheelControl: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        dynamicBullets: true,
                        clickable: true,
                    },
                });
            }
        
        },

        Privsa_popup: function ($scope) {
            var $container = $scope.find('.privsa-popup');
            $container.magnificPopup({ 
               removalDelay: 300,
               type: 'inline',
               closeOnContentClick: false,
                   midClick: true,
               callbacks: {
               beforeOpen: function() {
                  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure' + this.st.el.attr('data-effect'));
               }
             },
            });
        },
   
    };
    $(window).on('elementor/frontend/init', Privsa.init);
}(jQuery, window.elementorFrontend) ); 

