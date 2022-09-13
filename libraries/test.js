

//Array Counts
let PossibleQuestions = new Array(18);
let answer = new Array(PossibleQuestions);

let PossibleQuestionsCount = 16;

PossibleQuestions[0] = "What types of things are MSDSs used for?";
PossibleQuestions[1] = "What is the unabbreviated form of PPE?";
PossibleQuestions[2] = "In what situations do you need proper ventilation?";
PossibleQuestions[3] = "Which of the following possible outcomes of not following safety protocol?";
PossibleQuestions[4] = "In what situations do you need to wear a filter mask?";
PossibleQuestions[5] = "What are the most important attributes for safety?";
PossibleQuestions[6] = "Which of the following should always be available?";
PossibleQuestions[7] = "What is a MSDS?";
PossibleQuestions[8] = "Which of the following things should always be followed?";
PossibleQuestions[9] = "What risks are inherent in lead-acid batteries?";
PossibleQuestions[10] = "What is the job of the Safety Captain?";
PossibleQuestions[11] = "When do you NOT use a potentially dangerous tool?";
PossibleQuestions[12] = "Which of the following are proper PPE for usage of an angle grinder?";
PossibleQuestions[13] = "Which of the following are adequate PPE for normal robot assembly?";
PossibleQuestions[14] = "What items go in the Safety Binder?";
PossibleQuestions[15] = "What shouldn't be done for proper electicity use?";
PossibleQuestions[16] = "Which of the following items should always be available?";
PossibleQuestions[17] = "What items should be noted on a MSDS?";
PossibleQuestions[18] = "What person should you go to for safety guidance?";

//Answers to each question held

answer[0] = "Software", "Paint", "Metal pieces", "Paint", "Electrical components", "Robot structures", "Number of people", "Injuries";
answer[1] = "Personal Protective Equipment", "Purposeful Protective Equipment", "Potentially Protective Equipment", "Personal Protective Essentials", "Potentially Protecive Essentials", "Purposeful Proper Equipment";
answer[2] = "";
answer[3] = "";
answer[4] = "";
answer[5] = "A fire extingisher", "A bag of chips", "Electricity", "";
answer[6] = "Material Safety Data Sheet", "Modem Software Delivery System", "Mechanical System Distribution Safety", "Mostly Simpleminded Derpy Students", "Modified Security Derivitive System", "Mechanized Software Distribution Safety";
answer[7] = "";
answer[8] = "";
answer[9] = "";
answer[10] = "When you are scared", "When it requires electricity", "When it is sharp", "When others aren't using it", "When it is broken";
answer[11] = "";
answer[12] = "";
answer[13] = "";
answer[14] = "";
answer[15] = "";
answer[16] = "";
answer[17] = "";
answer[18] = "";

let score = 0;

//Save Username in index.html
function saveUser() {
            
    //Returns error if box is empty
    if(document.getElementById("user").value == ""){
        document.getElementById("MainHeadingBox").innerHTML = "Please enter a valid username";
        setTimeout(function(){
            document.getElementById("MainHeadingBox").innerHTML = "Enter Name in Input Box";
        }, 3000);
    }else{
    //Saves user in local storage for test firebase
    username = document.getElementById("user").value;
    localStorage.setItem("username", username);
    window.location = "MainSafetyTest/safetytest.html";
    }
}



//Random Questions Function
function QuestionRan(array) {
        let currentIndex = array.length, randomIndex;
      
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

QuestionRan(PossibleQuestions);

//Calculating the total score
function QuestionCor() {

    const AddQuestions = document.getElementById("Questions1");

    //Checks if the answer is correct
    //if (PossibleQuestions.answer = fs.readFileSync("corectans.txt")) {
      //  score = score + 0.25;
    //}

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
let ArrayCount = 0;
let QuestionCount = 1;
let QuestionArrayAt = 0;

let ArrayAnsRan = Math.floor(Math.random() * 4);


//Question Creation Function
function QuestionCreate() {

    const AddQuestions = document.getElementById("Questions1");

    //for loop to create questions answers
    for (let i = 0; i < PossibleQuestionsCount; i++) {
        var divid = "Question_" + QuestionArrayAt;
        
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


        //Creates a new label for each question
        let H1Num = document.createElement("h1");
        H1Num.innerHTML = QuestionCount + ". " + PossibleQuestions[ArrayCount];
        H1Num.style = "color: black; font-size: 20px; font-family: 'Times New Roman', sans-serif; font-weight: 300; text-align: left;";

        if (H1Num.innerHTML == PossibleQuestions) {

        }

        AddQuestionsDiv1.appendChild(H1Num);


        //Creates a new spacing for each question
        const br = document.createElement("br");

        AddQuestionsDiv1.appendChild(br);


        //Updating Variables
        ArrayCount = ArrayCount + 1;
        QuestionCount = QuestionCount + 1;


            //Inputs
            for (let j = 0; j < 4; j++) {

                //Creates a new span for each answer

                let AddSpan = document.createElement("span");
                AddSpan.id = "Answer_" + QuestionArrayAt + "_" + j;

                AddQuestionsDiv1.appendChild(AddSpan);

                AddSpanId = document.getElementById(AddSpan.id);


                //Checkboxes
                let Checkboxes = document.createElement('input');
                Checkboxes.id = "PQ" + QuestionArrayAt + "_" + j;
                Checkboxes.type = "checkbox";
                Checkboxes.style = "float: left;";

                AddSpanId.appendChild(Checkboxes); 

                let h1a = document.createElement("h1");
                h1a.innerHTML = answer[0];
                AddSpanId.appendChild(h1a); 

                
                Checkboxesid = Checkboxes.id;

                //Input Labels

            }
            QuestionArrayAt = QuestionArrayAt + 1;

        }
    }
    