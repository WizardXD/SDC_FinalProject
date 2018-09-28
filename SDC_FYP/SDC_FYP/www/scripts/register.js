(function () {

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
                newusername: "new user name is required",
                newemail: "new email address is required and must beof the format a@b.c",
                newpassword: "new password is required",
                newpassword2: "new password again is required and must be the same as new password",
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
            if ($("#RegisterForm").valid()) {
                registerUser();
            }
        });
    });

    function registerUser() {
        var newusername;

        newusername = $("#newusername").val();        alert(newusername);
        //validationMsgs(username, "Information", "OK");
        //validationMsgs(password, "Information", "OK");
    }
})();


/*
    function savenewuser() {
        if ($("#NewUserForm").valid()) {
            //var profileimage = imgNewUserPictureName;

            var firstname = $("#newfirstname").val();
            var lastname = $("#newlastname").val();
            var username = $("#newusername").val();
            var email = $("#newemail").val();
            var password = $("#newpassword").val();
            var passwordagain = $("#newpassword2").val();
            var contact = $("#newcontactno").val();
            var institution =  $("#schandinst").val();



                //URL Container 
                var url = serverURL() + "/registeruser.php";

                //JSONObject Container
                var JSONObject = {
                    "firstname": firstname,
                    "lastname": lastname,
                    "username": username,
                    "email": email,
                    "password": password,
                    "institution": institution,
                    "contact": contact,
                    //"profileimage": profileimage
                };


                //ajax connnection 
                $.ajax({
                    url: url,
                    type: 'GET',
                    data: JSONObject,
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    success: function () {
                        console.log("success");
                    },
                    error: function () {
                        console.log("error");
                    }
                });

        }
    };
*/