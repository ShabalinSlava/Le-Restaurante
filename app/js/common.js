$(function() {
  $("#online-menu-slider").slick({
    dots: false,
    arrows: true,
    appendArrows: $(".online-slider-arrows"),
    nextArrow: "<button>next offer<div class=arrow></div></button>"
  });
  $(".slick-prev").hide();

  $("#menu-button").click(function() {
    $("#navigation").addClass("visible");
  });

  $("#navigation-close").click(function() {
    $("#navigation").removeClass("visible");
  });

  $("#navigation-block a").click(function() {
    $("#navigation").removeClass("visible");
  });

  $("#category-slider").slick({
    dots: false,
    arrow: true,
    appendArrows: $(".category-arrows")
  });

  $(document).ready(function() {
    $(".main-restaurante-menu").on("click", "a", function(event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1000);
    });
  });
});
