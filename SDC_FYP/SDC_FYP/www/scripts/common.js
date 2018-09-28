function serverURL() {
    return "http://mp18.projectsbit.org/sdc"
}

function validationMsgs(message, title, button) {
    navigator.notification.alert(
        message,
        function () { },
        title,
        button
    );
}