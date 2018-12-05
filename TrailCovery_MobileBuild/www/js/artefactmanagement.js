$(document).ready(function () {
    traildetails();
    artefactdetails();
});

//function to display the details of the trail
function traildetails() {
    var url = serverURL() + "/traildetail.php";
    var trailid = localStorage.getItem("trailid");

    var JSONObject = {
    "trailid": trailid
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
        var t;
            t = "<ons-card> Trail Name: " + arr[i].trailname + "</br>" +
                "Trail Location: " + arr[i].traillocation + "</br>" +
                "Trail Duration: " + arr[i].duration + " hours" + "</br></ons-card>";
        $("#traildetail").append(t);
        
    }
}

//function to display the details of the artefact
function artefactdetails() {
    var url = serverURL() + "/artefactdetail.php";
    var trailid = localStorage.getItem("trailid");

    var JSONObject = {
        "trailid": trailid
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
        var a;
            a = "<ons-card>" + "<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + "'>" + "</br>" + 
                "Artefact Name: " + arr[i].name + "</br>" +
                "Background Information: " + arr[i].backgroundinfo + "</br></ons-card>";
        $("#artefactdetail").append(a);
    }
}

