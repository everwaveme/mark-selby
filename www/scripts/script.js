$(document).ready(function () {

  //Carousel for 'facts' section
  $('.js-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    // adaptiveHeight: true,
    speed: 1000,

  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //        arrows: false,
  //        centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //    },
  //    {
  //      breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //    }
  //  ]
  });
});

//AOS animation
AOS.init({
  // once: true,
});
