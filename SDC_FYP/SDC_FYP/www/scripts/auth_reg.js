// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";      
        document.getElementById("lgnbtn").onclick = function () {//The following binds the element lgnbtn with a method onclick 
            var username = $("#username").val(); //Assiginging Login container
            var password = $("#password").val(); //Assigning Password container
            var dataString = "username=" + username + "&password=" + password + " "; // "&signup=" // username = username=user_input&password=password_input&signup= //maybe the signup is not necessary to parse


            alert(dataString);
            // Conditions to check //$.trim() function to removes all the newlines, spaces refer to jquery API
            // The .length property is being used to get the length of the of the trimmed username
            /*
            if ($.trim(username).length > 0 && $.trim(password).length > 0)
            {
                //Perform an asynchronous HTTP (Ajax) request to the server
                $.ajax({
                    type: "POST", //The connection type
                    url:  //which webpage to connect to in this instance the login.php
                    data: //data to parse 
                })
            }; //End of if stmt */



        };  


})();

