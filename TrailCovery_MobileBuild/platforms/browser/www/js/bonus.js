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

		showBonusdetails();
		bonusLocation();
		showBonusBlank1MCQ();
		showBonusBlank2MCQ();
		showBonusBlank3MCQ();
		showBonusBlank4MCQ();
		showBonusBlank5MCQ();


		$("#submitBonusAnswerbtn").bind("click", function () {
			VerifyBonusName();
		});
	});

	//function to display the details of the artefact, such as image and background information
	function showBonusdetails() {

		var url = serverURL() + "/quizbonus.php";
		var landmarkid = decodeURIComponent(getUrlVars()["landmarkid"]);

		var JSONObject = {
			"landmarkid": landmarkid
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				showBonusDetails(arr);
			},
			error: function () {
				alert("123");         //Change to validation message 
				}
			});
	}

	//function to call if php call is successful
	function showBonusDetails(arr) {
		for (var i = 0; i < arr.length; i++) {
			$("#frontlandmarkimage").html("<img src='" + serverURL() + "/images/landmarks/" + arr[i].image + "' width='90%' border='2'>");
			$("#backlandmarkimage").html("<img src='" + serverURL() + "/images/landmarks/" + arr[i].image + "' width='90%' border='2'>");
			$("#bonusbackgroundinfo").html("<p align='justify'>" + arr[i].landmarkbackgroundinfo + "</p>");	
		}
	}


	function bonusLocation() {

        var url = serverURL() + "/bonusLocation.php";
        var landmarkid = decodeURIComponent(getUrlVars()["landmarkid"]);

        var JSONObject = {
            "landmarkid": landmarkid
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _ResultShowBonusLocation(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _ResultShowBonusLocation(arr) {
        for (i = 0; i < arr.length; i++) {
            var BonusLocationMCQArray = [arr[i].LocationWrongAnswer1, arr[i].LocationCorrectAnswer, arr[i].LocationWrongAnswer2, arr[i].LocationWrongAnswer3];
        }
        
        arrayBonusLocation();

        function arrayBonusLocation() {
            for (i = 0; i = BonusLocationMCQArray.length; i++) {
				//Node content
				var x = BonusLocationMCQArray.splice(0, 1);

				//This code creates a new <option> element:
				var option_e = document.createElement("option");

				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);

				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);

				//Finally you must append the new element to an existing element.

				//This code finds an existing element:
				var existing_element = document.getElementById("BonusLocationMCQ");

				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
    		}
        }
	}

	function showBonusBlank1MCQ() {

        var url = serverURL() + "/bonusBlank1MCQ.php";
        var landmarkid = decodeURIComponent(getUrlVars()["landmarkid"]);

        var JSONObject = {
            "landmarkid": landmarkid
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _ResultShowBonusBlank1MCQ(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _ResultShowBonusBlank1MCQ(arr) {
        for (i = 0; i < arr.length; i++) {
            var Blank1MCQArray = [arr[i].Blank1WrongAnswer3, arr[i].Blank1WrongAnswer1, arr[i].Blank1WrongAnswer2, arr[i].Blank1CorrectAnswer];
        }
        
        arrayBonusBlank1MCQ();

        function arrayBonusBlank1MCQ() {
            for (i = 0; i = Blank1MCQArray.length; i++) {
				//Node content
				var x = Blank1MCQArray.splice(0, 1);

				//This code creates a new <option> element:
				var option_e = document.createElement("option");

				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);

				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);

				//Finally you must append the new element to an existing element.

				//This code finds an existing element:
				var existing_element = document.getElementById("BonusQuestion1MCQ");

				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
    		}
        }
	}
	

	function showBonusBlank2MCQ() {

		var url = serverURL() + "/bonusBlank2MCQ.php";
		var landmarkid = decodeURIComponent(getUrlVars()["landmarkid"]);
	
		var JSONObject = {
			"landmarkid": landmarkid
		};
	
		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				_ResultShowBonusBlank2MCQ(arr);
			},
			error: function () {
				alert("Wrong");       //Change to Validation Message
			}
		});
	}
	
	function _ResultShowBonusBlank2MCQ(arr) {
		for (i = 0; i < arr.length; i++) {
			var Blank2MCQArray = [arr[i].Blank2WrongAnswer2, arr[i].Blank2WrongAnswer1, arr[i].Blank2CorrectAnswer, arr[i].Blank2WrongAnswer3];
		}
			
		arrayBonusBlank2MCQ();
	
		function arrayBonusBlank2MCQ() {
			for (i = 0; i = Blank2MCQArray.length; i++) {
				//Node content
				var x = Blank2MCQArray.splice(0, 1);
	
				//This code creates a new <option> element:
				var option_e = document.createElement("option");
	
				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);
	
				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);
	
				//Finally you must append the new element to an existing element.
	
				//This code finds an existing element:
				var existing_element = document.getElementById("BonusQuestion2MCQ");
	
				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
			}
		}
	}



	function showBonusBlank3MCQ() {

		var url = serverURL() + "/bonusBlank3MCQ.php";
		var landmarkid = decodeURIComponent(getUrlVars()["landmarkid"]);
	
		var JSONObject = {
			"landmarkid": landmarkid
		};
	
		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				_ResultShowBonusBlank3MCQ(arr);
			},
			error: function () {
				alert("Wrong");       //Change to Validation Message
			}
		});
	}
	
	function _ResultShowBonusBlank3MCQ(arr) {
		for (i = 0; i < arr.length; i++) {
			var Blank3MCQArray = [arr[i].Blank3WrongAnswer1, arr[i].Blank3CorrectAnswer, arr[i].Blank3WrongAnswer2, arr[i].Blank3WrongAnswer3];
		}
			
		arrayBonusBlank3MCQ();
	
		function arrayBonusBlank3MCQ() {
			for (i = 0; i = Blank3MCQArray.length; i++) {
				//Node content
				var x = Blank3MCQArray.splice(0, 1);
	
				//This code creates a new <option> element:
				var option_e = document.createElement("option");
	
				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);
	
				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);
	
				//Finally you must append the new element to an existing element.
	
				//This code finds an existing element:
				var existing_element = document.getElementById("BonusQuestion3MCQ");
	
				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
			}
		}
	}




	function showBonusBlank4MCQ() {

		var url = serverURL() + "/bonusBlank4MCQ.php";
		var landmarkid = decodeURIComponent(getUrlVars()["landmarkid"]);
	
		var JSONObject = {
			"landmarkid": landmarkid
		};
	
		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				_ResultShowBonusBlank4MCQ(arr);
			},
			error: function () {
				alert("Wrong");       //Change to Validation Message
			}
		});
	}
	
	function _ResultShowBonusBlank4MCQ(arr) {
		for (i = 0; i < arr.length; i++) {
			var Blank4MCQArray = [arr[i].Blank4WrongAnswer1, arr[i].Blank4CorrectAnswer, arr[i].Blank4WrongAnswer3, arr[i].Blank4WrongAnswer2];
		}
			
		arrayBonusBlank4MCQ();
	
		function arrayBonusBlank4MCQ() {
			for (i = 0; i = Blank4MCQArray.length; i++) {
				//Node content
				var x = Blank4MCQArray.splice(0, 1);
	
				//This code creates a new <option> element:
				var option_e = document.createElement("option");
	
				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);
	
				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);
	
				//Finally you must append the new element to an existing element.
	
				//This code finds an existing element:
				var existing_element = document.getElementById("BonusQuestion4MCQ");
	
				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
			}
		}
	}

	function showBonusBlank5MCQ() {

		var url = serverURL() + "/bonusBlank5MCQ.php";
		var landmarkid = decodeURIComponent(getUrlVars()["landmarkid"]);
	
		var JSONObject = {
			"landmarkid": landmarkid
		};
	
		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				_ResultShowBonusBlank5MCQ(arr);
			},
			error: function () {
				alert("Wrong");       //Change to Validation Message
			}
		});
	}
	
	function _ResultShowBonusBlank5MCQ(arr) {
		for (i = 0; i < arr.length; i++) {
			var Blank5MCQArray = [arr[i].Blank5WrongAnswer1, arr[i].Blank5CorrectAnswer, arr[i].Blank5WrongAnswer2, arr[i].Blank5WrongAnswer3];
		}
			
		arrayBonusBlank5MCQ();
	
		function arrayBonusBlank5MCQ() {
			for (i = 0; i = Blank5MCQArray.length; i++) {
				//Node content
				var x = Blank5MCQArray.splice(0, 1);
	
				//This code creates a new <option> element:
				var option_e = document.createElement("option");
	
				//To add text to the <option> element, you must create a text node first. This code creates a text node:
				var option_node = document.createTextNode(x);
	
				//Then you must append the text node to the <option> element:
				option_e.appendChild(option_node);
	
				//Finally you must append the new element to an existing element.
	
				//This code finds an existing element:
				var existing_element = document.getElementById("BonusQuestion5MCQ");
	
				//This code appends the new element to the existing element:
				existing_element.appendChild(option_e);
			}
		}
	}




	// ----- VERIFY NAME OF BONUS QUESTION ----- //
	function VerifyBonusName() {
		var url = serverURL() + "/verifyBonusName.php";
				
		var landmarkid = localStorage.getItem("landmarkid");
		var landmarkname  = $("#NameOfLandmark").val();

		var JSONObject = {
			"landmarkname": landmarkname,
			"landmarkid": landmarkid,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				ons.notification.alert('You will be directed to the survey page shortly.', {title: 'Hold On'});   
				VerifyBonusNameResult(arr);	
			}, error: function () {
				alert("error");
			}
		});
	}
		
		// function to execute if php call is successful
	function VerifyBonusNameResult(arr) {
		
		if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
			IfBonusNameIsCorrect();
			} else { // == 0 means no data is found with the given answer;
			IfBonusNameIsWrong();                             
			}
		}

	function IfBonusNameIsCorrect() {

		var answerresult = "Correct"; 
		var username = localStorage.getItem("username");

		var url = serverURL() + "/resultBonusName.php";

		var JSONObject = {
			"answerresult": answerresult,
			"username": username,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				retrieveScoreName();  
			}, error: function () {
				alert("Erorr 1");
			}
		});
	}

	function retrieveScoreName() {
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
				retrieveScoreforNameResult(arr);
			}, error: function () {
				alert("error");
			}
		});
	}

	function retrieveScoreforNameResult(arr){
		for (i = 0; i < arr.length; i++) {
		   var score = arr[i].score;
		   var newscore = Number(score) + 2;
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
				VerifyBonusLocation();
			}, error: function () {
				alert("error");
			}
		});
	}


	function IfBonusNameIsWrong() {

		var answerresult = "Wrong";
		var username = localStorage.getItem("username");

		var url = serverURL() + "/resultBonusName.php";

		var JSONObject = {
			"answerresult": answerresult,
			"username": localStorage.getItem("username"),
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				VerifyBonusLocation();
			}, error: function () {
				alert("Error2");
			}
		});

	}


	
	// ----- VERIFY LOCATION OF BONUS QUESTION ----- //
	function VerifyBonusLocation() {
		var url = serverURL() + "/verifyBonusLocation.php";
				
		var landmarkid = localStorage.getItem("landmarkid");
		var landmarklocation  = $("#BonusLocation").val();

		var JSONObject = {
			"landmarklocation": landmarklocation,
			"landmarkid": landmarkid,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				VerifyBonusLocationResult(arr);	
			}, error: function () {
				alert("error");
			}
		});
	}
		
		// function to execute if php call is successful
	function VerifyBonusLocationResult(arr) {
		
		if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
			IfBonusLocationIsCorrect();
			} else { // == 0 means no data is found with the given answer;
			IfBonusLocationIsWrong();                             
			}
		}

	function IfBonusLocationIsCorrect() {

		var answerresult = "Correct"; 
		var username = localStorage.getItem("username");

		var url = serverURL() + "/resultBonusLocation.php";

		var JSONObject = {
			"answerresult": answerresult,
			"username": username,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				retrieveScoreLocation();  
			}, error: function () {
				alert("Erorr 1");
			}
		});
	}

	function retrieveScoreLocation() {
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
				retrieveScoreforLocationResult(arr);
			}, error: function () {
				alert("error");
			}
		});
	}

	function retrieveScoreforLocationResult(arr){
		for (i = 0; i < arr.length; i++) {
		   var score = arr[i].score;
		   var newscore = Number(score) + 3;
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
				VerifyBonusBlank1();
			}, error: function () {
				
			}
		});
	}


	function IfBonusLocationIsWrong() {

		var answerresult = "Wrong";
		var username = localStorage.getItem("username");

		var url = serverURL() + "/resultBonusLocation.php";

		var JSONObject = {
			"answerresult": answerresult,
			"username": localStorage.getItem("username"),
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				VerifyBonusBlank1();
			}, error: function () {

			}
		});

	}
















	// ----- VERIFY BLANK 1 OF BONUS QUESTION ----- //
	function VerifyBonusBlank1() {
		var url = serverURL() + "/verifyBonusBlank1.php";
				
		var landmarkid = localStorage.getItem("landmarkid");
		var blank1  = $("#BonusQuestion1").val();

		var JSONObject = {
			"blank1": blank1,
			"landmarkid": landmarkid,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				VerifyBonusBlank1Result(arr);	
			}, error: function () {
				alert("error");
			}
		});
	}
		
		// function to execute if php call is successful
	function VerifyBonusBlank1Result(arr) {
		
		if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
			IfBonusBlank1IsCorrect();
			} else { // == 0 means no data is found with the given answer;
			IfBonusBlank1IsWrong();                             
			}
		}

	function IfBonusBlank1IsCorrect() {

		var answerresult = "Correct"; 
		var username = localStorage.getItem("username");

		var url = serverURL() + "/resultBonusBlank1.php";

		var JSONObject = {
			"answerresult": answerresult,
			"username": username,
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				retrieveScoreBlank1();  
			}, error: function () {
				alert("Erorr 1");
			}
		});
	}

	function retrieveScoreBlank1() {
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
				retrieveScoreforBlank1Result(arr);
			}, error: function () {
				alert("error");
			}
		});
	}

	function retrieveScoreforBlank1Result(arr){
		for (i = 0; i < arr.length; i++) {
		   var score = arr[i].score;
		   var newscore = Number(score) + 3;
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
				VerifyBonusBlank2();
			}, error: function () {
		
			}
		});
	}


	function IfBonusBlank1IsWrong() {

		var answerresult = "Wrong";
		var username = localStorage.getItem("username");

		var url = serverURL() + "/resultBonusBlank1.php";

		var JSONObject = {
			"answerresult": answerresult,
			"username": localStorage.getItem("username"),
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				VerifyBonusBlank2();
			}, error: function () {

			}
		});

	}






// ----- VERIFY BLANK 2 OF BONUS QUESTION ----- //
function VerifyBonusBlank2() {
	var url = serverURL() + "/verifyBonusBlank2.php";
			
	var landmarkid = localStorage.getItem("landmarkid");
	var blank2  = $("#BonusQuestion2").val();

	var JSONObject = {
		"blank2": blank2,
		"landmarkid": landmarkid,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			VerifyBonusBlank2Result(arr);	
		}, error: function () {
			alert("error123");
		}
	});
}
	
	// function to execute if php call is successful
function VerifyBonusBlank2Result(arr) {
	
	if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
		IfBonusBlank2IsCorrect();
		} else { // == 0 means no data is found with the given answer;
		
			IfBonusBlank2IsWrong();                             
		}
	}

function IfBonusBlank2IsCorrect() {

	var answerresult = "Correct"; 
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank2.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": username,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			retrieveScoreBlank2();  
		}, error: function () {
			alert("Erorr 1");
		}
	});
}

function retrieveScoreBlank2() {
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
			retrieveScoreforBlank2Result(arr);
		}, error: function () {
			alert("error");
		}
	});
}

function retrieveScoreforBlank2Result(arr){
	for (i = 0; i < arr.length; i++) {
	   var score = arr[i].score;
	   var newscore = Number(score) + 3;
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
			VerifyBonusBlank3();
		}, error: function () {
			
		}
	});
}


function IfBonusBlank2IsWrong() {

	var answerresult = "Wrong";
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank2.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": localStorage.getItem("username"),
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			VerifyBonusBlank3();
		}, error: function () {

		}
	});

}













// ----- VERIFY BLANK 3 OF BONUS QUESTION ----- //
function VerifyBonusBlank3() {
	var url = serverURL() + "/verifyBonusBlank3.php";
			
	var landmarkid = localStorage.getItem("landmarkid");
	var blank3  = $("#BonusQuestion3").val();

	var JSONObject = {
		"blank3": blank3,
		"landmarkid": landmarkid,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			VerifyBonusBlank3Result(arr);	
		}, error: function () {
			alert("error123");
		}
	});
}
	
	// function to execute if php call is successful
function VerifyBonusBlank3Result(arr) {
	
	if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
		IfBonusBlank3IsCorrect();
		} else { // == 0 means no data is found with the given answer;
		IfBonusBlank3IsWrong();                             
		}
	}

function IfBonusBlank3IsCorrect() {

	var answerresult = "Correct"; 
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank3.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": username,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			retrieveScoreBlank3();  
		}, error: function () {
			alert("Erorr 1");
		}
	});
}

function retrieveScoreBlank3() {
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
			retrieveScoreforBlank3Result(arr);
		}, error: function () {
			alert("error");
		}
	});
}

function retrieveScoreforBlank3Result(arr){
	for (i = 0; i < arr.length; i++) {
	   var score = arr[i].score;
	   var newscore = Number(score) + 3;
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
			VerifyBonusBlank4();
		}, error: function () {
			
		}
	});
}


function IfBonusBlank3IsWrong() {
	var answerresult = "Wrong";
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank3.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": localStorage.getItem("username"),
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			VerifyBonusBlank4();
		}, error: function () {

		}
	});

}





















// ----- VERIFY BLANK 4 OF BONUS QUESTION ----- //
function VerifyBonusBlank4() {
	var url = serverURL() + "/verifyBonusBlank4.php";
			
	var landmarkid = localStorage.getItem("landmarkid");
	var blank4  = $("#BonusQuestion4").val();

	var JSONObject = {
		"blank4": blank4,
		"landmarkid": landmarkid,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			VerifyBonusBlank4Result(arr);	
		}, error: function () {
			alert("error123");
		}
	});
}
	
	// function to execute if php call is successful
function VerifyBonusBlank4Result(arr) {
	
	if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
		IfBonusBlank4IsCorrect();
		} else { // == 0 means no data is found with the given answer;
		IfBonusBlank4IsWrong();                             
		}
	}

function IfBonusBlank4IsCorrect() {

	var answerresult = "Correct"; 
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank4.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": username,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			retrieveScoreBlank4();  
		}, error: function () {
			alert("Erorr 1");
		}
	});
}

function retrieveScoreBlank4() {
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
			retrieveScoreforBlank4Result(arr);
		}, error: function () {
			alert("error");
		}
	});
}

function retrieveScoreforBlank4Result(arr){
	for (i = 0; i < arr.length; i++) {
	   var score = arr[i].score;
	   var newscore = Number(score) + 3;
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
			VerifyBonusBlank5();
		}, error: function () {
			
		}
	});
}


function IfBonusBlank4IsWrong() {

	var answerresult = "Wrong";
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank4.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": localStorage.getItem("username"),
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			VerifyBonusBlank5();
		}, error: function () {

		}
	});

}







// ----- VERIFY BLANK 5 OF BONUS QUESTION ----- //
function VerifyBonusBlank5() {
	var url = serverURL() + "/verifyBonusBlank5.php";
	
	var landmarkid = localStorage.getItem("landmarkid");
	var blank5  = $("#BonusQuestion5").val();

	var JSONObject = {
		"blank5": blank5,
		"landmarkid": landmarkid,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			VerifyBonusBlank5Result(arr);	
		}, error: function () {
			alert("error123");
		}
	});
}
	
	// function to execute if php call is successful
function VerifyBonusBlank5Result(arr) {
	
	if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct answer entered
		IfBonusBlank5IsCorrect();
		} else { // == 0 means no data is found with the given answer;
		IfBonusBlank5IsWrong();                             
		}
	}

function IfBonusBlank5IsCorrect() {

	var answerresult = "Correct"; 
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank5.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": username,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			retrieveScoreBlank5();  
		}, error: function () {
			alert("Erorr 1");
		}
	});
}

function retrieveScoreBlank5() {
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
			retrieveScoreforBlank5Result(arr);
		}, error: function () {
			alert("error");
		}
	});
}

function retrieveScoreforBlank5Result(arr){
	for (i = 0; i < arr.length; i++) {
	   var score = arr[i].score;
	   var newscore = Number(score) + 3;
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
			window.location = "survey.html";
		}, error: function () {
			
		}
	});
}


function IfBonusBlank5IsWrong() {

	var answerresult = "Wrong";
	var username = localStorage.getItem("username");

	var url = serverURL() + "/resultBonusBlank5.php";

	var JSONObject = {
		"answerresult": answerresult,
		"username": localStorage.getItem("username"),
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) {
			window.location = "survey.html";
		}, error: function () {

		}
	});

}








})();
