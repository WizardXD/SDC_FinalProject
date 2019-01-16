﻿// function to flip the cards
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
//end of function to flip card



(function () {
	$(document).ready(function () {

		showartefactdetails();
		showArtefactUsageMCQ();
		showArtefactImportantnessMCQ();

		$("#submitAnswerbtn").bind("click", function () {
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

	//display Multiple Choice Questions for Usage of Artefact
	function showArtefactUsageMCQ() {

        var url = serverURL() + "/artefactUsageMCQ.php";
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
                _ResultShowArtefactUsageMCQ(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _ResultShowArtefactUsageMCQ(arr) {
        for (i = 0; i < arr.length; i++) {
            var UsageMCQArray = [arr[i].CorrectUsage, arr[i].WrongUsage1, arr[i].WrongUsage2];
        }
        
        arrayUsageMCQ();

        function arrayUsageMCQ() {
            for (i = 0; i = UsageMCQArray.length; i++) {
				//Node content
				var x = UsageMCQArray.splice(0, 1);

				//This code creates a new <option> element:
				var option_e = document.createElement("option");

				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);

				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);

				//Finally you must append the new element to an existing element.

				//This code finds an existing element:
				var existing_element = document.getElementById("UsageMCQ");

				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
    		}
        }
    }

	function showArtefactImportantnessMCQ() {

        var url = serverURL() + "/artefactImportantnessMCQ.php";
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
                _ResultShowArtefactImportantnessMCQ(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
	}

	function _ResultShowArtefactImportantnessMCQ(arr) {
        for (i = 0; i < arr.length; i++) {
            var ImportantnessMCQArray = [arr[i].CorrectImportantness, arr[i].WrongImportantness1, arr[i].WrongImportantness2];
        }
        
        arrayImportantnessMCQ();

        function arrayImportantnessMCQ() {
            for (i = 0; i = ImportantnessMCQArray.length; i++) {
				//Node content
				var x = ImportantnessMCQArray.splice(0, 1);

				//This code creates a new <option> element:
				var option_e = document.createElement("option");

				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);

				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);

				//Finally you must append the new element to an existing element.

				//This code finds an existing element:
				var existing_element = document.getElementById("ImportantnessMCQ");

				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
    		}
        }
    }


	//Function to verify the answers (Incomplete-->Verifies the Name of the Artefacts only)
	function answersVerification() {
		var url = serverURL() + "/verifyartefactdetails.php";
				
		var artefactid = localStorage.getItem("artefactid");
		var name = $("#NameOfArt").val();
		var usage = $("#UsageOfArt").val();
		var importantness = $("#ImportantOfArt").val();

		var JSONObject = {
			"name": name,
			"artefactid": artefactid,
			"usage": usage,
			"importantness": importantness
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				testing12345(arr);	
			}, error: function () {
				alert("error");
			}
		});
	}
		
		// function to execute if php call is successful
	function testing12345(arr) {
		
		if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct accesscode entered
	 
			toExecuteIfAnswerIsCorrect();

			} else {                                                         // == 0 means no data is found with the given accesscode
				toExecuteIfAnswerIsWrong();                             
			}
		}

	function toExecuteIfAnswerIsCorrect() {

		var answerresult = "Correct"; 

		var url = serverURL() + "/answerresult.php";

		var JSONObject = {
			"answerresult": answerresult,
			"artefactid": localStorage.getItem("artefactid"),
			"eventid": localStorage.getItem("eventid"),
			"groupid": localStorage.getItem("groupid"),
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				ons.notification.alert('Answer is submitted successfully.', {title: 'I dont know what to write here.'});   
				window.location = "game.html";
			}, error: function () {
				alert("NO ERROR BROOOOOO");
			}
		});

	}

	function toExecuteIfAnswerIsWrong() {

		var answerresult = "Wrong"; 

		var url = serverURL() + "/answerresult.php";

		var JSONObject = {
			"answerresult": answerresult,
			"artefactid": localStorage.getItem("artefactid"),
			"eventid": localStorage.getItem("eventid"),
			"groupid": localStorage.getItem("groupid"),
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				ons.notification.alert('Answer is submitted successfully.', {title: 'I dont know what to write here.'});   
				window.location = "game.html";
			}, error: function () {
				alert("NO ERROR BROOOOOO");
			}
		});

	}
	
	


})();
