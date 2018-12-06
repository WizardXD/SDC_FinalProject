// (function () {
	
//     // For displaying the user details
//     var role;
//     var username;
//     // Showing the standard header buttons and icons
//     $(document).ready(function () {

// 	$("#viewRoles").bind("click", function () {
//                 showUsers();
// 		});
		
//      });

//         function showUsers() {

// 			var role = $("#selectroles").val();
			
//             var url = serverURL() + "/getusers.php";
//             var JSONObject = {
// 				"role": role
//             };

//             $.ajax({
//                 url: url,
//                 type: 'GET',
//                 data: JSONObject,
//                 dataType: 'json',
//                 contentType: "application/json; charset=utf-8",
//                 success: function (arr) {
//                     _showRolesResult(arr);
//                 },
//                 error: function () {
//                     validationMsg();
//                 }
//             });
//         }

//         function _showRolesResult(arr) {
//             var t;
//             if ($.fn.dataTable.isDataTable('#showUsers')) {
//                 t = $('#showUsers').DataTable();
//                 responsive: true
//             }
//             else {
//                 t = $('#showUsers').DataTable({
//                     "searching": false,
//                     "lengthChange": false
//                 });
//             }
//             t.clear();


// 				for (var i = 0; i < arr.length; i++) {
// 					t.row.add([
//                         arr[i].username,
// 						arr[i].email,
// 						arr[i].school,
// 						arr[i].phone,
// 						"<a href='#' class='ui-btn' id='btn" + arr[i].username + "'>View</a>"
//                     ]).draw(false);
                    


// 					$("#" + arr[i].username).bind("click", { id: arr[i].username },
// 						function (event) {
// 							var data = event.data;
// 							userresult(data.id);
// 						});

// 					$("#showUsers").show();
// 				}
// 		}

//             function userresult(username) {
//                 window.location = "getaccountbyusername.html?username=" + username; 
//             }
        
// })();

    
      
document.addEventListener('init', function(event) {
	

  $('#addUserform').validate({
  rules: {
      username: {
          minlength: 6
      },
      password: {
          minlength: 8
      },
      email: {
        email: true
    },
    phone: {
        minlength: 8,
        number: true
    }
  }, //End of jQueryRules
  messages: {
      username: {
          required: "Username is required"
      },
      password: {

          required: "Password is required"
      },
      email: {
        required: "Provide a valid email address."
    },
      phone: {
        required: "Enter your phone no."
    }
     }, 
            focusInvalid: false,
            submitHandler: function () {
                return false;
            },

            errorPlacement: function (error, element) {
                error.appendTo(element.parent().after());
               // error.appendTo(element.parent().parent().after());
            }

        }); /* End of Validation*/

    }());

(function () {

    $(document).ready(function () {
        

        $("#viewRoles").bind("click", function () {
            showUsers();
        });
    

        $("#btnAddUser").bind("click", function () {
                addUser();
        });

        $("#addUserDialog").bind("click", function(){
            addUserDialog();
        });

        $("#hideDialog").bind("click", function(){
            hideDialog();
        });

        $("#Updatebtn").bind("click", function() {
            ViewUser();
        });

    });
    

    // Display Users
    function showUsers() {

        			var role = $("#selectroles").val();
                    
                    var url = serverURL() + "/getusers.php";
                    var JSONObject = {
        				"role": role
                    };
        
                    $.ajax({
                        url: url,
                        type: 'GET',
                        data: JSONObject,
                        dataType: 'json',
                        contentType: "application/json; charset=utf-8",
                        success: function (arr) {
                            _getUserResult(arr);
                        },
                        error: function () {
                            validationMsg();
                        }
                    });
                }

    // Retrieve User Results
    function _getUserResult(arr) {
        var t;

        for (i = 0; i < arr.length; i++) {
            
            t = "<ons-card>" +
                "Username: " + arr[i].username + "</br>" +
                "Email: " + arr[i].email + "</br>" +
                "School: " + arr[i].school + "</br>" +
                "Phone: " + arr[i].phone + "</br>" +
                "<a href='#' class='material-icons' id='Updatebtn" + arr[i].username + "'>Edit</a>" 

                "</ons-card>";
                
            $("#User").append(t);
            
            
        }
        $("#Updatebtn" + arr[i].username).bind("click", { id: arr[i].username },
        function (event) {
            var data = event.data;
            ViewUser(data.id);
        });

    }

    // Add User dialog 
    var addUserDialog = function() {
        var dialog = document.getElementById('user-dialog');
      
        if (dialog) {
          dialog.show();
        } else {
          ons.createElement('account_management.html', { append: true })
            .then(function(dialog) {
              dialog.show();
            });
        }
      };

    //insert user into database
    function addUser() {
        username = $("#username").val();
        password = $("#password").val();
        email = $("#email").val();
        school = $("#school").val();
        phone = $("#phone").val();
        role = $("#role").val();

        url = serverURL() + "/adduser.php"; 
       
        var JSONObject = {
            "username": username,
            "password": password,
            "email": email,
            "school": school,
            "phone": phone,
            "role": role
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _getAddUserResult(arr);
            }, error: function () {
                validationMsg();
            }
        });
    }

    function _getAddUserResult(arr) {
        if (arr[0].result === 1) {
            alert("User has been created successfully");
            window.location = "facilitator.html";
        } else if (arr[0].result === 0) {
            alert("Please fill up all fields.");
        }
    }
    
    // close dialog box
    var hideDialog = function() {
        document
          .getElementById('user-dialog')
          .hide();
      };





    function ViewUser(username) {
    window.location = "account_management.html?username=" + username;
    var url = serverURL() + "/getusers.php"; //execute profile

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
                _getProfileResult(arr);
            },
            error: function () {
                validationMsg(); //fail
            }
        });
    }

    function _getProfileResult(arr) {
        //move the values returened by the server to the respective variables
        username = arr[0].username;
        email = arr[0].email;
        school = arr[0].school;
        phone = arr[0].phone;
        role = arr[0].role;

        $("#txtUsername").html("Username: " + username); 
        $("#txtEmail").html("Email: " + email); 
        $("#txtSchool").html("School: " + school); 
        $("#txtPhone").html("Phone: " + phone); 
        $("#txtRole").html("Role: " + role); 

    }

    function changeProfile() {
        var newusername = $("#txtUsername").val(); 
        var newemail = $("#txtEmail").val(); 
        var newschool = $("#txtSchool").val(); 
        var newphone = $("#txtPhone").val(); 
        var newrole = $("#txtRole").val(); 

        var url = serverURL() + "/updateuser.php"; //execute 

        var JSONObject = {
            "username": localStorage.getItem("username"), //provide username from localstorage
            "username": newusername, //provide new description
            "email": newemail, //provide new description
            "school": newschool, //provide new description
            "phone": newphone, //provide new description
            "role": newrole, //provide new description
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _changeProfileResult(arr); //successful call to php execute changedescription
            },
            error: function () {
                validationMsg();
            }
        });
    }

    //tell the user if his description change is successful
    function _changeProfileResult(arr) {
        if (arr[0].result === 1) {
            validationMsgs("Profile changed", "Validation", "OK");
        }
        else {
            validationMsgs("Profile update failed", "Validation", "Try Again");
        }
    
    }

}());