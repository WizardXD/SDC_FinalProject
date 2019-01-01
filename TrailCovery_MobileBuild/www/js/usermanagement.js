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
            "<h2 style='text-align: center'>" + arr[i].username + "</h4>" +
            "<p style='text-align:justify;font-family: Arial, Helvetica, sans-serif;'>" + arr[i].email + arr[i].school + arr[i].phone + arr[i].role + "</p>" +
            "<p><ons-button modifier='large'>Edit</ons-button></p>"
            "</div>";
        $("#userdetail").append(t);
    }
}

