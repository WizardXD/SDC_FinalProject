document.addEventListener('init', function (event) {
    var page = event.target;

   

    if (page.id === 'page1') {

        //alert the user when cap locks is on
        var input = document.getElementById("newpassword");
        var text = document.getElementById("text");
        input.addEventListener("keyup", function (event) {

            if (event.getModifierState("CapsLock")) {
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        });



        page.querySelector('#push-button-1').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: '' } });  //title --> set the header for page 2


        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;    //Header for page 2
        page.querySelector('#registerbtn').onclick = function () {
            registerGroup();
        };
    } 
});

function registerGroup() {
    username = $("#newusername").val();
    password = $("#newpassword").val();
    email = $("#emailaddress").val();
    school = $("#school").val();
    contactdetails = $("#contactdetails").val();

    groupname = $("#newgroupname").val();
    member1 = $("#member1").val();
    member2 = $("#member2").val();
    member3 = $("#member3").val();
    member4 = $("#member4").val();
    member5 = $("#member5").val();
    member6 = $("#member6").val();
    member7 = $("#member7").val();
    member8 = $("#member8").val();

    url = serverURL() + "/register.php"; 

    var JSONObject = {
        "username": username,
        "password": password,
        "email": email,
        "school": school,
        "phone": contactdetails,

        "groupname": groupname,
        "leader": member1,
        "member2": member2,
        "member3": member3,
        "member4": member4,
        "member5": member5,
        "member6": member6,
        "member7": member7,
        "member8": member8
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            _getRegisterGroupResult(arr); 
        }, error: function () {
            validationMsg();
        }
    });   
}


function _getRegisterGroupResult(arr) {
    if (arr[0].result === 1) {
        alert("Account has been created successfully");
    } else if (arr[0].result === 0) {
        alert("Error.");
    }
}


