(function () {


    // For displaying the user details
    var role;
    // Showing the standard header buttons and icons
    $(document).on("pagebeforecreate", function () {
        printheader();

        $("#viewRoles").bind("click", function () {

            showUsers();

        });

        function showUsers() {
            var url = serverURL() + "/getusers.php";
            var JSONObject = {

                "role": $("#select").val()

            };

            $.ajax({
                url: url,
                type: 'GET',
                data: JSONObject,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (arr) {
                    _showRolesResult(arr);
                },
                error: function () {
                    validationMsg();
                }
            });
        }

        function _showRolesResult(arr) {
            var t;
            if ($.fn.dataTable.isDataTable('#showUsers')) {
                t = $('#showUsers').DataTable();
            }
            else {
                t = $('#showUsers').DataTable({
                    "searching": false,
                    "lengthChange": false
                });
            }
            t.clear();

            for (var i = 0; i < arr.length; i++) {
                t.row.add([
                    arr[i].email,
                    arr[i].school,
                    arr[i].phone,
                    "<a href='#' class='ui-btn' id='btn" + arr[i].username + "'>View</a>"
                ]).draw(false);

                $("#btn" + arr[i].username).bind("click", { id: arr[i].username },
                    function (event) {
                        var data = event.data;
                        userresult(data.id);
                    });

                $("#showUsers").show();
            }

            function userresult(username) {
                window.location = "getaccountbyusername.html?username=" + username;
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("school", school);
                localStorage.setItem("phone", phone);

            }
        }

    });

})();

    // LATER WHEN CLICK VIEW THEN DISPLAY THESE

    //function getallteamrecords() {

    //    var teamname,
    //        groupleadername,
    //        name1,
    //        name2,
    //        name3,
    //        name4,
    //        JSONObject,
    //        url;

    //    url = serverURL() + "/admingetaccount.php";

    //    JSONObject = {

    //    }

    //    $.ajax({
    //        url: url, //A string containing the URL to which the request is sent.
    //        type: 'GET',
    //        dataType: 'json', //Evaluates the response as JSON and return a JS object
    //        contentType: "application/json; charset=utf-8",
    //        success: function (data) { //function to be called if the request succeeds //this function will be called


    //        }

    // error: function () {
    //console.log('error');
    //}




    //    });
    //}


    //}
    //function to display the details of the artefact, such as image and background information
    function traildetails() {
        var url = serverURL() + "/trailmanagement.php";
        var trailid = decodeURIComponent(getUrlVars()["trailid"]);

        var JSONObject = {
            "trailid": trailid

        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                ShowTrailDetails(arr);
            },
            error: function () {
                alert("Error");         //Change to validation message 
            }
        });
    }

    //function to call if php call is successful
    function ShowTrailDetails(arr) {
        for (var i = 0; i < arr.length; i++) {
            $("#trailid").html("<p align='justify'>" + arr[i].trailid + "</p>");
            $("#trailname").html("<p align='justify'>" + arr[i].trailname + "</p>");
        }
    }
