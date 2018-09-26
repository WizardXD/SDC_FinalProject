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

$("#rgstrbtn").bind("click", function () {
    window.location = "register.html";
});




//register

$("#createaccbtn").bind("click", function () {
    alert("HI");
});

/*
(function () {
    var newusername;
    var newpassword;
    var newpassword2;
    var firstname;
    var lastname;
    var contactno;
    var email;

    $(document).ready(function () {
        $("#RegisterForm").validate({
            rules: {
                newemail: {
                    email: true
                },
                newpassword2: {
                    equalTo: "#newpassword"
                }
            },
            messages: {
                newemail: "new email address is required and must be of the format a@b.c",
                newpassword: "new password is required",
                newpassword2: "new password again is required and must be the same as new password"
            },
            focusInvalid: false,
            submitHandler: function () {
                return false;
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().parent().after());
            }
        });
        $("#registerbtn").bind("click", function () {
            alert("Login successfully");
        });
    });

});
*/


