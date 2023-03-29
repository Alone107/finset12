$('.slider').slick({
  // appendDots: $('.review_dots'),
  arrows: false,
  slidesToShow: 1,
  infinite: true,
  waitForAnimate: false,
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

setInterval(() => {
  if($(window).scrollTop() > 0 && $('.header__top-content').hasClass('header__top-content--open') === false)  {
    $(".burger").addClass('burger--folow')
  } else {
    $(".burger").removeClass('burger--folow')
  }
}, 0);
$('.burger,.overlay,.header__nav-item, .header__logo').on('click', function (e) {
  e.preventDefault()
  $('.header__top-content').toggleClass('header__top-content--open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('burger-x')
})



$("a, .footer__top-logo,.join__wraper-btn,.footer__top__nav-link, .link-home, .header__logo").on("click", function(e) {
  e.preventDefault()
  var id  = $(this).attr('href'),
  top = $(id).offset().top+100
  $('body,html').animate({ scrollTop: top }, 1500)
})
