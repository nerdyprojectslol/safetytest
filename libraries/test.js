//Array Counts

let PossibleQuestionsCount = 16;

let PossibleQuestions = new Array(20);
let answer = new Array(PossibleQuestions);
let anschoices = 4;


//Answers to each question held





let score = 0;

//Save Username in index.html
function saveUser() {
    
    var usernameinput = document.getElementById("user").value;

    //Returns error if box is empty
    if(usernameinput == ""){
        document.getElementById("MainHeadingBox").innerHTML = "Please enter a valid username";
        setTimeout(function(){
            document.getElementById("MainHeadingBox").innerHTML = "Enter FULL Name in Input Box";
        }, 3000);

        //Checks if the username contains a space
    }else if(usernameinput.includes(" ") == false) {
        document.getElementById("MainHeadingBox").innerHTML = "Your username MUST contain a space.";
        setTimeout(function(){
            document.getElementById("MainHeadingBox").innerHTML = "Enter FULL Name in Input Box";
        }, 3000);

        //If the username is valid
    }else{
    //Saves user in local storage for test firebase
    username = document.getElementById("user").value;
    localStorage.setItem("username", username);
    window.location = "MainSafetyTest/safetytest.html";
    }
}



//Calculating the total score
function QuestionCor() {

    const AddQuestions = document.getElementById("Questions1");

    //Checks if the answer is correct
    for(let Q = 0; Q < PossibleQuestions.length; Q++){
        for(var A = 0; A < anschoices; A++)
                //var checkansh1 = document.getElementById("QAnswer"+Q+"_"+A);
                var checkanschecked = document.getElementById("AnsInp"+Q+"_"+A);
                var bool = datavar.find(x => x.Question == PossibleQuestions[Q + 1]).Answers[A].IsCorrect;
                if(checkanschecked.checked == bool){
                        score = score + 0.25;
                        console.log(checkanschecked);   
                    } else {
                        console.log("A possible score could not be determined");
                    }

            }


    //Replaces the scoreboard
    if (document.getElementById("scoringdiv")) {
        document.getElementById("scoringdiv").remove();
    }

    //Username
    var user = localStorage.getItem("username");

    //Score Div
    let scorediv = document.createElement("div");
    scorediv.id = "scoringdiv";
    scorediv.style = "font-size: 20px; color: white; text-align: center; margin-top: 20px;";
    AddQuestions.appendChild(scorediv);
    const scoredivid = document.getElementById(scorediv.id);

    //Username in Test
    const name = document.createElement("h1");
    name.style = "font-size: 40px; color: black; text-align: center; position: absolute; top: 2%; left: 20%;"
    name.innerHTML = user + "'s Score is:";
    scoredivid.appendChild(name);

    //Score H1
    const scoreh1 = document.createElement("h1");
    scoreh1.innerHTML = "Score: " + score;
    scoreh1.style = "font-size: 100px; color: black; text-align: center; position: absolute; top: 30%; left: 5%;"
    scoredivid.appendChild(scoreh1);
}



//Clear all inputs
function Clear() {
    document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
}


//Preset Variables

let ArrayAnsRan = Math.floor(Math.random() * 4);
let ArrayCount = 0;
let QuestionArrayAt = 0;
let PossibleQuestions1;
let AnswersData;
let datavar;

//let PossibleQuestions2;

//Question Creation Function
function QuestionCreate() {
            
            
            //Random Questions Function
            function QuestionRan(array) {
                let currentIndex = array.length, randomIndex;;
      
                // While there remain elements to shuffle.
                while (currentIndex != 0) {
      
                    // Pick a remaining element.
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
    
                    // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                    }
                    
                return array;
            }
    
        //Redeclare function to run
        

        //Fetching questions.json file as promise to resolve
        fetch("/libraries/data.json")
        .then(data => data.json())
        .then(data => {
            datavar = data.PossibleQuestions;

            for (var i = 0; i < datavar.length; i++){
                //Document for my thought process in calulating questions and answers
                //https://docs.google.com/document/d/1FgRlnSqRrApEkwcvM0OiQbvQhh-pAN_1nUfUGYhkVcg/edit?usp=sharing
                if(datavar[i].id == ("Q" + (i + 1))) {
                    PossibleQuestions[i] = datavar[i].Question;
<<<<<<< HEAD
=======
                    console.log("Question: "+ PossibleQuestions[i]);
>>>>>>> 73c31a655ee866685e1d2a37db91fb55dd85a8be
                } else {
                    console.log("Question "+i+1+" not found");
                }
            }   
                
            QuestionRan(PossibleQuestions);
            });

        



    const AddQuestions = document.getElementById("Questions1");



    //for loop to create questions answers
    setTimeout(function(){
    for (let i = 0; i < PossibleQuestionsCount; i++) {
        var divid = "Question_" + i+1;
        
        //Creates a new div for each question
        let AddQuestionsDiv = document.createElement("div");
        AddQuestionsDiv.className = "form-group col-lg-4 col-md-3 col-sm-4 col-xs-1 q_div";
        AddQuestionsDiv.id = divid;

        AddQuestions.appendChild(AddQuestionsDiv);
        

        //Get the id from "AddQuestionsDiv1"
        let AddQuestionsDiv1 = document.getElementById(AddQuestionsDiv.id);

        //Br tags for spacing
        var br1 = document.createElement("br");
        var br2 = document.createElement("br");
        AddQuestions.appendChild(br1, br2);

        let H1Num = document.createElement("h1");
        H1Num.innerHTML = i+1 + ". " + PossibleQuestions[i + 1];
        H1Num.style = "color: black; font-size: 20px; font-family: 'Times New Roman', sans-serif; font-weight: 300; text-align: left;";
        AddQuestionsDiv1.appendChild(H1Num);

        

        //Creates a new spacing for each question
        const br = document.createElement("br");

        AddQuestionsDiv1.appendChild(br);


        //Updating Variables
        ArrayCount = ArrayCount + 1;



            //Inputs
            for (let j = 0; j < anschoices; j++) {
 

                //Creates a new span for each answer

                let AddSpan = document.createElement("span");
                AddSpan.id = "Answer_" + QuestionArrayAt + "_" + j;

                AddQuestionsDiv1.appendChild(AddSpan);

                AddSpanId = document.getElementById(AddSpan.id);

                //Creates a new label for each answer
                let AddLabel = document.createElement("label");
                AddLabel.id = "Label_" + QuestionArrayAt + "_" + j;
                AddLabel.className = "form-check-label";
                AddLabel.for = "PQ" + QuestionArrayAt + "_" + j;
                AddLabel.style = "color: black; font-size: auto; font-family: 'Times New Roman', sans-serif; font-weight: 300; text-align: center;";
                AddSpanId.appendChild(AddLabel);

                //Checkboxes
                let Checkboxes = document.createElement('input');
                Checkboxes.id = "AnsInp" + QuestionArrayAt + "_" + j;
                Checkboxes.type = "checkbox";
                Checkboxes.style = "float: left;";
                Checkboxes.value = "yes";

                AddLabel.appendChild(Checkboxes);
                
                let h1a = document.createElement("h1");
                h1a.id = "QAnswer"+ArrayCount+"_"+j;
                h1a.innerHTML = datavar.find(x => x.Question === PossibleQuestions[i + 1]).Answers[j].Answer;
                h1a.style = "color:black; font-size: 30px;"
                AddLabel.appendChild(h1a); 
        


                Checkboxesid = Checkboxes.id;

                //Input Labels

                }
            QuestionArrayAt = QuestionArrayAt + 1;

        }
    }, 1000);
    }