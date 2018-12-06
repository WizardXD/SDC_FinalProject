(function () {

    $(document).ready(function () {
		$("#queryforaccesscode").bind("click", function () {
            getStatusonclick();
        });


     });
	 
	 var accesscode;
	 // check the status of the game... if status = ONG, relocate all users to the game page
	 // the status of the event will only change from YTB to ONG after the admin press on the start game button
	 function getStatusonclick() {
		
		//accesscode = $('#accesscodedropdown').find(":selected").text();
		accesscode = $('#accesscodedropdown').val();
		
		console.log(getStatusonclick);


/*		var url = serverURL() + "/wrr.php";
			var JSONObject = {
				"accesscode": accesscode
			}; */
/*
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
			}); */
	 }
	 

/*	 function _showEventStatusResult(arr) {
		for (i = 0; i < arr.length; i++) {
		   var x;
		   x = 
		   "<ons-card></ons-card>";
		   $("#displaypending").append(x);

	   }
   } */

})();

