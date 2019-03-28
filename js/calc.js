// //Business/Back-end Logic

// var add = function(number1, number2) {
//     return number1 + number2;
// };

// var subtract = function(number1, number2) {
//     return number1 - number2;
// };

// var multiply = function(number1, number2) {
//     return number1 * number2;
// };

// var division = function(number1, number2) {
//     return number1 / number2;
// };


// //UI/Front-end Logic

// $(document).ready(function() {
//   $("form#add").submit(function(event) {
//   event.preventDefault();
  
//   var number1 = parseInt($("#add1").val());
//   var number2 = parseInt($("#add2").val());
  
//   var result = add(number1, number2);
  
//   $("#calc-result").text("Result: " + result);
  
//   });
    
// });



// Variation where I define the functions straight without using "var" i.e var add = 

//Back-end -- Global Functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

//Front-end -- User Interaction

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  
  var num1 = parseInt($("#add1").val());
  var num2 = parseInt($("#add2").val());

  var addResult = add(num1, num2);

  $("#calc-result").text("Result: " + addResult);
  });
  
});