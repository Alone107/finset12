$('.slider').slick({
  // appendDots: $('.review_dots'),
  arrows: false,
  slidesToShow: 1,
  // infinite: true,
  // waitForAnimate: false,
  dots: false,
  // responsive: [
    // {
      // breakpoint: 1100,
      // settings: {
        // slidesToShow: 1
      // }
    // }
  // ]
})

$('.review_arrows-prev').on('click', function (e) {
  e.preventDefault()
  $('.slider').slick('slickPrev')
})
$('.review_arrows-next').on('click', function (e) {
  e.preventDefault()
  $('.slider').slick('slickNext')
})