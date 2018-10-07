(function () {
    "use strict";
    $(document).ready(function () {
        var counter = 2;

            $("#addMemberbtn").click(function () {
                if (counter > 6) {                                      //maximum members allowed = 6, will adjust based on what the sponsor requrested.
                    alert("The maximum number of members is 6");        //message that will be alerted if members > 6
                    return false;
                }
                
            if (counter >= 3) {
                var newGroupMember = $(document.createElement('div'))    //create a new div element
                    .attr("id", 'GroupMember' + counter);                //.attr(attribute, value)
                    newGroupMember.after().html('<p><ons-input name="membernames' + counter + '" id="membernames' + counter + '" value="" placeholder="Member ' + counter + ' Name"></ons-input><p/>');   //.after --> insert contetnt after....
                    newGroupMember.appendTo("#GroupMembersName");  //.apendTo("#")  <-- insert every element into GroupMembersName
                    counter++;
                }

            if (counter == 2) {                                          // only the second text input field will have the 'remove members'/ minus sign
                var newGroupMember = $(document.createElement('div'))    //create a new div element
                    .attr("id", 'GroupMember' + counter);                //.attr(attribute, value)
                newGroupMember.after().html('<p><ons-input name="membernames' + counter + '" id="membernames' + counter + '" value="" placeholder="Member ' + counter + ' Name" style="width:166px"></ons-input>' +
                                            '&nbsp;<input type="button" value="- " id="removeMemberbtn"><p/>');
                newGroupMember.appendTo("#GroupMembersName");
                counter++;

                $("#removeMemberbtn").click(function () {
                    if (counter == 2) {
                        //alert("No more textbox to remove");
                        return false;
                    }
                    counter--;
                    $("#GroupMember" + counter).remove();
                });
                
            }

        });

       
        //can delete afterwards
        $("#getButtonValue").click(function () {
            var msg = '';
            for (i = 1; i < counter; i++) {
                msg = "\n Member " + i + " : " + $('#membernames' + i).val();
                alert(msg);
            }
        }); 

        $("#registerbtn").bind("click", function () {
                alert("Hi");
        });
    });
})();

