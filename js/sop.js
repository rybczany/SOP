$('.box .link').on('click', function() {
  $(this).parents('.box').toggleClass('active');
})