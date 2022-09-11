//ScoreBox

document.getElementById("Scorebox") = "none";
var score = 0;
var QNums = "";
function Classic(){
    var popup = docment.getElementById("redirect");
    redirect.classList.toggle("show");
}

//Classic
function completeClassic(){
    if(document.getElementById("clasYes").click){
        window.location("oldsafetytest.html");
    }else if(document.getElementById("clasNo").click)
        redirect.classList.toggle("hide");
}