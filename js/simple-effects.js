$(document).ready(function() {
	$("p").click(function() {
		$("#img-hidden").slideToggle('slow', function() {  //change the slideToggle with fadeOut/In, fadeToggle, slideUp/Down
      //Animation Complete
    });
		$("#img-showing").slideToggle('slow', function() {
      //Animation Complete
    });
	});
});