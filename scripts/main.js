$(document).ready(function () {
  $('.mob-menu-btn').click(function (e) { 
    $('.mob-menu').css('transform','translate(0)')
  });
});
$('.btn-close').click(function (e) { 
  $('.mob-menu').css('transform','translateX(100%)')
});
AOS.init();