(function () {
    "use strict";
    //Declare variables to receive gamecode and instructions from main.html
    var gamecode;
    var instructions;

    $(document).ready(function () {
        //validate the GameCodeform
        $("#GameCodeForm").validate({
            // Show message if the user does not enter gamecode
            messages: {
                txtGameCode: "Game Code is required"
            },
            focusInvalid: false,
            submitHandler: function () {
                return false;
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().parent().after());
            }
        });

        // If the user clicks 'Start Game' button
        $("#btnStartGame").bind("click", function () {
            if ($("#GameCodeForm").valid()) {
                startgame();
            }
        });

        ////If the user clicks 'Instructions' button - branch to instruction.html
        //$("#btnInstructions").bind("click", function () {
        //    window.location = "instructions.html";
        //});

    });

    //Startgame function module
    function startgame() {
        ////Create URL - e.g. server + /login_cutomers.php 

        var url = serverURL() + "/start_game.php";
        var result;
        //Assign gamecode from text field in main.html
        gamecode = $("#txtGameCode").val();


        // Call AJAX functions using JSON object 
        // AJAX = Asynchronous Javascript and XML
        //JSON = Javascript Object Notation
        var JSONObject = {
            //pass 1 objects - gamecode
            "gamecode": gamecode
        };

        //using GET method 
        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            //There 2 outcomes - success and error
            success: function (arr) {
                // If it is successful, the return results using format [{"result":"1"}]
                // Calls _getLoginResult with contents of arr
                _getGameCode(arr);
            },
            error: function () {
                validationMsg();
            }
        });
    }

    // Receives the _getGameCode with 'arr' contents - [{"result":"1"}]
    function _getGameCode(arr) {
        // Check if result is NOT "0"
        if (arr[0].result.trim() !== "0") {
            // Assign gamecode to localStorage
            localStorage.setItem("gamecode", gamecode);
            // Show the notification
            validationMsgs("Game have started", "Information", "OK");
            // Re-direct to game.html
            window.location = "game.html";
        }
        else {
            // Show Error messages
            validationMsgs("Error in Game Code", "Validation", "Try Again");
        }
    }


})();