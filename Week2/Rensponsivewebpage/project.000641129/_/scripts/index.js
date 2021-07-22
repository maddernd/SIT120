/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var button = document.querySelector( "button" );
button.addEventListener( "click", function( ev ) {
        alert( "You must be interested in Sharpeis" );
    }, false)

 function myFunction() {
                var greeting;
                var time = new Date().getHours();
                if (time < 10) {
                    greeting = "Woof Morning Food";
                } else if (time < 20) {
                    greeting = "Woof Dinner time";
                } else {
                    greeting = "ZZZZZZZZ";
                }
                document.getElementById("greeting").innerHTML = greeting;
            }