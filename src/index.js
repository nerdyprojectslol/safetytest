//Packages
const express = require('express');

//Accessing the library/module for usage
const app = express();
//Google API
const { google } = require('googleapis');

//Server
const port = process.env.PORT || 3000;
//File System
const fs = require("fs");

//Port hosted on, as well as logging the status of the server, if it is running or not
app.listen(port, () => console.log('Server started on port ' + port));
console.log("Listening..")

app.use(express.static('public'));

//Limiting the size of json data (1mb) and parsing JSON data
app.use(express.json({ limit: '5mb' }));

let settingsOut;
let folderSplit = "\n";

//Get settings or any other needed file and export to the client
app.post("/settings", async (request, response) => {
    //console.log("Settings requested" + request.body);
    try {
        let settings;

        const tempURL = JSON.stringify(request.body);

        const url = tempURL.split(",")[0].split(":")[1].split('"')[1];

        let settingsMain = [];
        //Gets settings from the url
        fs.readFile("public" + url + "/settings.yml", "utf8", async function (err, data) {
            //console.log("Reading settings");
            try {
                settings = data
                //console.log(settings);
                const tempSettings = settings.toString();
                //console.log(tempSettings);
                //Use the latter while statement for testing purposes

                let tempCount = 0;

                //Replace all \r\n statements with \n because \r\n is only supported in local run time
                while (tempSettings.split(folderSplit)[tempCount] != null) {
                    //Encountered an error, pls fix tomorrow tyy
                    settingsMain.push(tempSettings.split(folderSplit)[tempCount].split(": ")[1]);
                    tempCount++;
                }
                settingsOut = settingsMain;
                //console.log("Settings sent");
                response.send(settingsMain);
            } catch (err) {
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/folderdata", async (request, response) => {
    try {
        let folderData = [];

        //The folder path
        const folderPath = "public/Tests";

        //Getting the folders in the folder
        fs.readdir(folderPath, async (err, files) => {
            //console.log("Reading folder");
            try {
                //For each file in the folder
                files.forEach(file => {
                    //If the file is a folder
                    if (fs.lstatSync(folderPath + "/" + file).isDirectory()) {
                        //Add the folder to the array
                        let filePath = folderPath + "/" + file;
                        fs.readdirSync(folderPath + "/" + file).forEach(file2 => {
                            //console.log(file2);
                            let settings;

                            let setinclude = false;
                            let txtinclude = false;
                            let htmlinclude = false;

                            let typeoftxt = "";

                            if (fs.existsSync(filePath + "/settings.yml")) {
                                //console.log(settings.split(folderSplit)[6].split(": ")[1]);
                                typeoftxt = fs.readFileSync(folderPath + "/" + file + "/" + file2, "utf8").split(folderSplit)[6].split(": ")[1];
                                setinclude = true;
                            }

                            if (fs.existsSync(filePath + "/" + typeoftxt)) {
                                txtinclude = true;
                            }

                            if (fs.existsSync(filePath + "/index.html")) {
                                htmlinclude = true;
                            }

                            if (setinclude == true && txtinclude == true && htmlinclude == true) {
                                //console.log(setinclude, txtinclude, htmlinclude);
                                if (!file.includes("#", 0)) {
                                    folderData.push(file);
                                    if (folderData.includes("Safety-Test")) {
                                        folderData.splice(folderData.indexOf("Safety-Test"), 1);
                                    }
                                } else if (file.includes("#", 0)) {
                                    console.log("Folder " + file + " is a hidden folder and will not be shown");
                                }
                            } else if (setinclude == false || txtinclude == false || htmlinclude == false) {
                                if (typeoftxt == undefined) {
                                    //console.log("Error, returning");
                                } else {
                                    //console.log(setinclude, txtinclude, htmlinclude);
                                    console.log("Folder " + file + " is missing a file and will not be shown. It is missing file(s): " + (setinclude == false ? "settings.yml, " : "") + (txtinclude == false ? "Missing Answers File" + ", " : "") + (htmlinclude == false ? "index.html, " : ""));
                                }
                            }
                        });
                    }
                });

                if (folderData.includes("Safety-Test")) {
                    folderData.splice(folderData.indexOf("Safety-Test"), 1);
                }
                //console.log(folderData);
                //Send the folder data to the client
                response.send(folderData);
            } catch (err) {
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
    }
});

app.post("/questions", async (request, response) => {
    //console.log("Questions requested: " + request.body);
    try {
        let questions;

        const tempURL = JSON.stringify(request.body);

        const url = tempURL.split(",")[0].split(":")[1].split('"')[1];


        let datajson = {};
        datajson.PossibleQuestions = [];

        fs.readFile("public" + url + "/" + settingsOut[6], "utf8", async function (err, data2) {

            questions = data2;
            //console.log(questions)

            const tempQuestions = questions.toString();
            //console.log(tempQuestions);

            //For loop for sending each question to the variable
            for (let i = 0; i < tempQuestions.split("Question ").length - 1; i++) {
                let data1 = {
                    "id": "Q" + (i + 1),
                    "Question": tempQuestions.split("Question ")[i + 1].split(folderSplit)[0].split(": ")[1],
                    "Answers": []
                }
                //console.log(datajson.PossibleQuestions);

                //Send data to the variable
                datajson.PossibleQuestions.push(data1);


                let Answers = tempQuestions.split("Question ")[i + 1].split(": ")[1].split(folderSplit);
                Answers.shift();
                //console.log(Answers);
                let AnswersData = [];


                let removeAmount = 0;
                if (Answers[Answers.length - 1] == "") {
                    Answers.pop();
                    removeAmount++;
                }

                for (let j = 0; j < Answers.length - removeAmount; j++) {
                    let bool = false;
                    if (Answers[j].includes("+")) {
                        bool = true;
                        Answers[j] = Answers[j].split("+")[1];
                    } else if (Answers[j].includes("-")) {
                        bool = false;
                        Answers[j] = Answers[j].split("-")[1];
                    }

                    AnswersData.push({
                        "id": "Q" + (i + 1) + "_a" + (j + 1),
                        "Answer": Answers[j],
                        "IsCorrect": bool
                    });

                    //console.log(data1.Answers + " --data1.answers");
                }
                //console.log(JSON.stringify(AnswersData) + " --AnswersData");
                data1.Answers = AnswersData;
                //console.log(JSON.stringify(data1) + " --data1.answers");
            }

            //for (let i=0; i<Answers.length; i++) {

            //}
            //console.log(JSON.stringify(datajson) + " --datajson");

            //console.log(datajson)
            response.send(JSON.stringify(datajson));
        });

    } catch (err) {
        console.log(err);
    }
})



//The authentication for the google API
const authentication = async () => {
    //The credentials for the google API
    const auth = new google.auth.GoogleAuth({
        keyFile: "src/credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })
    //The client for the google API, waiting for the authentication to get the credentials
    const client = await auth.getClient();
    //The google API
    const googleAPI = google.sheets({
        version: "v4",
        auth: client
    });
    //Returning the google API
    return { googleAPI };
}

//Sheets ID
const id = "1WyTjyGrxWOyzYaWiOUkYICdnMXZvJJAZgS5P5tUd6dk";

//The function that will be called to add the data to the google sheet
app.get("/api", async (request, res1) => {
    try {
        //Waiting for the authentication to get the credentials
        const { googleAPI } = await authentication();

        //The data that will be added to the google sheet
        const response = await googleAPI.spreadsheets.values.append({
            spreadsheetId: id,
            range: "Sheet1!A1:F1",
        });
        res1.send({ status: "ok" });
        //If there is an error, it will be logged in the console
    } catch (error) {
        console.log(error);
        res1.status(500).send(error.message);
    }
});


//Sending data to the sheet
app.post("/api", async (request, response1) => {
    try {
        //destructure 'newName' and 'newValue' from request.body
        const { Name, Team, Category, Pass, Score, Type } = request.body;

        let UnStrTime = new Date();
        let Time = UnStrTime.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
        })

        const { googleAPI } = await authentication();
        //add the new name and value to the sheet
        const response = await googleAPI.spreadsheets.values.append({
            spreadsheetId: id,
            range: "Sheet1!A1:F1",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [Name, Team, Category, Pass, Score, Type, Time]
                ]
            }
        });

        //Checks the current status of the server and sends a success/fail response
        response1.send({ status: response.status });
        /*
        if (response1.status === 200) {
            
        } else {
            return response1.status(500).send("Error writing to sheet");
        }*/

    } catch (error) {
        console.log(error, "There was an error updating the spreadsheet", error.message);
        response1.status(500).send();
    }
});