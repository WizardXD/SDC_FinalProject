(function () {
    var username;
    var phone;
    var role
    
    $(document).ready(function () {
        getAccountDetails();
        getMembersDetails();

        $("#updatepassword").bind("click", function () {
            resetPassword(); 
        });
    });

    function getAccountDetails() {
        var url = serverURL() + "/getaccountdetails.php";
        var JSONObject = {
            "username": localStorage.getItem("username")
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getDetailsResult(arr);
            }, error: function () {
                alert("Error");
            }
        });
    }
    function _getDetailsResult(arr) {
        
        username = arr[0].username;
        phone = arr[0].phone;
        email = arr[0].email;
        school = arr[0].school;
        role = arr[0].role;
        var uppercaseRole = role.toUpperCase();

        $("#AccountUsername").html("Username: " + username);
        $("#LeaderePhone").html("Contact Details: +65-" + phone);
        $("#LeaderEmail").html("Email Address: " + email);
        $("#GroupSchool").html("Representing: " + school);
        $("#AccountType").html("Account Type: " + uppercaseRole);
    }




    function getMembersDetails() {
        var url = serverURL() + "/getmembersdetails.php";
        var JSONObject = {
            "username": localStorage.getItem("username")
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getMembersResult(arr);
            }, error: function () {
                alert("Error");
            }
        });
    }
    function _getMembersResult(arr) {
        groupname = arr[0].groupname;
        membername1 = arr[0].membername1;
        membername2 = arr[0].membername2;
        membername3 = arr[0].membername3;
        membername4 = arr[0].membername4;
        membername5 = arr[0].membername5;
        membername6 = arr[0].membername6;
        membername7 = arr[0].membername7;
        membername8 = arr[0].membername8;
        $("#GroupName").html("Group Name: " + groupname);
        $("#LeaderName").html("Leader's Name: " + membername1);
        $("#Member2Name").html("A. Leader's Name: " + membername2);
        $("#Member3Name").html("Member 3's Name: " + membername3);
        $("#Member4Name").html("Member 4's Name: " + membername4);
        $("#Member5Name").html("Member 5's Name: " + membername5);
        $("#Member6Name").html("Member 6's Name: " + membername6);
        $("#Member7Name").html("Member 7's Name: " + membername7);
        $("#Member8Name").html("Member 8's Name: " + membername8);
    }

   



    //change password
    function resetPassword() {
        var currentpassword = $("#currentpassword").val();
        var newpassword = $("#newpassword").val();

        var url = serverURL() + "/updatepassword.php";

        var JSONObject = {
            "username": localStorage.getItem("username"),
            "currentpassword": currentpassword,
            "newpassword": newpassword
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _resetPasswordResult(arr);
            }, error: function () {
                validationMsg();
            }
        });
    }

    function _resetPasswordResult(arr) {
        if (arr[0].result === 1) {
            alert("Password has been changed succcessfully");
            localStorage.setItem($("#newpassword").val(), username);
            $("#currentpassword").val("");
            $("#newpassword").val("");
            $("#newpassword1").val("");  

        } else {
            alert("WRONG")
        }
    }


})(); 