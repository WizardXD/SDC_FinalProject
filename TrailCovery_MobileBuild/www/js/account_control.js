(function(){

$(document).ready(function () {
    roledetails();

/* // Validation
$('#addUserForm').validate({
    rules: {
        username: {
            minlength: 6
        },
        password: {
            minlength: 8
        },
        phone: {
            minlength: 8
        },
        email: {
            email: true
        }
    }, //End of jQueryRules
    messages: {
        username: {
            minlength: "Your username must be at least 6 characters long"
        },
        password: {
            minlength: "Your password must be at least 8 characters long"
    },
        phone: {
            minlength: "Your phone no must be at least 8 characters long"
},
        email: {
            email: "Your email must be a correct email format"
    } //End of Message

    }

}); 
 */


    $("#btnAddUser").bind("click", function () {
      // if ($("#addUserForm").validate()); {
        addUser();
      //}
    });
});



function roledetails() {
    var url = serverURL() + "/getuser.php";
    var username = decodeURIComponent(getUrlVars()["username"]);
    var JSONObject = {
        "username": username
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            ShowRoleDetails(arr);
        },
        error: function () {
            validationMsg();          
        }
    });
}

function ShowRoleDetails(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t;
        t = "<ons-card>" + 
        "Facilitator ID: " + arr[i].facilitatorid + "</br>" + 
        "Name: " + arr[i].adminname + "</br>" + 
        "Username: " + arr[i].username + "</br>" + 
        "Email: " + arr[i].email + "</br>" + "Phone: " + arr[i].phone + "</br>" + 
        "Facilitator Code: " + arr[i].facilitatorcode + "</br>" + 
        "<p><ons-button modifier='large' id='btnEdit" + arr[i].username + "'>Edit" + "</ons-button></p>"
        "</div>";
        "</ons-card>";
    $("#User").append(t);

    $("#btnEdit" + arr[i].username).bind("click", { id: arr[i].username }, 
    function (event) {
        var data = event.data;
        _showResult(data.id);
    
    });
}
}

function _showResult(username) {

    window.location = "updateuser.html?username=" + username;
    
    }


//insert user into database
function addUser() {
    adminname = $("#adminname").val();
    username = $("#username").val();
    password = $("#password").val();
    email = $("#email").val();
    phone = $("#phone").val();

        url = serverURL() + "/adduser.php"; 


    var JSONObject = {
        "adminname": adminname,
        "username": username,
        "password": password,
        "email": email,
        "phone": phone,

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
        window.location = "facilitator.html";
    } else if (arr[0].result === 0) {
        alert("Account already exist")
    }


}


})();
