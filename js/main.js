$('.slider').slick({
  // appendDots: $('.review_dots'),
  arrows: false,
  slidesToShow: 1,
  infinite: true,
  waitForAnimate: false,
  dots: false,
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       adaptiveHeight:Boolean,
  //     }
  //   }
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


$('.burger,.overlay').on('click', function (e) {
  e.preventDefault()
  $('.header__top-content').toggleClass('header__top-content--open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('active')
  $('body').toggleClass('scroll')
})




// $("a, .footer__top-logo,.join__wraper-btn, .link-home, .header__logo").on("click", function(e) {
//   e.preventDefault()
//   var id  = $(this).attr('href'),
//   top = $(id).offset().top+100
//   $('body,html').animate({ scrollTop: top }, 1500)
// })
