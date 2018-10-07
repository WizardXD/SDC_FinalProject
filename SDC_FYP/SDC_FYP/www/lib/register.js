(function () {
    "use strict";

    var counter = 2;
    var url, groupname, username, password, school, email, contactdetails, membername1, membername2, membername3, membername4, membername5, membername6; 




    $(document).ready(function () {
       
        $("#addMemberbtn").click(function () {
            addMemberNames();
        });
        $("#registerbtn").click(function () {
            registerUser();
        });

    });  // end of document ready --> ready event occurs when the page is loaded




    function addMemberNames() {
        if (counter > 6) {                                                //maximum members allowed = 6, will adjust based on what the sponsor requrested.
            alert("The maximum number of members is 6");                  //message that will be alerted if members > 6
            return false;
        }

        else if (counter >= 3) {
            var newGroupMember = $(document.createElement('div'))         //create a new div element
                .attr("id", 'GroupMember' + counter);                     //.attr(attribute, value)
            newGroupMember.after().html('<p><ons-input name="membernames' + counter + '" id="membernames' + counter + '" value="" placeholder="Member ' + counter + ' Name"></ons-input><p/>');   //.after --> insert contetnt after....
            newGroupMember.appendTo("#GroupMembersName");                 //.apendTo("#")  <-- insert every element into GroupMembersName
            counter++;
        }

        else if (counter == 2) {                                          // only the second text input field will have the 'remove members'/ minus sign
            var newGroupMember = $(document.createElement('div'))         //create a new div element
                .attr("id", 'GroupMember' + counter);                     //.attr(attribute, value)
            newGroupMember.after().html('<p><ons-input name="membernames' + counter + '" id="membernames' + counter + '" value="" placeholder="A. Leader Name" style="width:166px"></ons-input>' +
                '&nbsp;<input type="button" value="- " id="removeMemberbtn"><p/>');
            newGroupMember.appendTo("#GroupMembersName");
            counter++;

            $("#removeMemberbtn").click(function () {
                counter--;
                $("#GroupMember" + counter).remove();
            });
        }
    }                                                                      // end of addMemberNames function

    function registerUser() {
        groupname = $("#newgroupname").val();
        username = $("#newusername").val();
        password = $("#newpassword").val();
        school = $("#school").val();
        email = $("#emailaddress").val(); 
        contactdetails = $("#contactdetails").val();
        membername1 = $("#membernames1").val();
        membername2 = $("#membernames2").val();
        membername3 = $("#membernames3").val();
        membername4 = $("#membernames4").val();
        membername5 = $("#membernames5").val();
        membername6 = $("#membernames6").val();

        url = serverURL() + "/newuser.php";

        var JSONObject = {
            "groupname": groupname,
            "username": username,
            "password": password,
            "school": school,
            "email": email,
            "contactdetails": contactdetails,
            "membername1": membername1,
            "membername2": membername2,
            "membername3": membername3,
            "membername4": membername4,
            "membername5": membername5,
            "membername6": membername6,
        };


        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function () {
                alert("Account Created");                   
            },
            error: function () {
                alert("Blah Blah Black Sheep");
            }
        }); 
    }                                                                      // end of registerUser function

})();

