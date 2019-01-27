(function () {




	$(document).ready(function () {
		showArtefactAnswer();
	});

	 //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
	 function showArtefactAnswer() {
		var url = serverURL() + "/getArtefactAnswer.php";
		
		var trailid = localStorage.getItem("trailid");
		
        var JSONObject = {
            "trailid": trailid,
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _showArtefactAnswerResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _showArtefactAnswerResult(arr) {
        for (i = 0; i < arr.length; i++) {
			
			var y = "<div class='card'>" +
            "<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + 
            "' style='width:100%; border: 2px solid black;'>" + "</br>" + 
            "<h2 style='text-align: center'><b>" + arr[i].name + "</b></h4>" +
			"<p style='text-align:justify;font-family: Arial, Helvetica, sans-serif;'>" + arr[i].backgroundinfo + "</p>"  +
			"<p><b>What is the usage of the Artefact? </b>" + arr[i].cusage + "</p>" +
			"<p><b>What is the importance of the Artefact towards the Culture? </b>" + arr[i].cimportantness + "</p>" +
            "</div>";
            $("#artefactanswer").append(y);

        }
	}
	

	

	
})();



