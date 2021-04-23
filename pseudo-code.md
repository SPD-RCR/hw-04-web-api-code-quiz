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
- Store quiz scores to display all quiz scores on a High Scores list page

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
- Each list item is clickable to submit as the answer and store the value of
  - a {background-color: purple, color: white}
  - a: hover {bg-color: lighter purple} -- Verify has good contrast with White text

```
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock

```

- When user clicks an answer = submit
  - Compare to correct answer
  - Display a divider line followed by "Correct" or "Wrong" located below the answer list. Display for X seconds.
  - After second "Wrong" begin to subtract 15 from the score/timer for it. Do the same for each new wrong answer
  - Then automatically display next question

```
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

- When last answer is submitted (questions.length < 0) or score/timer <= 0
- Display All Done message
- Display my score (remaining time)
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

  - NOTE: High Scores screen - Does NOT display "View High Scores" button or Timer along top corners of screen

Thoughts:

- Need a list of questions (5) with multiple choice answers (4) each.
  - Create an array of questions,
  - with related arrays of corresponding answers
  - display a question with related answers until all of the of questions (5) have been displayed or Time <= 0
- Timer counts down allowed time while a quiz is in progress
- Local Storage: Store all players and their scores from quizes

  - Possible: Randomize the order of the 5 Questions. More questions could be available to mix into the random order while still only displying 5 total questions for the quiz.
  - Possilbe: Randomize the order of the 4 Answers. More answers could be available for each question to mix into the random answer order while still only displying 4 total answers for each question.
