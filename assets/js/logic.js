//create the hook for buttons 

var start = document.querySelector("#start");
var questionEl = document.getElementById("questions");
var answerbuttonsEl = document.getElementById("answer-buttons");
var questionEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var questionChoicesEl = document.getElementById("choices");
var startScreenEl = document.getElementById("start-screen");
var answerEl = document.getElementById("anwser");
var questionIndex = 0;




// highScoresEl.setAttribute("color:purple");



//Event   Listerners
start.addEventListener("click", function(){
    console.log("You clicked on start!");
    startScreenEl.setAttribute("class", "hide");
    startTimer();
    displayQuestion();
});

function startTimer(){

}

function displayQuestion(){//Displays questions
    questionEl.setAttribute("class", "");
    
    var question = questions[questionIndex];
    console.log(question);
    questionChoicesEl.textContent = question.question;
}
 
 



// submitbuttonEl.addEventListener("submit", function(){

// });
