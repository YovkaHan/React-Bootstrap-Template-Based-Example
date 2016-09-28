window.footer_show = false;
$( window ).on('scroll', function() {
  var h = $('.app-footer').height();
  $('body').css({'padding-bottom' : h});
 // console.log($(document).height()+" ... "+$(window).height()+" ... "+$(window).scrollTop());
  // --FOOTER
  if(($(document).height() - ($(window).height() + $(window).scrollTop())) <= 3) {
    $('.app-footer').stop().animate({
      bottom: 0
    }, this.speed, function () {
      footer_show = true;
    });
  }
  if((($(document).height() - ($(window).height() + $(window).scrollTop())) >= 4)&& window.footer_show == true) {
    $('.app-footer').stop().animate({
      bottom: -(h)
    }, this.speed, function () {
      footer_show = false;
    });
  }
  // --FOOTER
});

