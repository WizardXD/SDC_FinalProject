function serverURL() {
    return "http://1600993h.projectsbit.org/sdc";
}

function validationMsgs(message, title, button) {
    navigator.notification.alert(
        message,
        function () { },
        title,
        button
    );
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}

//function to show popover
var showPopover = function (target) {
    document
        .getElementById('popover')
        .show(target);
};

//function to hide popover
var hidePopover = function () {
    document
        .getElementById('popover')
        .hide();
};