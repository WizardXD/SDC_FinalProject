(function () {
    "use strict";
    $(document).ready(function () {

        // add/remove input field
        //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
        $(".add-more").click(function () {                  
            var html = $(".copy-fields").html();            
            $(".membernames").after(html);
        });
        //here it will remove the current value of the remove button which has been pressed
        $("body").on("click", ".remove", function () {
            $(this).parents(".control-group").remove();
        });
        
        $("#registerbtn").bind("click", function () {
                registerUser();
        });
    });

    function registerUser() {
    //var groupname;
    //var username;
    //var password;
    //var password2;
    //var school;
    var name1;
    var name2;

    //groupname = $("#newgroupname").val();
    //username = $("#newusername").val();
    //password = $("#newpassword").val();
    //password2 = $("#newpassword2").val();
    //school = $("#school").val();
    name1 = $("#name1").val();
    name2 = $("#name2").val();

    //alert(groupname);
    //alert(username);
    //alert(password);
    //alert(school);
    alert(name1);
    alert(name2);
    }
})();

