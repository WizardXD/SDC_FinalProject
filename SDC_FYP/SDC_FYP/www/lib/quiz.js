
//var artefactid = localStorage.getItem("artefactid");
    $(document).ready(function () {
        showartefactdetails();
    });

//function for the card to flip
function flip() {
    $('.card').toggleClass('flipped');
}

//function to display the details of the artefact (image and background information)
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
            showArtefactDetails(arr);
        },
        error: function () {
            alert("Error");
        }
    });
}

    function showArtefactDetails(arr) {
        for (var i = 0; i < arr.length; i++) {
        $("#frontartefactimage").html("<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + "' width=310px' height='210px' border='2'>");
        $("#backartefactimage").html("<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + "' width='310px' height='210px'>");
        $("#artefactbackgroundinfo").html("<p align='left'>" + arr[i].backgroundinfo + "</p>");
    }
}



