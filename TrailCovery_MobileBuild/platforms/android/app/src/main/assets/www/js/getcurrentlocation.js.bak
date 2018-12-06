var longitude;
var latitude;
var username = localStorage.getItem('username');    



document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
} 

function onSuccess(position) {
     
    latitude= position.coords.latitude;
	longitude= position.coords.longitude;



    var url = 'https://mp18.projectsbit.org/sdc/locationupdate.php'; //have an issue 

        //JSONObject
        var JSONObjectMAP = {
            "longitude": longitude, //Key:value
            "latitude": latitude, //Key:value
            "username" : username

        };

        //ajax to call
        $.ajax({
            url: url, //A string containing the URL to which the request is sent.
            type: 'GET',
            data: JSONObjectMAP, //Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests.
            dataType: 'json', //Evaluates the response as JSON and return a JS object
            contentType: "application/json; charset=utf-8",
            success: function (data) { //function to be called if the request succeeds //this function will be called
                console.log("success");
            },




            //  } 
        });
		
	}

    // onError Callback receives a PositionError object
    //
function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
}

    // Options: throw an error if no update is received every 30 seconds.
    //
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
