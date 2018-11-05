/*jQuery Validation API */
$('#RegisterForm1').validate({

    /* To check what this API does*/
    messages: {
        newusername: "Username is required",
        newpassword: "Password is required",

    },

    focusInvalid: false,
    submitHandler: function () {
        return false;
    },

    errorPlacement: function (error, element) {
        error.appendTo(element.parent().after());
        //error.appendTo(element.parent().parent().after());
    }

}); /* End of Validation*/


//register button
$("#rgstrbtn").bind("click", function () {
    window.location = "register.html";
});

$("#lgnbtn").bind("click", function () {
    if ($("#authForm").valid()) {
        login();
    }
});


    }); /* End of Document Ready */
