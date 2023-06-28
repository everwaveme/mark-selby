$(document).ready(function () {

  //Carousel for 'facts' section
  $('.js-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    adaptiveHeight: true,
    speed: 1000,
  });
});

//AOS animation
AOS.init();
