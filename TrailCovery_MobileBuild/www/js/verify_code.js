(function () {
	var t;
	
    $(document).ready(function () {
       $("#btnStartGame").click(function () {
		   codeVerification();
		   
        });
    });

    //retrieve the details of events
    function codeVerification() {
    var url = serverURL() + "/verifycode.php";
    var accesscode = $("#txtWaitingRoomCode").val();
	
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
           var accesscode = $("#txtWaitingRoomCode").val();
           localStorage.setItem("accesscode", accesscode);
           ons.notification.alert('Hold on', {
            title: 'Success'
        });   
		getEventid()		

    } else {                                                         // == 0 means no data is found with the given accesscode
        ons.notification.alert('Wrong Game Code, try again', {
            title: 'Not Found'
        });                               
    }
	}
	
	function getEventid() {
		var url = serverURL() + "/updatecodestep1.php";
		var accesscode = $("#txtWaitingRoomCode").val();
	
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
            t = arr[i].eventid;
			localStorage.setItem("eventid", t);
			updateEventid();
		}
    }
	
	function updateEventid() {
		var url = serverURL() + "/updatecodestep2.php";
		var eventid = t;
		var username = localStorage.getItem('username');
	
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
