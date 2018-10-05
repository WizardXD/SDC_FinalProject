(function () {
    "use strict";

    var groupname;
    var username;
    var password;
    var password2;
    var school;

    $(document).ready(function () {

        // add/remove input field
        //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
        $(".add-more").click(function () {
            var html = $(".copy-fields").html();
            $(".after-add-more").after(html);
        });
        //here it will remove the current value of the remove button which has been pressed
        $("body").on("click", ".remove", function () {
            $(this).parents(".control-group").remove();
        });

        //validation
        $("#RegisterForm").validate({
            messages: {
                newgroupname: "employee name is required",
                newusername: "username is required"
            },
            focusInvalid: false,
            submitHandler: function () {
                return false;
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().parent().after());
            },
        });
        $("#registerbtn").bind("click", function () {
            if ($("#RegisterForm").valid()) {
                registerUser();
                //alert("Hi");
            }
        });
    });


    function registerUser() {
        if ($("#RegisterForm").valid()) {
          
            groupname = $("#newgroupname").val();
            username = $("#newusername").val();
            password = $("#newpassword").val();
            password2 = $("#newpassword2").val();
            school = $("#school").val();

            if (_validate()) {
                var url = serverURL() + "/registeruser.php";

                var JSONObject = {
                    "groupname": groupname,
                    "username": username,
                    "password": password,
                    "school": school
                };

                $.ajax({
                    url: url,
                    type: 'GET',
                    data: JSONObject,
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    success: function (arr) {  
                        _getNewUserResult(arr);  //execute this if success 
                    },
                    error: function () {
                        validationMsg();  //execute validation msg if theres an error
                    }
                });
            }
        }
    }

    function _getNewUserResult(arr) {
        if (arr[0].result === 1) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            validationMsgs("New User created", "Validation", "OK");
        }
        else {
            validationMsgs("User ID already exist", "Validation", "OK");
        }
    }
})();

