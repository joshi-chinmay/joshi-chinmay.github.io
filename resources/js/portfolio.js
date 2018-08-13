$(document).ready(function() {
  // deside the mode of the website
  var today = new Date().getHours();
  if (today >= 7 && today <= 19) {
    $("body").addClass("day-time");
    $(".toggleable-icon").removeClass("fa-moon-o");
    $(".toggleable-icon").addClass("fa-sun-o");
  } else {
    $("body").addClass("night-time");
    $(".toggleable-icon").addClass("fa-moon-o");
    $(".toggleable-icon").removeClass("fa-sun-o");
  }

  $(".day-night-mode-toggle").click(function(e) {
    $("body").toggleClass("day-time");
    $("body").toggleClass("night-time");

    $(".toggleable-icon").toggleClass("fa-moon-o");
    $(".toggleable-icon").toggleClass("fa-sun-o");
  });

  $(".toggable-title").click(function(e) {
    var $container = $(e.currentTarget).closest(".portfolio-main-content");
    $currentActiveTile = $(e.currentTarget).closest(".tile-info-container");

    $currentActiveTile.find(".toggable-title").toggleClass('active');
    $currentActiveTile.find(".tile-info-wrapper").toggle(700);

    var $allTiles = $container.find(".tile-info-container");
    $.each( $allTiles, function(index, elem) {
      var $elem = $(elem);
      if( $elem.data("id") !=  $currentActiveTile.data("id") ) {
        $elem.find(".toggable-title").removeClass('active');
        $elem.find(".tile-info-wrapper").hide(700);
      }
    });

  });
});
