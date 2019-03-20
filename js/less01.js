$(document).ready(function() {

	$("h1").click(function() {
		alert("You clicked on a Header");
	});

	$("p").click(function() {
		alert("You clicked on a Paragraph");
	});

	$("img").click(function() {
		alert("You clicked on an Image");
	});

});



$(document).ready(function() {

    function capLetter(userSentence) {

        var userSentence = prompt("Enter any sentence...");       
        var userSentenceLength = userSentence.length;
        var firstLetter = userSentence.slice(0, 1).toUpperCase();
        var lastLetter = userSentence.slice((userSentenceLength - 1), userSentenceLength).toUpperCase();
        var middleSentence = userSentence.slice(1, (userSentenceLength - 1));
        var newString = firstLetter + middleSentence + lastLetter;

        alert(newString);

    }

    capLetter(userSentence);

    function reverseOrder(lastLetter, firstLetter) {

    	var reversedLetters = lastLetter + middleSentence + firstLetter;    	
    	alert(reversedLetters);
    }

    reverseOrder(lastLetter, firstLetter);
    
});