// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//         var yourName = $("input#yourName").val();
//         var yourEmail = $("input#yourEmail").val();
//         var yourPhone = $("input#yourPhone").val();

//         $(".yourName").text(yourName);
//         $(".yourEmail").text(yourEmail);
//         $(".yourPhone").text(yourPhone);

//         event.preventDefault();

//         $("#legilimens").show();

//     });

// });


//Bad practice but just showing off - The above code Works Perfect 


$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var yourName = $("input#yourName").val();
        var yourEmail = $("input#yourEmail").val();
        var yourPhone = $("input#yourPhone").val();

        $(".yourName").text(yourName).css("background-color", "red");
        $(".yourEmail").text(yourEmail).css("background-color", "red");
        $(".yourPhone").text(yourPhone).css("background-color", "red");

        event.preventDefault();

        $("#legilimens").show();

    });

});