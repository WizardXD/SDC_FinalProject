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

//Dont delete this is for sidenav to function properly

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