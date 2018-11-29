(function () {

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
                             
        window.location = "waitingroom.html";
    } else {                                                         // == 0 means no data is found with the given accesscode
        ons.notification.alert('Wrong Game Code, try again', {
            title: 'Not Found'
        });                               
    }
	}
		


})(); 
