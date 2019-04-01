$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    alert("Please Drink Responsibly");

    $("#drinks").show();
  }
    else  {
      alert("You are too young to take alcohol. Try a Soda ;)");

      $("#under-21").show();
    }
});