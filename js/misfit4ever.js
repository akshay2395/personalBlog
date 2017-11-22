$(document).ready(function(){

  $(window).scroll(function(){
    var scrollTop = 0;
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $('#navigationBar').addClass('scrolledNav');
    }
    else if (scrollTop < 100) {
      $('#navigationBar').removeClass('scrolledNav');
    }
});

  $("#homeLink").click(function(){
    $path=$("#firstPage").offset().top ;
    $("body,html").animate({scrollTop: $path},1000);
  });

  $("#aboutLink").click(function(){
    $path=$("#about").offset().top - 200;
    $("body,html").animate({scrollTop:$path},1000);
  });

  $("#contactLink").click(function(){
    $path=$("#contact").offset().top - 200;
    $("body,html").animate({scrollTop:$path},1000);
  });
});
