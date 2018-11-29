(function () {

    $(document).ready(function () {
	getGroupsInWR();
     });

    //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
    function getGroupsInWR() {
		var url = serverURL() + "/waitingroom.php";
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
	
})();

