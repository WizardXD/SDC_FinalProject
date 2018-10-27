(function () {
    "use strict";

    var counter = 2;
    var url, groupname, username, password, school, email, contactdetails, membername1, membername2, membername3, membername4, membername5, membername6, membername7, membername8, avatar;

    $(document).ready(function () {
        $("#addMemberbtn").click(function () {
            addMemberName();
        });
        $("#registerbtn").click(function () {
            registerUser();
        });
    });  // end of document ready --> ready event occurs when the page is loaded

    function addMemberName() {
        if (counter > 8) {                                                //maximum members allowed = 6, will adjust based on what the sponsor requrested.
            alert("The maximum number of members is 8");                  //message that will be alerted if members > 6
            return false;
        }

        else if (counter >= 3) {
            var newGroupMember = $(document.createElement('div'))         //create a new div element
                .attr("id", 'GroupMember' + counter);                     //.attr(attribute, value)
            newGroupMember.after().html('<p><ons-input name="membername' + counter + '" id="membername' + counter + '" value="" placeholder="Member ' + counter + ' Name"></ons-input><p/>');   //.after --> insert contetnt after....
            newGroupMember.appendTo("#GroupMembersName");                 //.apendTo("#")  <-- insert every element into GroupMembersName
            counter++;
        }

        else if (counter == 2) {                                          // only the second text input field will have the 'remove members'/ minus sign
            var newGroupMember = $(document.createElement('div'))         //create a new div element
                .attr("id", 'GroupMember' + counter);                     //.attr(attribute, value)
            newGroupMember.after().html('<p><ons-input name="membername' + counter + '" id="membername' + counter + '" value="" placeholder="A. Leader Name" style="width:166px"></ons-input>' +
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
        username = $("#newusername").val();
        password = $("#newpassword").val();

        email = $("#emailaddress").val();
        school = $("#school").val();
        contactdetails = $("#contactdetails").val();

        url = serverURL() + "/register.php";
        var JSONObject = {
            "username": username,
            "password": password,
            "email": email,
            "school": school,
            "phone": contactdetails
        };
        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getNewUserResult(arr);
            }
        });

        function _getNewUserResult(arr) {
            if (arr[0].result === 1) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                alert("Account Created");
            } else {
                alert("Error");
            }
        } 
       }

 // end of registerUser function
})();

