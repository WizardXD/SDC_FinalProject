(function () {

    $(document).ready(function () {
	getEventStatus();
	getEventDetails();
	getGroupsInWR();
	//getAdminsInWR();
     });
	 
	 // check the status of the game... if status = ONG, relocate all users to the game page
	 // the status of the event will only change from YTB to ONG after the admin press on the start game button
	 function getEventStatus() {
		 var url = serverURL() + "/wrstatus.php";
			var JSONObject = {
				"accesscode": localStorage.getItem("accesscode")
			};

			$.ajax({
				url: url,
				type: 'GET',
				data: JSONObject,
				dataType: 'json',
				contentType: "application/json; charset=utf-8",
				success: function (arr) {
					_showEventStatusResult(arr);
				},
				error: function () {
					alert("Wrong");       //Change to Validation Message
				}
			});
	 }
	 
	 function _showEventStatusResult(arr) {
		for (i = 0; i < arr.length; i++) {
            var status = arr[i].status;
				if (status === "ONG") {
				window.location = 'game.html';
				} 
		}
	 }

	 
	 // display the details of events
	 function getEventDetails() {
		var url = serverURL() + "/wrdetails.php";
			var JSONObject = {
				"accesscode": localStorage.getItem("accesscode")
			};

			$.ajax({
				url: url,
				type: 'GET',
				data: JSONObject,
				dataType: 'json',
				contentType: "application/json; charset=utf-8",
				success: function (arr) {
					_showEventDetailsResult(arr);
				},
				error: function () {
					alert("Wrong");       //Change to Validation Message
				}
			});
	 }
	 
	 function _showEventDetailsResult(arr) {
			 for (i = 0; i < arr.length; i++) {
				var t;
				t =  
				"<font size = '5'>" + arr[i].trailname + "</font><br/>" + 
				"<b>Location: </b>" + arr[i].traillocation + "<br/>" + 
				"<b> Duration: </b>" + arr[i].duration + " Hours";
				
				y =
				"<center><b>Facilitator-In-Charge</b></center>" +
				"<center><img src='" + serverURL() + "/images/admins/" + arr[i].adminimg + "' width=25%'><br />" + "   " +
				arr[i].adminname;
				$("#wrdetails").append(t);	
				$("#wrfacilitator").append(y);
		}
	 }
	 
	 
    //function to display groups that has entered the x accesscode
    function getGroupsInWR() {
		var url = serverURL() + "/wrstudents.php";
        var JSONObject = {
            "accesscode": localStorage.getItem("accesscode")
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _showGroupsInWRResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }
	
	function _showGroupsInWRResult(arr) {
		 for (i = 0; i < arr.length; i++) {
            var t;
            t = 
			"<img src='" + serverURL() + "/images/avatars/" + arr[i].image + "' width=17%' height='17%'>" + arr[i].groupname + "<br />";
            $("#wrgroups").append(t);

        }
	}
	
})();

