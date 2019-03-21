$(document).ready(function() {
  $("#green").click(function() {
    $("body").removeClass().addClass("green-background");
  });

  $("#yellow").click(function() {
    $("body").removeClass().addClass("yellow-background");
  });

  $("#red").click(function() {
    $("body").removeClass().addClass("red-background");
  });

  $("#reset").click(function() {
    $("body").removeClass();
  });
});