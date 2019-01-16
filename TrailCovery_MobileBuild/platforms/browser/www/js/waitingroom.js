(function () {

	$(document).ready(function () {
		getEventDetails();
		getGroupID();
		var x = setInterval(function() { // Update the count down every 1 second (1 second is defined by 1000, 2 seconds = 2000, ....)
			getEventStatus();
			getGroupsInWR();
		}, 1000);
	});


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

				var eventid = arr[i].eventid;
				localStorage.setItem("eventid", eventid);

				$("#trailname").html(arr[i].trailname);
				$("#trailimage").html("<img src='" + serverURL() + "/images/trails/" + arr[i].trailimg + "' width=100%'>");
					var y =
					"<center><b>Facilitator-In-Charge</b></center>" +
					"<center><img src='" + serverURL() + "/images/admins/" + arr[i].adminimg + "' width=25%'><br />" + "   " +arr[i].adminname;
					}
		}
	 


		function getGroupID() {
		
			var url = serverURL() + "/scoredetails.php";
			var JSONObject = {
				"username": localStorage.getItem("username")
			};
		
			$.ajax({
				url: url,
				type: 'GET',
				data: JSONObject,
				dataType: 'json',
				contentType: "application/json; charset=utf-8",
				success: function (arr) {
					_getGroupIDResult(arr);
				},
				error: function () {
					alert("Wrong");       //Change to Validation Message
				}
			});
	
		}
		 
		function _getGroupIDResult(arr){
			for (i = 0; i < arr.length; i++) {
	
			var groupid = arr[i].groupid;
			var groupname = arr[i].groupname;
			
			localStorage.setItem("groupid", groupid);
			localStorage.setItem("groupname", groupname);
	
			}
		}




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
				updateScoreTable();
			} 
		}
	}

	//insert eventid, groupid and groupname into score table
	function updateScoreTable() {
		var url = serverURL() + "/wrscorecode.php";
        var JSONObject = {
			"eventid": localStorage.getItem("eventid"),
			"groupid": localStorage.getItem("groupid"),
			"groupname": localStorage.getItem("groupname")
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                window.location = 'game.html';
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
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
		$("#wrgroups").empty();
		 for (i = 0; i < arr.length; i++) {
			var t;
            t = "<ons-card><img src='" + serverURL() + "/images/avatars/" + arr[i].image + "' width=22%' height='22%' class = 'groupimg'></br>" +  
			arr[i].groupname + "</ons-card>";
			$("#wrgroups").append(t);
		}
	}
	
})();



