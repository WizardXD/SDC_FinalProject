$(document).ready(function () {
    userdetails();
});

//function to display the details of the artefact
function userdetails() {
    var url = serverURL() + "/userdetail.php";
    var role = localStorage.getItem("role");

    var JSONObject = {
        "role": role
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            ShowUserDetails(arr);
        },
        error: function () {
            alert("Error");         //Change to validation message 
        }
    });
}

function ShowUserDetails(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t;
            t = "<div class='card'>" +
            "Username: " + arr[i].username + "</br>" + "Email: " + arr[i].email + "</br>" + 
            "School: " + arr[i].school + "</br>" + "Contact No: " + arr[i].phone + "</br>" + 
            "User Type: " + arr[i].role + "</p>" +
            "<p><ons-button modifier='large' id='btnEdit'>" + "Edit" + "</ons-button></p>"
            "</div>";
        $("#userdetail").append(t);
    }
}

