$(document).ready(function () {
    rolenames();

// Validation
$('#userPopup').validate({
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
    }, //End of jQueryRules
    messages: {
        username: "Username is required",
        password: "Password is required", 
        phone:"Contact No is required"

    }, //End of Message

    focusInvalid: false,
    submitHandler: function () {
        return false;
    },

    errorPlacement: function (error, element) {
        error.appendTo(element.parent().after());
        //error.appendTo(element.parent().parent().after());
    }

}); 

    $("#btnAddUser").bind("click", function () {
        if ($("#userPopup").val()) {
        addUser();
        }
    });
});


function rolenames() {
    var url = serverURL() + "/getuser.php";

    var JSONObject = {
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            ShowRoleNames(arr);
        },
        error: function () {
            validationMsg();          
        }
    });
}

function ShowRoleNames(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t = "<ons-card><ons-button modifier='large' id='btnrole" 
        + arr[i].role + "'>" + arr[i].username + "</ons-button></ons-card></ons-card>"; 
            
        $("#User").append(t);

        $("#btnrole" + arr[i].role).bind("click", { id: arr[i].role }, function (event) {
            var data = event.data;
            _showResult(data.id);
        });
    }
}

function _showResult(role) {
    localStorage.setItem("role", role);
    window.location = "usermanagement.html?role=" + role;
}
 
//insert user into database
function addUser() {
    username = $("#username").val();
    password = $("#password").val();
    email = $("#email").val();
    school = $("#school").val();
    phone = $("#phone").val();
    role = $("#role").val();

    url = serverURL() + "/adduser.php"; 
   
    var JSONObject = {
        "username": username,
        "password": password,
        "email": email,
        "school": school,
        "phone": phone,
        "role": role,
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            _getAddUserFunction(arr);
        }, error: function () {
            validationMsg();
        }
    });
}

function _getAddUserFunction(arr) {
    if (arr[0].result === 1) {
        alert("User has been added");
        window.location = "account_management.html";
    } else if (arr[0].result === 0) {
        alert("Account already exist.")
    }

}

