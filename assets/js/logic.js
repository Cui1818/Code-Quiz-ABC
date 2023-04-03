//create the hook for buttons 

var start = document.querySelector("#start");
var questionDivEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var answerbuttonsEl = document.getElementById("answer-buttons");

//var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var startScreenEl = document.getElementById("start-screen");
var answerEl = document.getElementById("anwser");
var endScreenEl = document.getElementById("end-screen")
var questionsIndex = 0;
var currentQuestion = questions[questionsIndex];
//timer 
var timeEl = document.getElementById("time");
var timeCount =60;
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


// var startTimer = localStorage.getItem("time")

function startTimer(){
 timer = setInterval(function(){
    timeCount --;
 timeEl.textContent = timeCount;
 if(timeCount === 0){
   endQuiz()
 }

}, 1000)
}

function endQuiz(){
  clearInterval(timer);
  questionDivEl.setAttribute("class","hide")
  endScreenEl.setAttribute("class","show")
}

function displayQuestion( ){//Displays questions
   questionDivEl.setAttribute("class", "show");
    
   currentQuestion = questions[questionsIndex];
   
   questionTitleEl.textContent = currentQuestion.question;

   choicesEl.innerHTML = ""
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

  questionsIndex++;

  if(questionsIndex < questions.length){
    displayQuestion()
  }else{
    endQuiz()
  }
})


 //submitbuttonEl.addEventListener("submit", function(){

// });
