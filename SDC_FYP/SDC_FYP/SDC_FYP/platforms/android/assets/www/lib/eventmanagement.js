(function () {

    $(document).ready(function () {
        getArtefact();
    });

    //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
    function getArtefact() {
        var url = serverURL() + "/eventview.php";
        var userid = localStorage.getItem("userid");
        var JSONObject = {
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _showEventResult(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }


    function _showEventResult(arr) {
        //if i is less than the total  number of artefacts, increment by 1
        for (i = 0; i < arr.length; i++) {
            var t;

            
            // creating button with id similiar to the artefact id
            t = "<ons-card>" +
                "<p> Trail Name: " + "<br/>" + "</p>" + 
                "<p> Date: " + arr[i].date + "<br/>" + "</p>" +
                "Facilitator-In-Charge: " + "<br/>" + "</p>" +
                "<ons-button id='btnEdit" + arr[i].eventid + "'>" + "Edit " + "</ons-button>" +
                "&nbsp; &nbsp; &nbsp;" +
                "<ons-button id='btnDelete" + arr[i].eventid + "'>" + "Delete " + " </ons-button>" +
                "</ons - card>";
            $("#event").append(t);

        }
    }
})();

