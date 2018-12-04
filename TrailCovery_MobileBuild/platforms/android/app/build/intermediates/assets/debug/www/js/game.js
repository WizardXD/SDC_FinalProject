(function () {

    $(document).ready(function () {
        getArtefact();
    });

    //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
    function getArtefact() {
        var url = serverURL() + "/game.php";
        var userid = localStorage.getItem("userid");
        var JSONObject = {
            "accesscode": localStorage.getItem("accesscode")
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _showArtefactResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _showArtefactResult(arr) {
        //if i is less than the total  number of artefacts, increment by 1
        for (i = 0; i < arr.length; i++) {
			 $("#trailimage").html("<img src='" + serverURL() + "/images/trails/" + arr[i].trailimg + "' width='90%' border='2'>");
            var t;
            // creating button with id similiar to the artefact id
            t = "<p><ons-button id='btn" + arr[i].artefactid + "' style='width:45%'>" + "Artefact " + (i+1) + " </ons-button><p/>";
            $("#artefactbtn").append(t);
            $("#btn" + arr[i].artefactid).bind("click", { id: arr[i].artefactid }, function (event) {
                var data = event.data;
                _showResult(data.id);
            });

        }
    }

    function _showResult(artefactid) {
        localStorage.setItem("artefactid", artefactid);
        window.location = "quiz.html?artefactid=" + artefactid;
    }
})();

