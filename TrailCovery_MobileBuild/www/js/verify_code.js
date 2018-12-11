(function () {
	var t, accesscode; //global variables
	
    $(document).ready(function () {
       $("#btnStartGame").click(function () { //execute the following when the btnStartGame is clicked
		   codeVerification(); 
        });
    });

    //retrieve the details of events
    function codeVerification() {
    var url = serverURL() + "/verifycode.php";
    accesscode = $("#txtWaitingRoomCode").val(); 
	
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
		 if (arr[0].result.trim() !== "0") {                    //!== 0 means at least a row of data is found --> correct accesscode entered
        	localStorage.setItem("accesscode", accesscode);
			ons.notification.alert('Hold on', {title: 'Success'});   
			checkEventDate();
			getEventid();		
			updateEventid();
    		} else {                                                         // == 0 means no data is found with the given accesscode
        	ons.notification.alert('Wrong Game Code, try again', {title: 'Not Found'});                               
    		}
	}

	function getEventid() {
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
		}
    }
	
	function updateEventid() {
		var url = serverURL() + "/updatecodestep2.php";
		var username = localStorage.getItem('username');
		eventid = localStorage.getItem('eventid');

		var JSONObject = {
			"username": username,
			"event": eventid
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
