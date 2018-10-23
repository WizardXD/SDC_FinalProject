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
    gameStartVerfication();
};


// function to verify the game code
function gameStartVerfication() {
    var url = serverURL() + "/verifygamecode.php";
    var result;
    var accesscode = $("#txtGameCode").val();

    var JSONObject = {
        "accesscode": accesscode
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            _getGameCodeResult(arr);
        }, error: function () {
            validationMsg();
        }
    });
}

// function to execute if the game code entered matches the accesscode in database.
function _getGameCodeResult(arr) {
    if (arr[0].result.trim() !== "0") {
        var accesscode = $("#txtGameCode").val();
        localStorage.setItem("accesscode", accesscode);
        alert("Success");
        window.location = "game.html";
    } else {
        alert("Wrong Game Code");
    }
}  