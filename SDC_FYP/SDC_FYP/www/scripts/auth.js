// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


var userid, password, JSONObject, url; //global variables











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
    url = "localhost:80" + "/login.php"; //have an issue 
    userid = $("#username").val();
    password = $("#password").val();


    //JSONObject
    JSONObject = {
        "userid": userid, //Key:value
        "password": password //Key:value
    };

    //ajax to call
    $.ajax({
        url: url, //A string containing the URL to which the request is sent.
        type: 'POST',
        data: JSONObject, //Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests.
        dataType: 'json', //Evaluates the response as JSON and return a JS object
        contentType: "application/json; charset=utf-8",
        success: function (data) { //function to be called if the request succeeds //this function will be called

            if (data.results = FALSE && data.results.length < 0) {
                console.log(alert("login failed"));


            } else if (data.role === "admin") {
                console.log(alert("this is admin account"));
            } else { console.log("previousnotworking!"); }

            //error: function () {
               // console.log("previousnotworking!");
           // }
        }
    });

    /*   function _getLoginResult(arr) {
           if (arr[0].result.trim() !== "0") {
               // Key, data
               localStorage.setItem("userid", userid);
               localStorage.setItem("password", password);
               // Message, Title, Button
               validationMsgs("Login OK", "Information", "OK");
               window.location = "home.html";
           } else {
               validationMsgs("Error in Username Or Password", "Validation", "Try Again");
   
           }
       }*/

}