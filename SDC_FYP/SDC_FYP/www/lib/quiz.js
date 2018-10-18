
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
        $("#frontartefactimage").html("<img src='" + serverURL() + "/images/" + arr[i].image + "' width='100%' height='20%'>");
        $("#backartefactimage").html("<img src='" + serverURL() + "/images/" + arr[i].image + "' width='100%' height='20%'>");
        $("#artefactbackgroundinfo").html(arr[i].backgroundinfo);
    }
}



