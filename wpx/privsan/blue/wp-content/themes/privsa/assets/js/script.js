(function($) {
  "use strict";
  
/*==========================================================
   //click on go to current section
======================================================================*/
$('.main-menu li.scroll > a').on('click', function() {
  $('html, body').animate({scrollTop: $(this.hash).offset().top - 0}, 1000);
  return false;
});



/*==========================================================
Side Offset menu open
======================================================================*/

if ($('.navSidebar-button').length > 0) {
$('.navSidebar-button').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.info-group').addClass('isActive');
});
}
if ($('.close-side-widget').length > 0) {
$('.close-side-widget').on('click', function (e) {
  e.preventDefault();
  $('.info-group').removeClass('isActive');
});
}
$('body').on('click', function (e) {
$('.info-group').removeClass('isActive');
});
$('.xs-sidebar-widget').on('click', function (e) {
e.stopPropagation();
});

/* ----------------------------------------------------------- */
/*  dropdown menu clickalbe in Mobile
/* ----------------------------------------------------------- */

$('.dropdown > a').on('click', function(e) {
e.preventDefault();
if($(window).width() > 991)
{
   location.href = this.href; 
} 
var dropdown = $(this).parent('.dropdown');
dropdown.find('>.dropdown-menu').slideToggle('show');
$(this).toggleClass('opened');
return false;
});
/* ----------------------------------------------------------- */
/*  menu color handle when scroll each section
/* ----------------------------------------------------------- */
function handleDarkSectionColors() {
var section = $('.bg-dark-section');
var sectionClass;

if (section.length > 0) {
  var menuColor = $('.main-menu');
  var self_window;

  $(window).on('scroll', function(){
      self_window = $(this);
      activeSection(self_window);
  });

  function activeSection(self_window) {
       var st = self_window.scrollTop() + self_window.height() / 2;
      section.each(function(){

          var sectionOffset = $(this).offset().top;
          var currentSection = $(this);
          if (currentSection.hasClass('bg-dark-section')) {
              sectionClass = 'light-color';
          } 

          if (sectionOffset + currentSection.height() > st && st > sectionOffset) {
              menuColor.addClass(sectionClass);
              return false;
          } else {
              menuColor.removeClass(sectionClass);
          }
      });
  }
}
}


handleDarkSectionColors();


/* ----------------------------------------------------------- */
/*  menu active class add when scroll each section
/* ----------------------------------------------------------- */

  function ScrollSection() {

      var contentTop = [];
      var contentBottom = [];
      var winTop = $(window).scrollTop();
      var rangeTop = 200;

      $('.main-menu').find('li.scroll > a').each(function() {
          var atr = $(this).attr('href');
          if ($(atr).length > 0)
          {
              contentTop.push($($(this).attr('href')).offset().top);
              contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
          }

      });

      $.each(contentTop, function(i) {

          if (winTop > contentTop[i] - rangeTop) {

              $('.main-menu li.scroll').removeClass('active').eq(i).addClass('active');
          }
      });

  }

  /* ----------------------------------------------------------- */
  /*  Back to top
  /* ----------------------------------------------------------- */

  $(window).on("scroll", function() {
      if ($(window).scrollTop() > $(window).height()) {
      $(".BackTo").fadeIn("slow");
      } else {
      $(".BackTo").fadeOut("slow");
      }
  });
  $("body, html").on("click", ".BackTo", function(e) {
      e.preventDefault();
      $("html, body").animate(
      {
          scrollTop: 0
      },
      800
      );
  });

  //when section scroll class pass on menu
  $(window).on('scroll', function() {
      ScrollSection();
  });

  $(window).on("scroll", function() {
    var scrolltop = $(window).scrollTop(),
      docHeight = $(document).height() / 2;

    if (scrolltop > docHeight) {
      $(".back_to_top").fadeIn("slow");
    } else {
      $(".back_to_top").fadeOut("slow");
    }
  });
  $("body, html").on("click", ".back_to_top", function(
    e
  ) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });

/**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
    $(window).on('scroll', function () {
      /**Fixed header**/
      if ($(window).scrollTop() > 250) {
        $('.header-transparent').addClass('sticky');
      } else {
        $('.header-transparent').removeClass('sticky');
      }
});


 
})(jQuery);

