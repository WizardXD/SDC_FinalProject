(function () {

    //variable stores the fields of a user's profile
    var username;
    var password;
    var email;
    var school;
    var phone;
    var role;
 
    $(document).ready(function () {

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
*/
        $("#btnUpdateUser").bind("click", function () {
            validateForm();                
            //changeUser();
            }); 
           // if ($("#ChangeUserDetails").valid()) {
                 //execute
           // }
      

    
     });


    

    function changeUser() {
        
        var newusername = $("#nusername").val();
        var newpassword = $("#npassword").val();
        var newemail = $("#nemail").val();
        var newschool = $("#nschool").val();
        var newphone = $("#nphone").val();
        var newrole = $("#nrole").val();

    
        var url = serverURL() + "/updateuser.php";

        var JSONObject = {
            "username": localStorage.getItem("username"),
            "username": newusername,
            "password": newpassword,
            "email": newemail,
            "school": newschool,
            "phone": newphone,
            "role": newrole
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
        if (arr[0].result === 0) {

            alert("User details changed", "Validation", "OK");
            window.location = "facilitator.html";
        }
        else {
            alert("User details update failed", "Validation", "Try Again");
        }
    }
    
    function validateForm() {
        var a = document.forms["ChangeUserDetails"]["nusername"].value;
        var b = document.forms["ChangeUserDetails"]["npassword"].value;
        var c = document.forms["ChangeUserDetails"]["nemail"].value;
        var d = document.forms["ChangeUserDetails"]["nphone"].value;
        
        if (a == "") {
          alert("Username must be filled up");
          return false;
        }
        else if (b == ""){
            alert("Password must be filled up");
            return false;
        }
        else if (c == ""){
            alert("Email must be filled up");
            return false;
        }
        else if (d == ""){
            alert("Phone No must be filled up");
            return false;        
        }
          else {
              changeUser();
        }
      }
    
})();