document.addEventListener('init', function(event) {
	

var page = event.target;

if (page.id === 'event_management') {
    getEventDetails();

    getTrails();

    getAdmins();

    $("#btnAddEvent").bind("click", function () {
            addEvent();
    });


}
});
 
      



    //retrieve the details of events
    function getEventDetails() {
        var url = serverURL() + "/eventview.php";
        var JSONObject = {
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getEventResult(arr);
            },
            error: function () {
                validationMsg();
            }
        });
    }

    function _getEventResult(arr) {
        for (i = 0; i < arr.length; i++) {
            var t;
            t = "<ons-card>" +
                "Event: " + arr[i].eventid + "</br>" +
                "Trail: " + arr[i].trailname + "</br>" +
                "Date: " + arr[i].date + "</br>" +
                "Time: " + arr[i].time + "</br>" +
                "Admin-In-Charge: " + arr[i].name + "</br>" +
                "Access Code: " + arr[i].accesscode + "</br>" +

                "</ons-card>";
            $("#event").append(t);

        }
    }

    //retrieve trails for selection
    function getTrails() {
        var url = serverURL() + "/gettrails.php";
        var trailid = decodeURIComponent(getUrlVars()["trailid"]);
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
                _getTrailResult(arr);
            },
            error: function () {
                validationMsg();
            }
        });
    }

    function _getTrailResult(arr) {
        $('#selTrail')
            .find('option')
            .remove()
            .end();

        $('#selTrail').append($("<option>", {
            value: "-1",
            text: "Select a Trail"
        }));
    

    for (var i = 0; i < arr.length; i++) {
        $("#selTrail").append($("<option>", {
            value: arr[i].trailid,
            text: arr[i].trailname
        }));
    }

    $("selTrail").val("-1").change();
    }

 

    // retrieve different admin for selection
    function getAdmins() {
        var url = serverURL() + "/getadmins.php";
        var adminid = decodeURIComponent(getUrlVars()["adminid"]);
        var JSONObject = {
            "adminid": adminid
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getAdminResult(arr);
            },
            error: function () {
                validationMsg();
            }
        });
    }

    function _getAdminResult(arr) {
        $('#selAdmin')
            .find('option')
            .remove()
            .end();

        $('#selAdmin').append($("<option>", {
            value: "-1",
            text: "Select facilitator-in-charge"
        }));


        for (var i = 0; i < arr.length; i++) {
            $("#selAdmin").append($("<option>", {
                value: arr[i].adminid,
                text: arr[i].name
            }));
        }

        $("selAdmin").val("-1").change();
    }



    //insert trail into database
    function addEvent() {
        trailid = $("#selTrail").val();
        date = $("#eventdate").val();
        time = $("#eventtime").val();
        adminincharge = $("#selAdmin").val();
        accesscode = $("#eventaccesscode").val();

        url = serverURL() + "/addevent.php"; 
       
        var JSONObject = {
            "trailid": trailid,
            "date": date,
            "time": time,
            "adminid": adminincharge,
            "accesscode": accesscode
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getAddEventResult(arr);
            }, error: function () {
                validationMsg();
            }
        });
    }

    function _getAddEventResult(arr) {
        if (arr[0].result === 1) {
            alert("Event has been created successfully");
            window.location = "facilitator.html";
        } else if (arr[0].result === 0) {
            alert("Accesscode already exist.");
        }
    }

