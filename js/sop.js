
  $('.box .link').on('click', function() {
      $(this).parents('.box').toggleClass('active');
    });

$(document).ready(function(){
  $('.adjust').on('click', function() {
      $(this).find('.box').toggleClass('active');
  });
});

  $('.hamburger__icon, .hamburger__site-menu').click(function(){
      $('.hamburger__icon, .hamburger__site-menu').toggleClass('active');
    });


$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 100) {
        $('.nav-bar').addClass('nav-bar--low');
    } else {
        $('.nav-bar').removeClass('nav-bar--low');
    }
    if (scrollTop > 100) {
        $('.nav-bar__item').addClass('nav-bar__item--low');
    } else {
        $('.nav-bar__item').removeClass('nav-bar__item--low');
    }
  });

$('.hamburger__icon').click(function(){
  $('.hamburger__site-menu.active').animate({
    opacity: 1,
    left: 0
  },800);
  return false

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




