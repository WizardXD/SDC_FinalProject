// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";

    var username, password, JSONObject, url; //global variables



    $(document).ready(function () {

        /* Login and Password Field */
        /*jQuery Validation API */
        $('#authForm').validate({

            /* To check what this API does*/
            messages: {
                username: "Username is required",
                txtpwd: "Password is required",

            },

            focusInvalid: false,
            submitHandler: function () {
                return false;
            },

            errorPlacement: function (error, element) {
                error.appendTo(element.parent().after());
                //error.appendTo(element.parent().parent().after());
            }

        }); /* End of Validation*/





        //register button
        $("#rgstrbtn").bind("click", function () {
            window.location = "register.html";
        });

        $("#lgnbtn").bind("click", function () {
            if ($("#authForm").valid()) {
                login();
            }
        });







    }); /* End of Document Ready */

    /* Login Function */


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
            success: function (data) { //function to be called if the request succeeds //this function will be called
                loginResult(data);
            },




            //if (data.account_role == "adm" && data.result == "1") {
            //  window.location = '../facilitator.html';
            //} else if (data.account_role == 'student' && data.result == '1') {
            //  localStorage.setItem("username", username);
            //localStorage.setItem("password", password);
            //window.location = '../main.html';
            //}
            //else if (data.account_role == 'teacher' && data.result == '1') {
            //  window.location = '../teacher.html'
            //}

            //  } 
        });
    }

    // error: function () {
    //console.log('error');
    //}


    /* Login result function to parse */

    /* Need to convert to string and have triple equals */
    function loginResult(data) {
        if (data.account_role == "adm" && data.result == "1") {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location = '../facilitator.html';

        } else if (data.account_role == 'student' && data.result == '1') {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location = '../main.html';
        } else if (data.account_role == 'teacher' && data.result == '1') {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location = '../teacher.html';
        } else if (data.result == '0') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            ons.notification.alert('Username or Password is incorrect. Please try again',{
                title: 'Not Found'
            });

=======
            alert("not working yo"); //Change this later when i reach home and have time :)
>>>>>>> parent of a32a90b... all working le
=======
            alert("not working yo"); //Change this later when i reach home and have time :)
>>>>>>> parent of a32a90b... all working le
=======
            alert("not working yo"); //Change this later when i reach home and have time :)
>>>>>>> parent of a32a90b... all working le
        }


    } /* End of the function*/


})();
