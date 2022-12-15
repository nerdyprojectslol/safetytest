//Opens dropdown menu
function Dropdown() {
    document.getElementById("Dropcont").classList.toggle("show");
}

//Closes dropdown menu if user clicks outside of it
window.onclick = function(event) {
    //Checks if user clicked on dropdown button
    if (!event.target.matches('.dropbtn')) {
        //Shows or hides dropdown menu
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//Save Username in main index.html
function saveUser() {

    let usernameinput = document.getElementById("Username").value;

    //Returns error if box is empty
    if (usernameinput == "") {
        document.getElementById("MainHeadingBox").innerHTML = "Please enter a valid username";
        setTimeout(function() {
            document.getElementById("MainHeadingBox").innerHTML = "Enter First and Last Names in Input Box";
        }, 3000);
        //Checks if the username contains a space
    } else if (usernameinput.includes(" ") == false) {
        document.getElementById("MainHeadingBox").innerHTML = "You must input both your first and last names in the box";
        setTimeout(function() {
            document.getElementById("MainHeadingBox").innerHTML = "Enter First and Last Names in Input Box";
        }, 3000);
        //Checks the limit of a username
    } else if (usernameinput.split(" ")[1].length > 20 || usernameinput.split(" ")[2] > 25) {
        document.getElementById("MainHeadingBox").innerHTML = "Your first or last name is too long. Try again.";
        setTimeout(function() {
            document.getElementById("MainHeadingBox").innerHTML = "Enter First and Last Names in Input Box";
        }, 3000);
        //If the username is less than a regular name
    } else if (usernameinput.split(" ")[1].length < 2 || usernameinput.split(" ")[2] < 2) {
        document.getElementById("MainHeadingBox").innerHTML = "Your first or last name is too short. Try again.";
        setTimeout(function() {
            document.getElementById("MainHeadingBox").innerHTML = "Enter First and Last Names in Input Box";
        }, 3000);
    } else if (usernameinput.split(" ")[3] != undefined) {
        document.getElementById("MainHeadingBox").innerHTML = "You can only have a first and last name. Try again.";
        setTimeout(function() {
            document.getElementById("MainHeadingBox").innerHTML = "Enter First and Last Names in Input Box";
        }, 3000);
        //If the username is valid
    } else {
        //Saves user in local storage for test firebase
        username = document.getElementById("Username").value;
        localStorage.setItem("username", username);

        window.location = "test.html";
    }
}

//Fetching data from server function
async function getContents() {
    //URL
    let urlData = [
        { url }
    ];

    //Sends a post request
    let urlSend = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(urlData)
    };

    //Fetches the data from the server
    await fetch('/settings', urlSend)
        .then(response => response.text())
        .then(data => {
            possibleSettings = JSON.parse(data);

            GeneralSettings();
        });
}

//Checks if testPath exists, else defaults to safety test
if (localStorage.getItem("testPath")) {
    url = localStorage.getItem("testPath");
    getContents();
} else {
    url = "/Tests/Safety-Test";
    getContents();
}


//SETTINGS FUNCTIONS
async function GeneralSettings() {

    /* Structure:
    function a(){
        //Put in code here
    }
    if (possibleSettings[##] == "true") {
        a();
    } else if (possibleSettings[##] == "false") {
        //Do nothing
    }
    */

    //Waits for the settings to load

    //Checks if user is on home page
    if (window.location.pathname == "/") {
        //Do nothing
    } else {
        //Accessibility function
        function Accessable() {
            window.location = "/";
        }

        //Checks accessable setting in settings.yml
        if (possibleSettings[7] == "false") {
            Accessable();
        }


    }

    //Place any universal page functions here
    function TypeofTest() {
        //Type of test at the top
        if (document.getElementById("TitleBar")) {
            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
                document.getElementById("TitleBar").innerHTML = "OA Robotics " + possibleSettings[10] + " Test";
            } else {
                document.getElementById("TitleBar").innerHTML = "OA Robotics: " + possibleSettings[10] + " Test";
            }
            document.getElementById("TopName").innerHTML = "Robotics " + possibleSettings[10] + " Test";
            document.getElementById("myRange").max = possibleSettings[2] - 1;

            //Use this variable to determine if the browser is compatible with the test
            let browserName = (function(agent) {
                switch (true) {
                    case agent.indexOf("edge") > -1:
                        return "MS Edge";
                    case agent.indexOf("edg/") > -1:
                        return "Chromium (Edge)";
                    case agent.indexOf("opr") > -1 && !!window.opr:
                        alert("Opera may not function properly with this test. Please use a different browser for a better experience.");
                        return "Opera";
                    case agent.indexOf("chrome") > -1 && !!window.chrome:
                        return "Chrome";
                    case agent.indexOf("trident") > -1:
                        alert("Internet Explorer may not function properly with this test. Please use a different browser for a better experience.");
                        return "Internet Explorer";
                    case agent.indexOf("firefox") > -1:
                        return "Mozilla Firefox";
                    case agent.indexOf("safari") > -1:
                        return "Safari";
                    default:
                        return "other";
                }
            })
            return browserName;
        }


        //Type of test on the front page
        if (document.getElementById("QuestionAmountH3")) {
            document.getElementById("Title").innerHTML = "OA Robotics " + possibleSettings[10] + " Test";
            document.getElementById("FrontHeader").innerHTML = "OA Robotics " + possibleSettings[10] + " Test"
            document.getElementById("QuestionAmountH3").innerHTML = "Chosen Test: " + possibleSettings[10];
            if (possibleSettings[7] == "false") {
                document.getElementById("Warning").innerHTML = "Warning: This test is inaccessable. Please contact your admin for more information.";
                while (document.getElementById("Start_Button")) {
                    document.getElementById("Start_Button").remove();
                }
                while (document.getElementById("Username")) {
                    document.getElementById("Username").remove();
                }
                while (document.getElementById("MainHeadingBox")) {
                    document.getElementById("MainHeadingBox").remove();
                }

            }
        }
    }
    //Checks type of test setting in settings.yml
    TypeofTest();
}

//Create a dropdown menu for the user to choose a test
async function createDropdown() {
    await fetch('/url');

    //Get the existing dropdown placeholder from the menu
    const maindropdowndiv = document.getElementById("dynamicdrop1");

    dropdowndiv.appendChild(br);

    //Create a dynamic dropdown menu
    let dropdowndiv = document.createElement("div");
    dropdowndiv.id = "Dropdown1";
    dropdowndiv.class = "dropdown";
    maindropdowndiv.appendChild(dropdowndiv);


    //Create a button for the dropdown menu
    let dropbutton = document.createElement("button");
    dropbutton.id = "BtnDropdown1";
    dropbutton.class = "dropbtn";
    dropbutton.innerHTML = "Looking for a different test?";
    dropbutton.onclick = Dropdown;
    dropdowndiv.appendChild(dropbutton);

    //Creates a div for the dropdown menu
    let dropcontent = document.createElement("div");
    dropcontent.id = "Dropcont";
    dropcontent.class = "dropdown-content";
    dropdowndiv.appendChild(dropcontent);

}

//Create a dropdown menu for the user to choose a test
async function createDropdown() {
    await fetch('/url');

    //Get the existing dropdown placeholder from the menu
    const maindropdowndiv = document.getElementById("dynamicdrop1");

    dropdowndiv.appendChild(br);

    //Create a dynamic dropdown menu
    let dropdowndiv = document.createElement("div");
    dropdowndiv.id = "Dropdown1";
    dropdowndiv.class = "dropdown";
    maindropdowndiv.appendChild(dropdowndiv);


    //Create a button for the dropdown menu
    let dropbutton = document.createElement("button");
    dropbutton.id = "BtnDropdown1";
    dropbutton.class = "dropbtn";
    dropbutton.innerHTML = "Looking for a different test?";
    dropbutton.onclick = Dropdown;
    dropdowndiv.appendChild(dropbutton);

    //Creates a div for the dropdown menu
    let dropcontent = document.createElement("div");
    dropcontent.id = "Dropcont";
    dropcontent.class = "dropdown-content";
    dropdowndiv.appendChild(dropcontent);

}