//Packages
const express = require('express');

//Accessing the library/module for usage
const app = express();
//Google API
const { google } = require('googleapis');

//Server
//const port = 443;
//File System
const fs = require("fs");

//Port hosted on, as well as logging the status of the server, if it is running or not
//app.listen(port, () => console.log('Server started on port ' + port));

try {

    //The folder the server will be hosted on (html, css, js)
    app.use(express.static('public'));


    //Limiting the size of json data (1mb) and parsing JSON data
    app.use(express.json({ limit: '5mb' }));


    let settingsOut;

    //Get settings or any other needed file and export to the client
    app.post("/settings", async(req, res) => {
        try {
            let settings;

            const tempURL = JSON.stringify(req.body);

            const url = tempURL.split(",")[0].split(":")[1].split('"')[1];

            let settingsMain = [];
            //Gets settings from the url
            fs.readFile("public" + url + "/settings.yml", "utf8", async function(err, data) {
                settings = data
                    //Code to set settings



                const tempSettings = settings.toString();
                //Use the latter while statement for testing purposes

                let tempCount = 0;

                //Replace all \r\n statements with \n because \r\n is only supported in local run time
                while (tempSettings.split("\r\n")[tempCount] != null) {
                    //Encountered an error, pls fix tomorrow tyy
                    settingsMain.push(tempSettings.split("\r\n")[tempCount].split(": ")[1]);
                    tempCount++;
                }
                settingsOut = settingsMain;
                res.send(settingsMain);
            });
        } catch (err) {
            console.log(err);
        }
    });

    app.post("/questions", async(req, res) => {
        try {
            let questions;

            const tempURL = JSON.stringify(req.body);

            const url = tempURL.split(",")[0].split(":")[1].split('"')[1];
            fs.readFile("public" + url + "/" + settingsOut[6], "utf8", async function(err, data1) {

                questions = data1;

                const tempQuestions = questions.toString();

                /*
                let tempCount = 0;
                while (tempQuestions.split("\r\n")[tempCount] != null) {
                    questionsMain.push(tempQuestions.split("\r\n")[tempCount].split(": ")[1]);
                    console.log(tempQuestions.split("\r\n")[tempCount].split(": ")[1]);
                    tempCount++;
                }
                */

                res.send(tempQuestions);
            });
        } catch (err) {
            console.log(err);
        }
    })



    //The authentication for the google API
    const authentication = async() => {
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
    app.get("/api", async( /*req,*/ res) => {
        try {
            //Waiting for the authentication to get the credentials
            const { googleAPI } = await authentication();

            //The data that will be added to the google sheet
            const response = await googleAPI.spreadsheets.values.append({
                spreadsheetId: id,
                range: "Sheet1!A1:F1",
            });
            res.send({ success: true });
            //If there is an error, it will be logged in the console
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    });


    //Sending data to the sheet
    app.post("/api", async(req, res) => {
        try {
            //destructure 'newName' and 'newValue' from req.body
            const { Name, Team, Category, Pass, Score, Type } = req.body;
            let Time = (new Date().getUTCMonth() + 1) + "/" + (new Date().getUTCDate() - 1) + "/" + new Date().getUTCFullYear() + " --- Time: " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
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
            if (response.status === 200) {
                res.send({ success: true });
            } else {
                return res.status(500).send("Error writing to sheet");
            }
        } catch (error) {
            console.log(error, "There was an error updating the spreadsheet", error.message);
            res.status(500).send();
        }
    });
} catch (err) {
    console.log(err);
    app.use(express.static('public/error-default'));
}