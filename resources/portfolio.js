$(document).ready(function() {
  $('.content-welcome-overlay').delay(1800).fadeOut();
  $('.container-portfolio').delay(100).fadeIn();

  $(".toggable-title").click(function(e) {
    $(e.currentTarget).closest(".tile-info-container").find(".tile-info-wrapper").toggle(1000);
  });
});
