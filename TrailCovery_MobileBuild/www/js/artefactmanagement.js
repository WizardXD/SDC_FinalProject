$(document).ready(function () {
    traildetails();
    artefactdetails();
});

//function to display the details of the artefact, such as image and background information
function traildetails() {
    var url = serverURL() + "/traildetail.php";

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

function ShowTrailDetails(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t = "<p><ons-button id='btntrail" + arr[i].trailid + "' style='width:70%'>" +
             arr[i].trailname + "</ons-button><p/>"; 
            
        $("#trail").append(t);

        $("#btntrail" + arr[i].trailid).bind("click", { id: arr[i].trailid }, function (event) {
            var data = event.data;
            _showResult(data.id);
        });
    }
}



//function to display the details of the artefact, such as image and background information
function artefactdetails() {
    var url = serverURL() + "/artefactdetail.php";

    var JSONObject = {
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            ShowArtefactDetails(arr);
        },
        error: function () {
            alert("Error");         //Change to validation message 
        }
    });
}

function ShowArtefactDetails(arr) {
    for (var i = 0; i < arr.length; i++) {
        var t = "<p><ons-button id='btntrail" + arr[i].trailid + "' style='width:70%'>" +
             arr[i].trailname + "</ons-button><p/>"; 
            
        $("#trail").append(t);

        $("#btntrail" + arr[i].trailid).bind("click", { id: arr[i].trailid }, function (event) {
            var data = event.data;
            _showResult(data.id);
        });
    }
}

