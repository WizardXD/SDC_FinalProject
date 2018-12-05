$(document).ready(function () {
    trailnames();

});

//function to display the details of the artefact, such as image and background information
function trailnames() {
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
            ShowTrailNames(arr);
        },
        error: function () {
            alert("Error");         //Change to validation message 
        }
    });
}

function ShowTrailNames(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t = "<p><ons-button id='btntrail" + arr[i].trailid + "' style='width:70%'>" +
             arr[i].trailname + "</ons-button><p/>"; 
            
        $("#trailname").append(t);

        $("#btntrail" + arr[i].trailid).bind("click", { id: arr[i].trailid }, function (event) {
            var data = event.data;
            _showResult(data.id);
        });
    }
}

function _showResult(trailid) {
    localStorage.setItem("trailid", trailid);
    window.location = "artefactmanagement.html?trailid=" + trailid;
}