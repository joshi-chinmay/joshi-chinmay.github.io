$(document).ready(function() {
  $('.content-welcome-overlay').delay(2600).fadeOut();
  $('.container-portfolio').delay(100).fadeIn();

  $(".toggable-title").click(function(e) {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).closest(".tile-info-container").find(".tile-info-wrapper").toggle(1000);
  });
});
