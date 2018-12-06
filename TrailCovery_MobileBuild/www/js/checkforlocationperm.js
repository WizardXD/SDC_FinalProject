
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");

}

var longitude, latitude





var onSuccess = function(position) {
        latitude=position.coords.latitude;
        longitude=position.coords.longitude;
    
    
    };
    
    
    navigator.geolocation.getCurrentPosition(onSuccess);



