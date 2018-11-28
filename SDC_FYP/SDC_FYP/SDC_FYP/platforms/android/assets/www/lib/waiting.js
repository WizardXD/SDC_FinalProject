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

(function () {
    var groupname;


    $(document).ready(function () {
        getWaitingRoom();

    });

    function getWaitingRoom() {
        var url = serverURL() + "/waiting.php";
        var JSONObject = {
            "groupname": localStorage.getItem("groupname")
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getWaitingRoomResult(arr);
            }, error: function () {
                alert("Error");
            }
        });
    }
    function _getWaitingRoomResult(arr) {

        groupname = arr[0].groupname;


        $("#GroupName").html("Group: " + groupname);

    }

});
