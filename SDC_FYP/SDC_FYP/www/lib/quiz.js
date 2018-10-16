
//var artefactid = localStorage.getItem("artefactid");
    $(document).ready(function () {
        showartefactdetails();
    });

    function showartefactdetails() {
        var url = serverURL() + "/quiz.php";
        var artefactid = decodeURIComponent(getUrlVars()["artefactid"]);


        var JSONObject = {
            "artefactid": artefactid
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                console.log("success");   
            },
            error: function () {
                console.log("fail");
                
            }
        });
    }

