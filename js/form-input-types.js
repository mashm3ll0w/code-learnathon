$(document).ready(function() {
  // var beverage = $("#beverage").val();

  // alert(beverage);


$("#beverage").click(function() {

  var beverage = $("#beverage").val();

  console.log(beverage);

});


$("#drinks").click(function() {
  var drinks = $("#drinks").val();
  console.log(drinks);
});
  
var iceFlavour = $("input:radio[name=flavour]").val();
console.log(iceFlavour);

var dob = $("#born").val();
console.log(dob);

var color = $("#color").val();
console.log(color);

});