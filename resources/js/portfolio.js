$(document).ready(function() {
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
