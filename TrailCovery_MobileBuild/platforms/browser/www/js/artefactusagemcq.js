(function () {

    $(document).ready(function () {
		test();
    });

    //function to retrieve the details of the artefact, such as artefact id (based on the accesscode)
    function test() {
        var url = serverURL() + "/artefactUsageMCQ.php";

        var artefactid = decodeURIComponent(getUrlVars()["artefactid"]);

        var JSONObject = {
            "artefactid": artefactid
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: JSONObject,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                _testtest(arr);
            },
            error: function () {
                alert("Wrong");       //Change to Validation Message
            }
        });
    }

    function _testtest(arr) {
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i].CorrectUsage);
            console.log(arr[i].WrongUsage1);
            console.log(arr[i].WrongUsage2);
            
            var UsageMCQArray = [arr[i].CorrectUsage, arr[i].WrongUsage1, arr[i].WrongUsage2];
            console.log(UsageMCQArray);
        }
        
        testing123();

        function testing123() {
            for (i = 0; i = UsageMCQArray.length; i++) {
        //Node content
        var x = UsageMCQArray.splice(0, 1);

        //This code creates a new <option> element:
        var option_e = document.createElement("option");

        //To add text to the <option> element, you must create a text node first. This code creates a text node:
        var option_node = document.createTextNode(x);

        //Then you must append the text node to the <option> element:
        option_e.appendChild(option_node);

        //Finally you must append the new element to an existing element.

        //This code finds an existing element:
        var existing_element = document.getElementById("UsageMCQ");

        //This code appends the new element to the existing element:
        existing_element.appendChild(option_e);

    }
        }
    }

})();





