const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const done = document.getElementById("done");
const score = document.getElementById("score");
//const highScore = document.getElementById("highScore"); // displays the High Scores list screen

// Questions
let questions = [
  {
    question : "The Race Leader wears what color jersey?",
    choiceA : "White",
    choiceB : "Green",
    choiceC : "Red polka dots",
    choiceD : "Yellow",
    correct : "D"
  },
  {
    question : "The Best Sprinter wears what color jersey?",
    choiceA : "White",
    choiceB : "Green",
    choiceC : "Red polka dots",
    choiceD : "Yellow",
    correct : "B"
  },
  {
    question : "The Best Climber wears what color jersey?",
    choiceA : "White",
    choiceB : "Green",
    choiceC : "Red polka dots",
    choiceD : "Yellow",
    correct : "C"
  },
  {
    question : "The Best Young Rider wears what color jersey?",
    choiceA : "White",
    choiceB : "Green",
    choiceC : "Red polka dots",
    choiceD : "Yellow",
    correct : "A"
  },{
    question : "How many weeks long is the race?",
    choiceA : "1 week",
    choiceB : "2 weeks",
    choiceC : "3 weeks",
    choiceD : "4 weeks",
    correct : "C"
  }
  // Hiding this question to subit homework on time. Need to fix a bug that runs all questions despite counter <= 0
  // ,
  // {
  //   question : "How many rest days/no racing days are there?",
  //   choiceA : "1 day",
  //   choiceB : "2 days",
  //   choiceC : "3 days",
  //   choiceD : "4 days",
  //   correct : "B"
  // }
]

// Variables
const lastQuestion = questions.length -1;
let runningQuestion = 0; // current number of questions displayed
var counter = 75;
var deductTime = 15; //15s
var timer;
var interval;

// Render a Question
function renderQuestion(){
  let q = questions[runningQuestion];
  //console.log("q:", q);
  question.innerHTML = "<h2>" + q.question + "</h2>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

//Start Quiz
function startQuiz(){
  start.style.display = "none";
  quiz.style.display = "block";
  renderQuestion();
  timer = countdown();
}

function countdown(){
  interval = setInterval(function(){
    counter--; //countdown from counter value by 1
    if (counter > 0){
      div = document.getElementById('countdown');
      div.innerHTML = "Time: " + counter;
    }
    if (counter <= 0) {
      div = document.getElementById('countdown');
      counter = 0;
      div.innerHTML = "Time: " + counter;
      console.log("Counter:", counter);
      //clearInterval(interval);
      startQuiz();
    }

    //if (counter === 0) {
    //   alert("Sorry, Out of Time");
    //   clearInterval(counter);
    // }
    }, 1000);
}

// Check Answer
function checkAnswer(answer){
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    document.getElementById("answerResponse").innerHTML = "<hr/><p>Correct</p>";
    //answerIsCorrect();
  } else{
    //answer is Wrong and subtract 15 from counter
    document.getElementById("answerResponse").innerHTML = "<hr/><p>Wrong</p>";
    counter = counter - deductTime;
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
    console.log("Counter:", counter);
  } 
  else {
    // end the quiz and show the score
    console.log("Counter:", counter);
    clearInterval(interval);
    allDone();
  }
}


// All Done
function allDone(){
  //start.style.display = "none";
  quiz.style.display = "none";
  done.style.display = "block";
  document.getElementById(score) = "<span id=" + counter +"></span>";
}