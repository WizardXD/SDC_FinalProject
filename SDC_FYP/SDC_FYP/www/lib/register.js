(function () {
    "use strict"; 
    $(document).ready(function () {

        // add/remove input field
        //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
        $(".add-more").click(function () {
            var html = $(".copy-fields").html();
            $(".after-add-more").after(html);
        });
        //here it will remove the current value of the remove button which has been pressed
        $("body").on("click", ".remove", function () {
            $(this).parents(".control-group").remove();
        });

    //validation
    $("#RegisterForm").validate({
        messages: {
            newgroupname: "employee name is required",
            newusername: "username is required"
        },
        focusInvalid: false,
        submitHandler: function () {
            return false;
        },
        errorPlacement: function (error, element) { 
            error.appendTo(element.parent().parent().after());
        },
    });
    $("#registerbtn").bind("click", function () {
        if ($("#RegisterForm").valid()) {
            alert("Hi");
            //registerUser();
        }
    });
});
})()

