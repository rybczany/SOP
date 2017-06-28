$('.box .link').on('click', function() {
  $(this).parents('.box').toggleClass('active');
});

$(document).ready(function() {
    $('.adjust').on('click', function() {
        $(this).find('.box').toggleClass('active');
    });
});

$('.hamburger__icon').click(function(){
    $('.hamburger__site-menu').toggleClass('active');
  });
$('.hamburger__icon').click(function(){
    $(this).toggleClass('active');
  });
$('.hamburger__site-menu').click(function(){
    $(this).toggleClass('active');
  });





/*-------SLIDER*/

$(document).ready(function(){
  $('.slider--autoplay').slick({
    slidesToShow: 1,
  	slidesToScroll: 1,
  	fade: true,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	dots: true,
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
    focusOnSelect: true,
  });
});


