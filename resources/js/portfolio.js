$(document).ready(function() {
  resizeWelcomeTextSize();

  $(window).resize(function() {
    resizeWelcomeTextSize();
  });

  // deside the mode of the website
  var today = new Date().getHours();
  if (today >= 7 && today <= 18) {
    $("body").addClass("day-time");
    $(".day-btn").addClass("btn-success");
    $(".day-btn").removeClass("btn-secondary");
  } else {
    $("body").addClass("night-time");
    $(".night-btn").addClass("btn-success");
  }

  $(".day-btn").click(function(e) {
    $(".day-btn").addClass("btn-success");
    $(".night-btn").removeClass("btn-success");
    $("body").addClass("day-time");
    $("body").removeClass("night-time");
  });

  $(".night-btn").click(function(e) {
    $(".night-btn").addClass("btn-success");
    $(".day-btn").removeClass("btn-success");
    $("body").addClass("night-time");
    $("body").removeClass("day-time");
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

  $(".skip-to-main-content").click(function(){
    skipToContent();
  });

  setTimeout(function() {
    skipToContent();
  }, 6000);
});

var skipToContent = function() {
  $(".welcome-note-container").slideUp(600, function() {
    $(".welcome-note-container").hide();
    $(".main-page").show("450");
  });
}

var resizeWelcomeTextSize = function() {
  if(window.innerWidth < 500) {
    $(".welcome-note > .typewriter > h1").css("font-size", "25px");
  }
}
