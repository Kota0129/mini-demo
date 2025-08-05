$(function() {
    var $header = $('.header');
    var headerHeight = $header.outerHeight();
  
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > headerHeight) {
        $header.addClass('is-fixed');
      } else {
        $header.removeClass('is-fixed');
      }
    });
  });
  