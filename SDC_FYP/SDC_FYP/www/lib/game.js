(function () {

    $(document).ready(function () {
        getArtefact();
    });

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
            }
        });
    }

    //Show artefact result on game.html
    function _showArtefactResult(arr) {


        for (i = 0; i < arr.length; i++) {
            var t;
            t = "<p><ons-button id='btn" + arr[i].artefactid + "'>" + "Artefact " + (i+1) + " </ons-button><p/>";
            $("#artefact").append(t);
            $("#btn" + arr[i].artefactid).bind("click", { id: arr[i].artefactid }, function (event) {
                var data = event.data;
                _showResult(data.id);
            });

        }
    }

    //
    function _showResult(artefactid) {
        localStorage.setItem("artefactid", artefactid);
        window.location = "quiz.html?artefactid=" + artefactid;
    }
})();

