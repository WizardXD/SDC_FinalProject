$(document).ready(function () {


    //register button
    $("#registerbtn").bind("click", function () {
        
        var schandinst;

        schandinst = $("#school").val();
        alert(schandinst);
    });
});


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