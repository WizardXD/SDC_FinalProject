(function () {

    //variable stores the fields of a user's profile
    var username;
    var password;
    var email;
    var school;
    var phone;
    var role;
 
    $(document).ready(function () {
        changeUser();

        $("#btnEdit").bind("click", function () {
            getProfile();
        });


       /*  //validation for ChangePasswordForm
        $("#ChangeUserDetails").validate({
            rules: {
                username: {
                    minlength: 6
                },
                password: {
                    minlength: 8
                },
                phone: {
                    minlength: 8
                }
            },
            messages: {
                username: "username is required",
                password: "password is required",
                phone: "phone no is required",
            },
            focusInvalid: false,
            submitHandler: function () {
                return false;
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().parent().after());
            },
        });

        $("#btnSaveUser").bind("click", function () {
            
            if ($("#ChangeUserDetails").valid()) {
                changeUser(); //execute
            }
        });
 */

    });



    
   

    //Profile Section
    function getProfile() {
        var url = serverURL() + "/getuser.php"; //execute getprofile

        var JSONObject = {
            "username": localStorage.getItem("username")
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getProfileResult(arr);
            },
            error: function () {
                validationMsg(); //fail
            }
        });
    }

    function _getProfileResult(arr) {
        //move the values returened by the server to the respective variables
        username = arr[0].username;
        password = arr[0].password;
        email = arr[0].email;
        school = arr[0].school;
        phone = arr[0].phone;
        role = arr[0].role;

        $("#username").html("Username: " + username); //show userid in the ,div.
        $("#password").html("Password: " + password); //show email in the ,div.
        $("#email").html("Email: " + email); //show description in the ,textarea.
        $("#school").html("School: " + school);
        $("#phone").html("Phone: " + phone);
        $("#role").html("Role: " + role);

    }


    function changeUser() {
        var username = $("#username").val();
        var password = $("#password").val();
        var email = $("#email").val();
        var school = $("#school").val();
        var phone = $("#phone").val();
        var role = $("#role").val();

        var url = serverURL() + "/savenewuser.php";

        var JSONObject = {
            "username": localStorage.getItem("username"),
            "password": password,
            "email": email,
            "school": school,
            "phone": phone,
            "role": role
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _changeUserResult(arr);
            },
            error: function () {
                validationMsgs();
            }
        });
    }

    function _changeUserResult(arr) {
        if (arr[0].result === 1) {
            localStorage.setItem($("#username").val(), username);
            localStorage.setItem($("#password").val(), password);
            localStorage.setItem($("#email").val(), email);
            localStorage.setItem($("#school").val(), school);
            localStorage.setItem($("#phone").val(), phone);
            localStorage.setItem($("#role").val(), role);


            validationMsgs("User details changed", "Validation", "OK");

            $("#username").val("");
            $("#password").val("");
            $("#email").val("");
            $("#school").val("");
            $("#phone").val("");
            $("#role").val("");
        }
        else {
            validationMsgs("User details update failed", "Validation", "Try Again");
        }
    }



})();