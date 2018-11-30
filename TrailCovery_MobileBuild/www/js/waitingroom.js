(function () {

    $(document).ready(function () {
	getEventStatus();
	getGroupsInWR();
	getAdminsInWR();
     });
	 
	 
	 function getEventStatus() {
		 var url = serverURL() + "/wrgame.php";
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

    //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
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
			"<ons-card>" + "<img src='" + serverURL() + "/images/avatars/" + arr[i].image + "' width=17%' height='17%'>" + arr[i].groupname + "</ons-card>";
            $("#groups").append(t);

        }
	}
	
	function getAdminsInWR() {
		var url = serverURL() + "/wradmins.php";
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
                _showAdminsInWRResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }
	
	function _showAdminsInWRResult(arr) {
	 for (i = 0; i < arr.length; i++) {
			var t;
            t = 
			"<ons-card>" + "<img src='" + serverURL() + "/images/admins/" + arr[i].adminimg + "' width=17%' height='17%'>" + arr[i].adminname + "</ons-card>";
            $("#admins").append(t);
			
		
	}
	
	}
	
})();

