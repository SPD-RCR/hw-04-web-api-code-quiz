










var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('timer-box');

var message =
  'Blah blah blah';
var words = message.split(' ');

// Timer that counts down from 75
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 0
    if (timeLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time: ' + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      //displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();




// <question>The Race Leader wears what color jersey?</question>
//   <answer>White</answer>
//   <answer>Green</answer>
//   <answer>Red polka dots</answer>
//   <answer>Yellow</answer>
//   <correct>Yellow</correct>
  
// <question>The Best Sprinter wears what color jersey?</question>
//   <answer>White</answer>
//   <answer>Green</answer>
//   <answer>Red polka dots</answer>
//   <answer>Yellow</answer>
//   <correct>Green</correct>

// <question>The Best Climber wears what color jersey?</question>
//   <answer>White</answer>
//   <answer>Green</answer>
//   <answer>Red polka dots</answer>
//   <answer>Yellow</answer>
//   <correct>Red polka dots</correct>

// <question>The Best Young Rider wears what color jersey?</question>
//   <answer>White</answer>
//   <answer>Green</answer>
//   <answer>Red polka dots</answer>
//   <answer>Yellow</answer>
//   <correct>White</correct>

// <question>How many weeks long is the race?</question>
//   <answer>1</answer>
//   <answer>2</answer>
//   <answer>3</answer>
//   <answer>4</answer>
//   <correct>3</correct>

// <question>How many rest/no racing days are there?</question>
//   <answer>1</answer>
//   <answer>2</answer>
//   <answer>3</answer>
//   <answer>4</answer>
//   <correct>2</correct>