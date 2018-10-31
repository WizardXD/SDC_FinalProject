
var x = document.querySelector("#demo");


$(document).ready(function () {
    getLocation();
});


function getLocation() {

    // This ask for the permission from the user whether we can get their location

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    //If permission denied
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
