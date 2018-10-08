ons.ready(function () {
   
});



window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function (page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
};

//Popover function to show the instruction

var showPopover = function (target) {
    document
        .getElementById('popoverinstruction')
        .show(target);
};

var hidePopover = function () {
    document
        .getElementById('popoverinstruction')
        .hide();
};

var test = function () {
    console.log("asda");
};




function startgame() {
   var url = serverURL() + "/game.php"; //have an issue 
   var gamecode = $("#txtGameCode").val();



    //JSONObject
    JSONObject = {
        "gamecode": game, //Key:value
        
    };

    //ajax to call
    $.ajax({
        url: url, //A string containing the URL to which the request is sent.
        type: 'GET',
        data: JSONObject, //Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests.
        dataType: 'json', //Evaluates the response as JSON and return a JS object
        contentType: "application/json; charset=utf-8",
        success: function (data) { //function to be called if the request succeeds //this function will be called




        }
    });
}
