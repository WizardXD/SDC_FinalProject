

$(document).ready(function () {
    traildetails();

});

//function to display the details of the artefact, such as image and background information
function traildetails() {
    var url = serverURL() + "/trailmanagement.php";

    var JSONObject = {
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            ShowTrailDetails(arr);
        },
        error: function () {
            alert("Error");         //Change to validation message 
        }
    });
}

//function to call if php call is successful
function ShowTrailDetails(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t;
        t = "<ons-card>" +
            "Trail Name: " + arr[i].trailname + "</br>" +
            "Trail Location: " + arr[i].traillocation + "</br>" +
            "Duration: " + arr[i].duration + " hours" + "</br>" +
            "<center> <ons-button modifier='quiet' id='btnTrail" + arr[i].trailid + "'>" + "Edit </ons-button> </center>";
            "</ons-card>";

        $("#trail").append(t);
    }
}