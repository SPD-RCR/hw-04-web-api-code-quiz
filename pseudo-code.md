See the bullet points for my initial thoughts about the project.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

- Welcome page with instructions
- Start button
- Displayed a timer in the upper right corner of screen, set to the allowed time for quiz (75)
- Include a "View High Scores" button in upper left corner of screen
- Need a list of questions and answers (5?)
  - Determine if questions should always be the same and/or in the same order?
  - If Not: create an array of questions with and related arrays of corresponding answers to randomly pick from until all of the set number of questions (5?) has been displayed or All Done/game over
  - Answers: Multiple choice (4)
- Timer counts down allowed time while a quiz is in progress
- Local Storage: Store all players and their scores from quizes

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
```

- Start button event
- Timer begins countdown from 75 (75 seconds)
- Replace instructions with first Question
- Answers: Multiple choice Ordered List listed below
- Each list item is clickable to submit as the answer
  - a {background-color: purple, color: white}
  - a: hover {bg-color: lighter purple} -- Verify has good contrast with White text

```
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock

```

- When user clicks an answer = submit/advance through questoins array
- Incorrect answers also subtract time from countdown timer/decrease number by set amount instantly
  - Display a divider line followed by "Correct" or "Wrong" located below the answer list. Display for X seconds.
  - After second "Wrong" begin to subtract 15 from the score/timer for it. Do the same for each new wrong answer
  - Then automatically display next question
  - NOTE: If score = a negative number, display 0 instead of negative numbers and advance to (Game Over) All Done screen

```
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

- When last answer is submitted or score/timer = 0, Display Game Over message
- Display my score/how much time was still remaining
- Display input field for user to "Enter Initials:" and "Submit" button -- on the same line
- On Submit: Store user Intials and their score/time remaining in Local Storage
- Advance to "High Scores" screen

"View High Scores" button, in upper left corner

- Takes user to "High Scores" screen to see list of current High Scores, if any in Local Storage
- If Local Storage data is empty = display message "Please take a quiz to set the High Score!"

"High Scores" screen

- If Local Storage has data the following will be seen
- Display list of user Initials with corresponding score/time remaining
- Display list in descending order sorted by highest score/most time remaining
- Display 2 buttons on the same line "Go Back" and "Clear High Scores"
- "Go Back" button return user to Welcome screen to start another quiz -- Does Not clear high score from Local Storage
- "Clear High Score" button clears the scores on screen and from Local Storage and display message "Please take a quiz to set the High Score!"

  - NOTE: High Scores screen - Does NOT display "View High Scores" button or Timer
