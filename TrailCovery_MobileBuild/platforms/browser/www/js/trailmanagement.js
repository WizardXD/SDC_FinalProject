$(document).ready(function () {
    trailnames();
    $("#btnAddTrail").bind("click", function () {
        addTrail();
    });
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
                var t = "<p><img src='" + serverURL() + "/images/trails/" + arr[i].trailimg + "'>"+
        "<ons-button id='btntrail" + arr[i].trailid + "' style='width:70%'>" +
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

//insert trail into database
function addTrail() {
    TrailName = $("#trailname").val();
    TrailLocation = $("#trailLocation").val();
    Duration = $("#duration").val();
    
    url = serverURL() + "/addtrail.php"; 
   
    var JSONObject = {
        "trailname": TrailName,
        "traillocation": TrailLocation,
        "duration": Duration,

    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            _getAddTrailFunction(arr);
        }, error: function () {
            validationMsg();
        }
    });
}

function _getAddTrailFunction(arr) {
    if (arr[0].result === 1) {
        alert("Trail has been added");
        window.location = "facilitator.html";
    } else if (arr[0].result === 0) {
        alert("Trail already exist.");
    }
}