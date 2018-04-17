$(document).ready(function() {
  $(".toggable-title").click(function(e) {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).closest(".tile-info-container").find(".tile-info-wrapper").toggle(1000);
  });
});
