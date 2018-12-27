$(document).ready(function () {
    getusers();
    $("#btnAddUser").bind("click", function () {
        addUser();
    });
});

//function to display the details of the artefact, such as image and background information
function getusers() {
    var url = serverURL() + "/getusers.php";

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
        var t = "<ons-card><ons-button modifier='large' id='btnuser" + arr[i].username + "'>" +
        arr[i].role + "</ons-button></ons-card></ons-card>"; 
            
        $("#User").append(t);

        $("#btnuser" + arr[i].username).bind("click", { id: arr[i].username }, function (event) {
            var data = event.data;
            _showResult(data.id);
        });
    }
}

function _showResult(username) {
    localStorage.setItem("username", username);
    window.location = "accountmanagement.html?username=" + username;
}

//insert trail into database
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
        window.location = "accountmanagement.html";
    } else if (arr[0].result === 0) {
        alert("User already exist.");
    }
}