$(document).ready(function () {
    rolenames();
    $("#btnAddUser").bind("click", function () {
        addUser();
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
            alert("Error");         //Change to validation message 
        }
    });
}

function ShowRoleNames(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t = "<ons-card><ons-button modifier='large' id='btnrole" 
        + arr[i].role + "'>" + "</ons-button></ons-card></ons-card>"; 
            
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
        alert("User already exist.");
    }

}
