	
	// function to flip the cards
	document.addEventListener('DOMContentLoaded', function(event) {

	document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
	document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

	document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
		document.getElementById('flip-card').classList.toggle('do-flip');
	};

	document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
		document.getElementById('flip-card').classList.toggle('do-flip');
	};

	});
	
	(function () {
		$(document).ready(function () {
			showartefactdetails();
			$("#submitAnswerbtn").click(function () {
				answersVerification();
			});
		});

		//function to display the details of the artefact, such as image and background information
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
					alert("Error");         //Change to validation message 
				}
			});
		}

		//function to call if php call is successful
		function showArtefactDetails(arr) {
			for (var i = 0; i < arr.length; i++) {
				$("#frontartefactimage").html("<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + "' width='90%' border='2'>");
				$("#backartefactimage").html("<img src='" + serverURL() + "/images/artefacts/" + arr[i].image + "' width='90%' border='2'>");
				$("#artefactbackgroundinfo").html("<p align='justify'>" + arr[i].backgroundinfo + "</p>");
			}
		}

		//Function to verify the answers (Incomplete-->Verifies the Name of the Artefacts only)
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
				alert("Correct Answer");  //theres a slight error --> page relocated without even clicking on the valiatonmsg
				window.location.href = 'game.html';
			} else {                               //else --> result = 0 --> no data was found with the given answer (wrong inputation of answer)
				validationMsgs("Wrong Answer","Information", "OK");
			}
		}  

	})();
