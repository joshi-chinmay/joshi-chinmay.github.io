$(document).ready(function() {

  $(".menu-activator").click(function() {
    $(".container-menu").delay(8).fadeIn(function(){
      $(".menu-activator").hide();
    });
  });

  $(".menu-deactivator").click(function() {
    $(".menu-activator").show();
    $(".container-menu").delay(8).fadeOut();
  });

});
