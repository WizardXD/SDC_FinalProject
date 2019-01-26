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
            var UsageMCQArray = [arr[i].CorrectUsage, arr[i].WrongUsage1, arr[i].WrongUsage2, arr[i].WrongUsage3];
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
            var ImportantnessMCQArray = [arr[i].CorrectImportantness, arr[i].WrongImportantness1, arr[i].WrongImportantness2, arr[i].WrongImportantness3];
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
				answersVerificationResult(arr);	
			}, error: function () {
				alert("error");
			}
		});
	}
		
		// function to execute if php call is successful
	function answersVerificationResult(arr) {
		
		if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
			toExecuteIfAnswerIsCorrect();
			} else { // == 0 means no data is found with the given answer
			toExecuteIfAnswerIsWrong();                             
			}
		}

	function toExecuteIfAnswerIsCorrect() {
		
		var username = localStorage.getItem("username");

		var url = serverURL() + "/getscoreartefact.php";

		var JSONObject = {
			"username": username,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				retrieveCorrectScoreAtoF(arr);	
			}, error: function () {
				alert("GOT ERROR BROOOOOO");
			}
		});
	}

	function retrieveCorrectScoreAtoF(arr) {
		for (i = 0; i < arr.length; i++) {
			var artefactaid = arr[i].artefactaid;
			var artefactbid = arr[i].artefactbid;
			var artefactcid = arr[i].artefactcid;
			var artefactdid = arr[i].artefactdid;
			var artefacteid = arr[i].artefacteid;
			var artefactfid = arr[i].artefactfid;

			if (artefactaid == "") {
				var answerresult = "Correct"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactA.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}
			
			else if (artefactbid == "") {
				var answerresult = "Correct"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactB.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			} 
			
			else if (artefactcid == "") {
				var answerresult = "Correct"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactC.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}

			else if (artefactdid == "") {
				var answerresult = "Correct"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactD.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}

			else if (artefacteid == "") {
				var answerresult = "Correct"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactE.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}

			else if (artefactfid == "") {
				var answerresult = "Correct"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactF.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}
			
			}
			

	function retrieveScore() {
		var url = serverURL() + "/scoreview.php";

		var username = localStorage.getItem("username");

		var JSONObject = {
			"username": username,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				retrieveScoreResult(arr);
			}, error: function () {
				alert("error");
			}
		});
	}

	function retrieveScoreResult(arr){
		for (i = 0; i < arr.length; i++) {
		   var score = arr[i].score;
		   var newscore = Number(score) + 5;
		}
		
		var url = serverURL() + "/scoreupdate.php";

		var username = localStorage.getItem("username");

		var JSONObject = {
			"username": username,
			"score": newscore
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				window.location = "game.html";
			}, error: function () {
				alert("error");
			}
		});
	}
	}



	function toExecuteIfAnswerIsWrong() {
		
		var username = localStorage.getItem("username");

		var url = serverURL() + "/getscoreartefact.php";

		var JSONObject = {
			"username": username,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				retrieveWrongScoreAtoF(arr);	
			}, error: function () {
				alert("GOT ERROR BROOOOOO");
			}
		});
	}



	
	function retrieveWrongScoreAtoF(arr) {
		
		for (i = 0; i < arr.length; i++) {
			var artefactaid = arr[i].artefactaid;
			var artefactbid = arr[i].artefactbid;
			var artefactcid = arr[i].artefactcid;
			var artefactdid = arr[i].artefactdid;
			var artefacteid = arr[i].artefacteid;
			var artefactfid = arr[i].artefactfid;

			if (artefactaid == "") {
				
				var answerresult = "Correct"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactA.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			} else if (artefactbid == "") {
				console.log("Ho");
				var answerresult = "Wrong"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactB.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			} else if (artefactcid == "") {
				var answerresult = "Wrong"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactC.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}
			else if (artefactdid == "") {
				var answerresult = "Wrong"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactD.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}
			else if (artefacteid == "") {
				var answerresult = "Wrong"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactE.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}
			else if (artefactfid == "") {
				var answerresult = "Wrong"; 
				var artefactid = localStorage.getItem("artefactid");
				var username = localStorage.getItem("username");

				var url = serverURL() + "/scoreArtefactF.php";

				var JSONObject = {
					"answerresult": answerresult,
					"artefactid": artefactid,
					"username": username,
				};

				$.ajax({
					url: url,
					type: 'GET',
					data: JSONObject,
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function (arr) {
						retrieveScore();
						ons.notification.alert('Answer is submitted successfully.', {title: ' '});   
					}, error: function () {
						alert("GOT ERROR BROOOOOO");
					}
				});
			}
			
			}
			

	function retrieveScore() {
		var url = serverURL() + "/scoreview.php";

		var username = localStorage.getItem("username");

		var JSONObject = {
			"username": username,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				retrieveScoreResult(arr);
			}, error: function () {
				alert("error");
			}
		});
	}

	function retrieveScoreResult(arr){
		for (i = 0; i < arr.length; i++) {
		   var score = arr[i].score;
		   var newscore = Number(score) + 5;
		}
		
		var url = serverURL() + "/scoreupdate.php";

		var username = localStorage.getItem("username");

		var JSONObject = {
			"username": username,
			"score": newscore
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				window.location = "game.html";
			}, error: function () {
				alert("error");
			}
		});
	}
		}

})();
