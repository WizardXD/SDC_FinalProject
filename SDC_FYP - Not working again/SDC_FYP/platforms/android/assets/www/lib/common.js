function serverURL() {
    return "http://1600993h.projectsbit.org/sdc"
}

function validationMsgs(message, title, button) {
    navigator.notification.alert(
        message,
        function () { },
        title,
        button
    );
}