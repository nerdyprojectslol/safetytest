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

// Insert number of questions
var numQues = 10;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array();
