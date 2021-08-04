/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var button = document.querySelector( "button" );
button.addEventListener( "click", function( ev ) {
        alert( "You must be interested in Sharpeis" );
    }, false)

function replaceit() {
  var src_str = ("DO YOU NOT LOVE SHARPEIS");
  var str_rep = src_str.replace("NOT", "");
  document.getElementByID("replace1").innerHTMl = str_rep;;
}

function reverseit() {
  var str = "sieprahs evol i";
  var res = str.split(""); 
  res.reverse(); 
  str = res.join("");
  document.getElementById("demo").innerHTML = str; 

}
       
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
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);