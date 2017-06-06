$(document).ready(function(){
  $('.slider--autoplay').slick({
    slidesToShow: 1,
  	slidesToScroll: 1,
  	fade: true,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	dots: true,
  });
});
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});