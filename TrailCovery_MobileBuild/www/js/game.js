(function () {

    $(document).ready(function () {
		var endtime;
		getTrailTime();
        getArtefact();
    });

    //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
    function getArtefact() {
        var url = serverURL() + "/game.php";
        var userid = localStorage.getItem("userid");
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
                _showArtefactResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _showArtefactResult(arr) {
        //if i is less than the total  number of artefacts, increment by 1
        for (i = 0; i < arr.length; i++) {
			 $("#trailimage").html("<img src='" + serverURL() + "/images/trails/" + arr[i].trailimg + "' width='90%' length='20%' border='2'>");
            var t;
            // creating button with id similiar to the artefact id
            t = "<p><ons-button id='btn" + arr[i].artefactid + "' style='width:45%'>" + "Artefact " + (i+1) + " </ons-button><p/>";
            $("#artefactbtn").append(t);
            $("#btn" + arr[i].artefactid).bind("click", { id: arr[i].artefactid }, function (event) {
                var data = event.data;
                _showResult(data.id);
            });

        }
    }

    function _showResult(artefactid) {
        localStorage.setItem("artefactid", artefactid);
        window.location = "quiz.html?artefactid=" + artefactid;
    }
	
	
	

function getTrailTime() {
	var url = serverURL() + "/countdown.php";
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
                _showgetTrailTime(arr);	
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
    });
}

function _showgetTrailTime(arr) {
	for (var i = 0; i < arr.length; i++) {
		
		var fulldate = arr[i].date;
		var year = fulldate.substr(0, 4);
		var month = fulldate.substr(5, 2);
		var date = fulldate.substr(8, 2);
		
		var time = arr[i].time;
		var hours = Number(time.substr(0,2));
		var minutes = Number(time.substr (3,2));
		var seconds = Number(time.substr (6,2));
		
		var duration = Number(arr[i].duration);
		
		var endhour = hours + duration; 
		var endtime = new Date (year, month-1, date, endhour, minutes, seconds);
		
		
		
		var countDownDate = new Date(endtime).getTime();
		
		// Update the count down every 1 second
		var x = setInterval(function() {

			// set variable now as current date and time
			var now = new Date().getTime();
			
			// find the differences between the end date and the current time
			var distance = countDownDate - now;
			
			// Time calculations for days, hours, minutes and seconds
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			// push to div with id equals "demo" set in html
			document.getElementById("countdowntimer").innerHTML = + hours + "h " + minutes + "m " + seconds + "s " + "before the game ends.";
			
			// if condition is met, what will happen --> add in later.
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("countdowntimer").innerHTML = "Game Ended";
			}
		}, 1000);
		
		
	}
}

})();





