$(function() {
  //header scroll class

  $(window).on("scroll", function(e) {
    if ($(window).scrollTop() > 200) {
      $("header").addClass("header-scrolled");
    } else {
      $("header").removeClass("header-scrolled");
    }
  });

  //Initialize counterjs
  $(".counter").counterUp({
    delay: 10,
    time: 1500
  });

  // Slick js initialize
  $("#quotes-1 .qts-wrap").slick({
    prevArrow: $(".slick-cs-prev"),
    nextArrow: $(".slick-cs-next")
  });

  $("#quotes-2 .testimoni-wrap").slick({
    prevArrow: $(".slick-cs2-prev"),
    nextArrow: $(".slick-cs2-next")
  });

  // Custom collapse
});
