//create the hook for buttons 

var start = document.querySelector("#start");
var questionDivEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var answerbuttonsEl = document.getElementById("answer-buttons");

//var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var startScreenEl = document.getElementById("start-screen");
var answerEl = document.getElementById("anwser");
var questionsIndex = 0;
var currentQuestion = questions[questionsIndex];
//timer 
var timeEl = document.getElementById("time");
//var WinCounter = 0;
//var loseCounter = 0;
//var timevalue = 15;
//var score = 0; 
//var timercounter;

// highScoresEl.setAttribute("color:purple");



//Event   Listerners
start.addEventListener("click", function(event){
    console.log("You clicked on start!");
    event.preventDefault();
    startScreenEl.setAttribute("class", "hide");
    displayQuestion();
    startTimer();
});


var startTimer = localStorage.getItem("time")

function startTimer(){
 // timer = setInterval(function){
  //  timeCount --;
  //  timeEl.textContent = timeCount;
  //  if(timeCount >= 0){
   // if(is)
   // }
 // }

}

function displayQuestion( ){//Displays questions
   questionDivEl.setAttribute("class", "show");
    
    // ChoicesEl.textConent = quesction.choices;
   
   questionTitleEl.textContent = currentQuestion.question;

   for(var i = 0; i < currentQuestion.choices.length; i++){
    var newButtonEl = document.createElement('button');
    newButtonEl.textContent = currentQuestion["choices"][i];
    choicesEl.append(newButtonEl);
   }
   
}

choicesEl.addEventListener("click", function(event){
  console.log(event.target);
  var userAnswer = event.target.textContent;
  if(userAnswer == currentQuestion.answer){
    alert("You got it right!");
  } else {
    alert("You got it wrong!");
  }
})


 //submitbuttonEl.addEventListener("submit", function(){

// });
