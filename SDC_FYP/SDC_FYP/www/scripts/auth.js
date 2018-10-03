// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


var username, password, JSONObject, url; //global variables











$(document).ready(function () {


        //register button
        $("#rgstrbtn").bind("click", function () {
            window.location = "register.html";
        });

        $("#lgnbtn").bind("click", function () {

            login();
        });







});




function login() {
    url = serverURL() + "/login.php"; //have an issue 
    username = $("#username").val();
    password = $("#password").val();


    //JSONObject
    JSONObject = {
        "username": username, //Key:value
        "password": password //Key:value
    };

    //ajax to call
    $.ajax({
        url: url, //A string containing the URL to which the request is sent.
        type: 'GET',
        data: JSONObject, //Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests.
        dataType: 'json', //Evaluates the response as JSON and return a JS object
        contentType: "application/json; charset=utf-8",
        success: function () { //function to be called if the request succeeds //this function will be called
            alert([""0"".result]);
            

                  
            

        }
    });
}