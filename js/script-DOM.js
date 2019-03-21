$(document).ready(function() {
    $("button#hello").click(function() {
        $("ul#user").prepend("<li>Hello</li>");
        $("ul#webpage").prepend("<li>Hello to you too! :)</li>");
        $("ul#user").children("li").first().click(function() {
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function() {
            $(this).remove();
        });
    });
    $("button#goodbye").click(function() {
        $("ul#user").prepend("<li>Goodbye</>");
        $("ul#webpage").prepend("<li>So long mate... ;(</li>");
        $("ul#user").children("li").first().click(function(event) {
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function() {
            $(this).remove();
        });
    });
    $("button#stop").click(function() {
        $("ul#user").prepend("<li>Stop copying me!");
        $("ul#webpage").prepend("<li>I havent copied a damn thing of yours mate... :)</li>");
        $("ul#user").children("li").first().click(function(event) {
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function() {
            $(this).remove();
        });
    });
});