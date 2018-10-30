(function () {
    "use strict";

    //global variables
    var counter = 2;
    var url, groupname, username, password, school, email, contactdetails, membername1, membername2, membername3, membername4, membername5, membername6, membername7, membername8, avatar;

    //the ready event occurs when the document object model has been loaded
    $(document).ready(function () {
        $("#addMemberbtn").click(function () {
            addMemberName();
        });
    });


    function addMemberName() {
        if (counter > 8) {                                                //maximum members allowed = 6, will adjust based on what the sponsor requrested.
            alert("The maximum number of members is 8");                  //message that will be alerted if members > 6
            return false;
        }

        else if (counter >= 3) {
            var newGroupMember = $(document.createElement('div'))         //create a new div element
                .attr("id", 'GroupMember' + counter);                     //.attr(attribute, value)
            newGroupMember.after().html('<p><ons-input name="member' + counter + '" id="member' + counter + '" value="" placeholder="Member ' + counter + ' Name"></ons-input><p/>');   //.after --> insert contetnt after....
            newGroupMember.appendTo("#GroupMembersName");                 //.apendTo("#")  <-- insert every element into GroupMembersName
            counter++;
        }

        else if (counter === 2) {                                          // only the second text input field will have the 'remove members'/ minus sign
            var newGroupMember = $(document.createElement('div'))         //create a new div element
                .attr("id", 'GroupMember' + counter);                     //.attr(attribute, value)
            newGroupMember.after().html('<p><ons-input name="member' + counter + '" id="member' + counter + '" value="" placeholder="A. Leader Name" style="width:166px"></ons-input>' +
                '&nbsp;<input type="button" value="- " id="removeMemberbtn"><p/>');
            newGroupMember.appendTo("#GroupMembersName");
            counter++;

            $("#removeMemberbtn").click(function () {
                counter--;
                $("#GroupMember" + counter).remove();
            });
        }
    }                                                                      // end of addMemberNames function
})();

