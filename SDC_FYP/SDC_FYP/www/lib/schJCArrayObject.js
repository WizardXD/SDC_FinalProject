var school = [
"NATIONAL JUNIOR COLLEGE",
"TEMASEK JUNIOR COLLEGE",
"JURONG JUNIOR COLLEGE",
"ANDERSON JUNIOR COLLEGE",
"VICTORIA JUNIOR COLLEGE",
"YISHUN JUNIOR COLLEGE",
"TAMPINES JUNIOR COLLEGE",
"SERANGOON JUNIOR COLLEGE",
"PIONEER JUNIOR COLLEGE",
"MERIDIAN JUNIOR COLLEGE",
"INNOVA JUNIOR COLLEGE",
"EUNOIA JUNIOR COLLEGE",
"CATHOLIC JUNIOR COLLEGE",
"ANGLO-CHINESE JUNIOR COLLEGE",
"ST. ANDREW'S JUNIOR COLLEGE",
"NANYANG JUNIOR COLLEGE",
];

school.sort()

function addschool2option() {

//The loop will loop through the array from 0 - max length and + 1 with a line break into the option

    for (i=0; i=school.length; i++) {
        //Node content
        var x = school.splice(0,1);
        
  
        //This code creates a new <option> element:
        var option_e = document.createElement("option");
        
        //To add text to the <option> element, you must create a text node first. This code creates a text node:
        var option_node = document.createTextNode(x);
        
        //Then you must append the text node to the <option> element:
        option_e.appendChild(option_node);
        
        //Finally you must append the new element to an existing element.
        
        //This code finds an existing element:
        var existing_element = document.getElementById("juniorcollege");
        
        //This code appends the new element to the existing element:
        existing_element.appendChild(option_e);   
             
    }
    
} 


addschool2option();
