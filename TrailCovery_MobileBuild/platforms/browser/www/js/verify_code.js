(function () {
	var t, accesscode, facilitatorcode; //global variables
	
    $(document).ready(function () {
       $("#btnStartGame").click(function () { //execute the following when the btnStartGame is clicked
		   codeVerification(); //validate the game's code
        });
	});
	




    function codeVerification() { //validate the game's code
    var url = serverURL() + "/verifycode.php";
    accesscode = $("#txtWaitingRoomCode").val(); //retrieve value from div and assign it to var accesscode
	
	var JSONObject = {
        "accesscode": accesscode
    };

	  $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            _getCodeResult(arr);
        }, error: function () {
            validationMsg();
        }
    });
	}
	
	function _getCodeResult(arr) { 
		 if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct accesscode entered
			var i = arr[0].result;
			if (i !== 'END') {
				faciCodeVerification(); //validate the facilitator's code
				localStorage.setItem("accesscode", accesscode);
			} else if (i == 'END') {
				ons.notification.alert('Please enter another game code.', {title: 'Game has ended'});  
			}
    	} else { //== 0 means no data is found with the given accesscode
        	ons.notification.alert('Wrong Game Code, try again', {title: 'Not Found'});                             
    	}
	}





	function faciCodeVerification() { //validate the facilitator's code
		var url = serverURL() + "/verifyfacicode.php";
		var facilitatorcode = $("#txtfacilitatorcode").val(); //retrieve the value from div and assign it to var facilitatorcode
		
		var JSONObject = {
			"facilitatorcode": facilitatorcode
		};
	
		  $.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				_faciCodeResult(arr);
			}, error: function () {
				validationMsg();
			}
		});
		}

	function _faciCodeResult(arr){
		if (arr[0].result.trim() !== "0") { //!== 0 means at least a row of data is found --> correct accesscode entered
			var facilitatorcode = $("#txtfacilitatorcode").val();
			localStorage.setItem("facilitatorcode", facilitatorcode);
			ons.notification.alert('Hold On', {title: 'Success'}); 
			getEventid(); //retrieve the id of the event from database based on the game's code entered	
    		} else { // == 0 means no data is found with the given accesscode
        	ons.notification.alert("Please enter a valid facilitator's code", {title: 'Not Found'});                               
    		}
	}

	function getEventid() { //retrieve the id of the event based on the game's code entered

		var url = serverURL() + "/updatecodestep1.php";
	
		var JSONObject = {
			"accesscode": accesscode
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				_getEventidResults(arr);
			}, error: function () {
				validationMsg();
			}
		});
	}
	
	function _getEventidResults(arr) {
		for (i = 0; i < arr.length; i++) {     
            var eventid = arr[i].eventid;
			localStorage.setItem("eventid", eventid);
			getFacilitatorid(); //retrieve the id of the facilitator from database based on the facilitator's code entered
		}
		
	}
	
   function getFacilitatorid() {
	var url = serverURL() + "/getFacilitatorID.php";

	var facilitatorcode = $("#txtfacilitatorcode").val();

	var JSONObject = {
		"facilitatorcode": facilitatorcode,
	};

	$.ajax({
		url: url,
		type: 'GET',
		data: JSONObject,
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function (arr) { 
			_getFacilitatorid(arr);
		}, error: function () {
			validationMsg();
		}
	});  
   }

    function _getFacilitatorid(arr) {
		for (i = 0; i < arr.length; i++) {    
			var facilitatorid = arr[i].facilitatorid;
			localStorage.setItem("facilitatorid", facilitatorid);
			updateEventid();
		}
	}
	
	function updateEventid() {
		
		var url = serverURL() + "/updatecodestep2.php";
		var username = localStorage.getItem('username');
		eventid = localStorage.getItem('eventid');
		var facilitatorid = localStorage.getItem('facilitatorid');

		var JSONObject = {
			"username": username,
			"eventid": eventid,
			"facilitatorid":facilitatorid
		};

		$.ajax({
			url: url,
			type: 'GET',
			data: JSONObject,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (arr) {
				
				_getUpdateEventResult(arr);
			}, error: function () {
				validationMsg();
			}
		});
	}
	
	function _getUpdateEventResult(arr){
	   window.location = "waitingroom.html";
	}
	
})(); 
