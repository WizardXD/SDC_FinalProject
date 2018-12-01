(function () {
	
    // For displaying the user details
    var role;
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
					alert("hi");
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
