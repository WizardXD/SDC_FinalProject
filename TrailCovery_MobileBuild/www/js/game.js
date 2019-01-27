(function () {

    $(document).ready(function () {
        
        getTrailTime();
        getArtefact();
        getBonus();
        var x = setInterval(function() { // Update the count down every 1 second (1 second is defined by 1000, 2 seconds = 2000, ....)
            disableArtefactBtn();
         }, 1000);
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
        for (i = 0; i < arr.length; i++) {
			$("#trailimage").html("<img src='" + serverURL() + "/images/trails/" + arr[i].trailimg + "' width='90%' length='20%' border='2'>");
            //var t;
            var y = "<p><ons-button id='btnartefact" + arr[i].artefactid + "' style='width:45%'>" + "Artefact " + (i+1) + " </ons-button><p/>";
            $("#artefactbtn").append(y);
            $("#btnartefact" + arr[i].artefactid).bind("click", { 
                id: arr[i].artefactid
             }, function (event) {
                var data = event.data;
                _showartefactResullt(data.id);
            });

        }
    }

    function _showartefactResullt(artefactid) {
        localStorage.setItem("artefactid", artefactid);
        window.location = "quiz.html?artefactid=" + artefactid;
    }


    //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
    function getBonus() {
        var url = serverURL() + "/gamebonus.php";

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
                _showBonusResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _showBonusResult(arr) {
        for (i = 0; i < arr.length; i++) {

            var bonusqn = "<p><ons-button id='btnbonus" + arr[i].landmarkid + "' style='width:45%' disabled> Bonus </ons-button><p/>";
            $("#bonusbtn").append(bonusqn);
            $("#btnbonus" + arr[i].landmarkid).bind("click", { 
                id: arr[i].landmarkid
             }, function (event) {
                var data = event.data;
                _showBonusResullt(data.id);
            });

        }
    }

    function _showBonusResullt(landmarkid) {
        localStorage.setItem("landmarkid", landmarkid);
        window.location = "bonus.html?landmarkid=" + landmarkid;
    }
	
    // function to retrieve the start time of the event
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

            var fulldate = new Date(arr[i].date);
            var day = fulldate.getDate();
            var months = (fulldate.getMonth())+1;
            var years = fulldate.getFullYear();
            
            var time = arr[i].starttime; //e.g 16:00:00 (real value is retrieved from the database)
            var hours = Number(time.substr(0,2)); //retrieve the 0-1 value from starttime (hours) - 16
            var minutes = Number(time.substr (3,2)); //retrieve the 3-4 value from starttime (minutes) - 00
            var seconds = Number(time.substr (6,2)); //retrive the 6-7 value from starttime (seconds) - 00
            
            var duration = Number(arr[i].duration); //duration of the game is retrieved from the database
            
            var endhour = hours + duration; //end time is equal to the addition of start time with duration (e.g. Start Time = 16 Hours, Duration = 2 Hours, End Time = 18 Hours)
            var enddatetime = new Date (years, months-1, day, endhour, minutes, seconds);  
            
            var endTime = new Date(enddatetime).getTime(); // set variable countDownDate as the end time
            
            var x = setInterval(function() { // Update the count down every 1 second (1 second is defined by 1000, 2 seconds = 2000, ....)

                var now = new Date().getTime(); // set variable now as current time
                
                var distance = endTime - now; // find the differences between the end date and the current time
                
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Time calculations for hours
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Time calculations for minutes
                var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Time calculations seconds
                
                                                                        // __h __m __s to the game end.
                document.getElementById("countdowntimer").innerHTML = + hours + "h " + minutes + "m " + seconds + "s " + "to the game end."; // push to div with id equals "countdowntimer" set in html
                
                // if time is = 0 (0h:0M:0S), -insert an action that will happen-
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countdowntimer").innerHTML = "Game Ended";
                    recordEndTime();
                

                    function recordEndTime() {

                        var url = serverURL() + "/updateendtime.php";
                         
                        var timeleft = duration + ":00:00";

                        var JSONObject = {
                            "username": localStorage.getItem("username"),
                            "timeleft": timeleft,
                        };
                
                         $.ajax({
                            url: url,
                            type: 'GET',
                            data: JSONObject,
                            dataType: 'json',
                            contentType: "application/json; charset=utf-8",
                            success: function (arr) {
                                window.location = "survey.html";	
                            },
                            error: function () {
                                alert("Wrong");       //Change to Validation Message
                            }
                        });
                    }


                }
            }, 1000); //each 1000 = 1 second, refresh at 1 second interval
            
        }
    }

    




    function disableArtefactBtn() {
        var url = serverURL() + "/disablebtns.php";
            var JSONObject = {
                "username": localStorage.getItem("username"),
            };

            $.ajax({
                url: url,
                type: 'GET',
                data: JSONObject,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (arr) {
                    _disableArtefactBtnResult(arr);	
                },
                error: function () {
                    alert("Wrong");       //Change to Validation Message
                }
        });
    }

    function _disableArtefactBtnResult(arr) {
        for (i = 0; i < arr.length; i++) {
            var artefactaid = arr[i].artefactaid;
            var artefactbid = arr[i].artefactbid;
            var artefactcid = arr[i].artefactcid;
            var artefactdid = arr[i].artefactdid;
            var artefacteid = arr[i].artefacteid;
            var artefactfid = arr[i].artefactfid;

            if (artefactaid != '') {
                document.getElementById('btnartefact' + arr[i].artefactaid).disabled = true;
            } 
            
            if (artefactbid != '') {
                document.getElementById('btnartefact' + arr[i].artefactbid).disabled = true;
            } 
            if (artefactcid != '') {
                document.getElementById('btnartefact' + arr[i].artefactcid).disabled = true;
            } 
            if (artefactdid != '') {
                document.getElementById('btnartefact' + arr[i].artefactdid).disabled = true;
            } 
            if (artefacteid != '') {
                document.getElementById('btnartefact' + arr[i].artefacteid).disabled = true;
            } 
            if (artefactfid != '') {
                document.getElementById('btnartefact' + arr[i].artefactfid).disabled = true;
            }
            if (artefactaid != '' && artefactbid != '' && artefactcid != '' && artefactdid != '' && artefacteid != '' && artefactfid != '') {
                enableBonusBtn();
            }
        }
    }

    function enableBonusBtn() {
        var url = serverURL() + "/gamebonus.php";

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
                enableBonusBtnResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function enableBonusBtnResult(arr) {
        for (i = 0; i < arr.length; i++) {
        var landmarkid = arr[i].landmarkid;
            document.getElementById('btnbonus' + arr[i].landmarkid).disabled = false;
        }
    }



})();





