$(document).ready(function () {


});






function getallteamrecords() {

    var teamname,
        groupleadername,
        name1,
        name2,
        name3,
        name4,
        JSONObject,
        url;

    url = serverURL() + "/admingetaccount.php";

    JSONObject = {

    }
    
    $.ajax({
        url: url, //A string containing the URL to which the request is sent.
        type: 'GET',
        dataType: 'json', //Evaluates the response as JSON and return a JS object
        contentType: "application/json; charset=utf-8",
        success: function (data) { //function to be called if the request succeeds //this function will be called
           

        }

        // error: function () {
        //console.log('error');
        //}









    });
}


}