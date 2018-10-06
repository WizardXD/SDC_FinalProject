(function () {
    "use strict";

    var groupname;
    var username;
    var password;
    var password2;
    var school;
    var name1;
    var name2;

    $(document).ready(function () {

        // add/remove input field
        //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
        $(".add-more").click(function () {
            var html = $(".copy-fields").html();
            $(".membernames").after(html);
        });
        //here it will remove the current value of the remove button which has been pressed
        $("body").on("click", ".remove", function () {
            $(this).parents(".control-group").remove();
        });

        $("#registerbtn").bind("click", function () {
                registerUser();
            }
        });
    });


    function registerUser() {
          
            groupname = $("#newgroupname").val();
            username = $("#newusername").val();
            password = $("#newpassword").val();
            password2 = $("#newpassword2").val();
            school = $("#school").val();
            name1 = $("#name1").val();
            name2 = $("#name2").val();
        
                var url = serverURL() + "/registeruser.php";

                var JSONObject = {
                    "groupname": groupname,
                    "username": username,
                    "password": password,
                    "school": school,
                    "name1": name1,
                    "name2": name2
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

