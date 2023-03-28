//create the hook for buttons 

var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
//buttons
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")
//questions/answers element
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
//var questionEl = document.getElementById("question");
//var answerEl = document.getElementById("anwser");

var questionIndex = 0;

questions = [
    {
      question: "What does HTML stand for?",
      responses: [
        "Hamburger Text McDonalds Large",
        "How To Meet Ladies",
        "Hyper Text Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What does CSS stand for?",
      responses: [
        "Counter Strike - Source",
        "Chicken Sandwich Supreme",
        "Cascading Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question:
        "Making a website work on all screen sizes is called ______________",
      responses: [
        "Responsive Design",
        "Unresponsive Design",
        "Backend Development",
        "Neural Networks",
      ],
      answer: "Responsive Design",
    },
    {
      question: "What is an API?",
      responses: [
        "Object.freeze(num);",
        "num.mutable = false;",
        "Application Programming Interface",
      ],
      answer: "Application Programming Interface",
    },
    {
      question:
        "Using the const keyword to declare a variable makes the variable immutable",
      responses: ["True", "False"],
      answer: "False",
    },
    {
      question: "Primitive Types are immutable",
      responses: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which one of the following is not best practice when declaring a variable",
      responses: [
        "let num = 2;",
        "var num = 2;",
        "const NUM = 2;",
        "const num = 2;",
      ],
      answer: "const num = 2;",
    },
  ];
  


highScoresEl.setAttribute("color:purple");



//Event   Listerners
startEl.addEventListner("start quiz",function()){
 console.log()
}
 
 



submitbuttonEl.addEventListener("click" ,function){

setCounterText();
}
