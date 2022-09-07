document.getElementById("Scorebox").style.display = "none";
var score = 0;
var QNums = "";
function Classic(){
    var popup = docment.getElementById("redirect");
    redirect.classList.toggle("show");
}
function completeClassic(){
    if(document.getElementById("clasYes").click){
        window.location("oldsafetytest.html");
    }else if(document.getElementById("clasNo").click)
        redirect.classList.toggle("hide");
}


//All possible Questions

var PossibleQuestions = new Array(18);
var PossibleQuestionsCount = 16;

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

var answer1 = [];
var answer2 = [];
var answer3 = [];
var answer4 = [];
var answer5 = [];
var answer6 = ["A fire extingisher", "A bag of chips", "Electricity", ""];
var answer7 = ["Material Safety Data Sheet", "Modem Software Delivery System", "Mechanical System Distribution Safety", "Mostly Simpleminded Derpy Students", "Modified Security Derivitive System", "Mechanized Software Distribution Safety"];
var answer8 = [];
var answer9 = [];
var answer10 = [];
var answer11 = ["When you are scared", "When it requires electricity", "When it is sharp", "When others aren't using it", "When it is broken", ];
var answer12 = [];
var answer13 = [];
var answer14 = [];
var answer15 = [];
var answer16 = [];
var answer17 = [];
var answer18 = [];
var answer19 = [];

var CorrectAnswers = ["Material Safety Data Sheet", "A fire extingisher", "When it is broken"];

var score = 0;

//Random Questions Function
function QuestionRan() {

    var randomNum = Math.floor((Math.random() * 18) + 1);
    if (randomNum == Number.isInteger){
        PossibleQuestions.length + randomNum;
        //Shifts an the end of an array to the front
        for (var i = 0; i <= randomNum; i++) {

            var EndQuestion = PossibleQuestions.pop();
            PossibleQuestions.unshift(EndQuestion);
        }
        //Reruns the script
    } else if (randomNum == "") {
        QuestionRan();
    }
}

//Calculating the total score
function QuestionCor() {
    if (PossibleQuestions.answer = CorrectAnswers.indexOf()) {
        score = score + 0.25;
    }
}


//Creating each new "div" dynamically according to how many questions there are
var ArrayCount = 0;
var QuestionCount = 1;
for (i = 0; i < PossibleQuestionsCount; i++) {
var AddQuestions = document.getElementById("QuestionBoxes");

var AddQuestionsDiv = document.createElement("div");
AddQuestionsDiv.className = "form-group col-lg-4 col-md-3 col-sm-4 col-xs-1 q_div";
AddQuestionsDiv.id = "QuestionBoxes";

var QuestionDiv = document.getElementById("QuestionBoxes");
var H1Num = document.createElement("h1");
H1Num.innerHTML = QuestionCount + ". " + PossibleQuestions.ArrayCount;
var br1 = document.createElement("br");

var Checkboxes = document.createElement("")



ArrayCount = ArrayCount + 1;
QuestionCount = QuestionCount + 1;
}
//            <div id="QuestionBox" class="form-group" class="col-lg-4 col-md-3 col-sm-4 col-xs-1 login_div">
                
//<h1>1.</h1>
//</div>