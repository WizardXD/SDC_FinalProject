(function () {
	
    // For displaying the user details
    var role;
    var username;
    // Showing the standard header buttons and icons
    $(document).ready(function () {

	$("#viewRoles").bind("click", function () {
                showUsers();
		});
		
     });

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
                    _showRolesResult(arr);
                },
                error: function () {
                    validationMsg();
                }
            });
        }

        function _showRolesResult(arr) {
            var t;
            if ($.fn.dataTable.isDataTable('#showUsers')) {
                t = $('#showUsers').DataTable();
            }
            else {
                t = $('#showUsers').DataTable({
                    "searching": false,
                    "lengthChange": false
                });
            }
            t.clear();


				for (var i = 0; i < arr.length; i++) {
					t.row.add([
                        arr[i].username,
						arr[i].email,
						arr[i].school,
						arr[i].phone,
						"<a href='#' class='ui-btn' id='btn" + arr[i].username + "'>View</a>"
                    ]).draw(false);
                    


					$("#btn" + arr[i].username).bind("click", { id: arr[i].username },
						function (event) {
							var data = event.data;
							userresult(data.id);
						});

					$("#showUsers").show();
				}
		}

            function userresult(username) {
                window.location = "getaccountbyusername.html?username=" + username;
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("school", school);
                localStorage.setItem("phone", phone);
            }
        
})();

// (function () {

//     $(document).ready(function () {
//         getUserDetails();

//         $("#btnAddUser").bind("click", function () {
//                 addUser();
//         });

//     });

//     //retrieve the details of events
//     function getUserDetails() {
//         var url = serverURL() + "/getusers.php";
//         var JSONObject = {
//         };

//         $.ajax({
//             url: url,
//             type: 'GET',
//             data: JSONObject,
//             dataType: 'json',
//             contentType: "application/json; charset=utf-8",
//             success: function (arr) {
//                 _getUserResult(arr);
//             },
//             error: function () {
//                 validationMsg();
//             }
//         });
//     }

//     function _getUserResult(arr) {
//         for (i = 0; i < arr.length; i++) {
//             var t;
//             t = "<ons-card>" +
//                 "Username: " + arr[i].username + "</br>" +
//                 "Email: " + arr[i].email + "</br>" +
//                 "School: " + arr[i].school + "</br>" +
//                 "Phone: " + arr[i].phone + "</br>" +

//                 "</ons-card>";
//             $("#User").append(t);

//         }
//     }

//     //insert user into database
//     function addUser() {
//         username = $("#username").val();
//         password = $("#password").val();
//         email = $("#email").val();
//         school = $("#school").val();
//         phone = $("#phone").val();
//         role = $("#role").val();

//         url = serverURL() + "/addusers.php"; 
       
//         var JSONObject = {
//             "username": username,
//             "password": password,
//             "email": email,
//             "school": school,
//             "phone": phone,
//             "role": role
//         };

//         $.ajax({
//             url: url,
//             type: 'GET',
//             data: JSONObject,
//             dataType: 'json',
//             contentType: "application/json; charset=utf-8",
//             success: function (arr) {
//                 _getAddUserResult(arr);
//             }, error: function () {
//                 validationMsg();
//             }
//         });
//     }

//     function _getAddUserResult(arr) {
//         if (arr[0].result === 1) {
//             alert("User has been created successfully");
//             window.location = "facilitator.html";
//         } else if (arr[0].result === 0) {
//             alert("Please fill up all fields.");
//         }
//     }
// })(); 
