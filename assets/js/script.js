const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const done = document.getElementById("done");
var score = document.getElementById("score");
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

//variables
const lastQuestion = questions.length -1;
let runningQuestion = 0; // current number of questions displayed
var counter = 75; // Starting Time displayed on screen
var deductTime = 15; //15s
var timer;
var interval;

intro.addEventListener("click", startQuiz);

//Start Quiz
function startQuiz(){
  intro.style.display = "none";
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
    else if (counter <= 0) {
      counter = 0; // Set counter to 0. Do Not display negative numbers.
      console.log("countdown else Counter:", counter);
      div = document.getElementById('countdown'); // Update Time on screen to match counter which is now 0.
      div.innerHTML = "Time: " + 0; 
      if (alert('Sorry, Out of Time. Please play again.')){}
      else window.location.reload(); 
      clearInterval(interval);
    }
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
    console.log("Question: " + runningQuestion);
    console.log("Counter:", counter);
  } 
  else { // After the Last Question
    console.log("Question (last): " + runningQuestion);
    console.log("Counter:", counter);
    // end the quiz and show the score
    clearInterval(interval);
    //countdown();

    // No more questions. Check if Time is <= 0 Dsipaly Alert. Then Reload the application at the Welcome with Start Quiz button
    if (counter <= 0) {
      counter = 0;
      console.log("Last image and counter <= 0 : ", counter);
      div = document.getElementById('countdown');
      div.innerHTML = "Time: " + 0;
      if (alert('Sorry, Out of Time. Please play again.')){}
      else window.location.reload();
    } 
    else // No more question but user still had time left. Advance to the All Done screen to enter Initials and save score.
    div = document.getElementById('countdown'); // Update Time on screen to match counter.
    div.innerHTML = "Time: " + counter;
    console.log("Question interval: " + runningQuestion);
    console.log("CheckAnswer called AllDone", counter)
    allDone();
  }
}

// All Done
function allDone(){
  quiz.style.display = "none";
  done.style.display = "block";
  //console.log("AllDone Counter: ", counter);
  score.innerHTML = counter;
  console.log("score: ", score);
}

//write Object to Local Storage

var userScore = counter;
var userInitials = document.querySelector("#initials").value;

submit.addEventListener("click", function(event) {
  event.preventDefault();

  if (userInitials === "") {
    alert("error", "Initials can't be blank");
  } else {
    alert("Success", "Your High Score has been saved.");

    // create user object from submission
  var user = {
    Score: userScore,
    Initials: userInitials.value.trim(),
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  }
});