(function () {


    getuser();


    //variable stores the fields of a user's profile
 
    var adminname;
    var username;
    var password;
    var email;
    var phone;

 
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



     //START
     function getuser() {
    
        var url = serverURL() + "/getuserdetails.php";
        var username = decodeURIComponent(getUrlVars()["username"]);

        var JSONObject = {
            "username": username,
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                userresult(arr);
            },
            error: function () {
                validationMsgs();
            }
        });
    }

    function userresult(arr) {

        for (var i = 0; i < arr.length; i++) {
           var displaydetails = 
            //input field for Name
          "<p>Name: <input type='text' id='nadminname' value='" + arr[i].adminname + "' min='6' required/></p>" +
           //input field for username
           "<p>Username: <input type='text' id='nusername' value='" + arr[i].username + "' min='6' required/></p>" +
           //input field for password
           "<p>Password: <input type='password' id='npassword' value='" + arr[i].password + "' required></p>" +
           //input field for email
           "<p>Email: <input type='email' id='nemail' value='" + arr[i].email + "'required></p>" +
            //input field for mobile number
            "<p>Mobile Number: <input type='number' id='nphone' value='" + arr[i].phone + "' required></p>";



           $("#individualuserdetails").append(displaydetails);

          
        


        }

    }

    //END

    

    function changeUser() {
        var newadminname = $("#nadminname").val();
        var newusername = $("#nusername").val();
        var newpassword = $("#npassword").val();
        var newemail = $("#nemail").val();
        var newphone = $("#nphone").val();

    
        var url = serverURL() + "/updateuser.php";

        var JSONObject = {
            "username": localStorage.getItem("username"),
            "adminname": newadminname,
            "username": newusername,
            "password": newpassword,
            "email": newemail,
            "phone": newphone
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
        var a = document.forms["ChangeUserDetails"]["nadminname"].value;
        var b = document.forms["ChangeUserDetails"]["nusername"].value;
        var c = document.forms["ChangeUserDetails"]["npassword"].value;
        var d = document.forms["ChangeUserDetails"]["nemail"].value;
        var e = document.forms["ChangeUserDetails"]["nphone"].value;
        
        if (a == "") {
          alert("Name must be filled up");
          return false;
        }
        else if (b == ""){
            alert("Username must be filled up");
            return false;
        }
        else if (c == ""){
            alert("Password must be filled up");
            return false;
        }
        else if (d == ""){
            alert("Email must be filled up");
            return false;
        }
        else if (e == ""){
            alert("Phone No must be filled up");
            return false;        
        }
          else {
              changeUser();
        }
      }
    
})();