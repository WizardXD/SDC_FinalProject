(function () {
    $(document).ready(function () {

        showartefactdetails();

        $("#submitAnswerbtn").click(function () {
            answersVerification();
        });
    });

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

    //function to call if php call is successful
    function showArtefactDetails(arr) {
        for (var i = 0; i < arr.length; i++) {
            $("#frontartefactimage").html("<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + "' width=310px' height='210px' border='2'>");
            $("#backartefactimage").html("<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + "' width='310px' height='210px' border='2'>");
            $("#artefactbackgroundinfo").html("<p align='left'>" + arr[i].backgroundinfo + "</p>");
        }
    }

    //Function to verify the answers
    function answersVerification() {
        var url = serverURL() + "/verifyartefactdetails.php";
        var result;
        var name = $("#NameOfArt").val();
        var artefactid = localStorage.getItem("artefactid");

        var JSONObject = {
            "name": name,
            "artefactid": artefactid
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getAnswersResults(arr);
            }, error: function () {
                alert("Error");
            }
        });
    }
    
    // function to execute if php call is successful
    function _getAnswersResults(arr) {
        if (arr[0].result.trim() !== "0") {    //if result is not equal to "0" --> at least a row of data is found in the database with the given answer and the artefact id
            alert("Correct Answer");
            window.location = 'game.html';
        } else {                               //else --> result = 0 --> no data was found with the given answer (wrong inputation of answer)
            alert("Wrong Answer");
        }
    }  

})();

//function for the card to flip
function flip() {
    $('.card').toggleClass('flipped');
}

//function for popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}