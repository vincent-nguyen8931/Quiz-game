# Quiz-game

![image](Quiz-game-landing-page.png)

Description
------------

This is a quiz game. It will ask if you would like to start the game. After starting the game, the questions will appear in the large font and you must choose the correct answer from the buttons shown. Your score is the time you have remaining.

 Table of contents
---------------
[Tools used](#Tools-used)<br />
[Deployed here](#Deployed-here)<br />
[What is added](#What-is-added)
* [Start Game](#Start-game)
* [Display timer](#Display-timer)
* [Display question](#Display-question)
* [Generate responses](#Generate-responses)
* [Check response](#Check-response)
* [End game](#End-game)

[Credits](#Credits)<br />
[License](#License)

Tools used
-------------------

* CSS - Style the page with custom colors, and spacing.
* GitBash - Assist with version control via commits, push, and pull to and from GitHub.
* GitHub - Site where the repository lies for deployment and edits.
* HTML - Contains the entirety of the webpage and allows browsers to interpret the code as a webpage.
* JavaScript - Houses the majority of the function action for this webpage. 
* VS Code - Application used to write and edit code for the webpage.

Deployed here
-------------

Below is the link to the deployed webpage. <br />
[Link to site](https://vincent-nguyen8931.github.io/Quiz-game/)


What is added
------------------

Start game
-----------------------

This function will run the bulk of the program by calling other functions created. 
```
function startGame() {
  if (questionNumber < questionResponse.length) {
    displayTimer()
    displayQuestion()
    createResponses()
    checkResponse()
    // questionNumber++
  } else {
    endGame()
  }
}
```

Display timer
---------------
The time is displayed on the top right of the question box. A feature to be implemented is decrementing time for incorrect guesses.
```
function displayTimer(timeLeft) {
  var timeLeft = setInterval(function() { 
    remainingTime.textContent = ("Time Remaining: " + timer--)
     if (timer < 0) {
       clearInterval(timeLeft)
     }}, 1000)
```

Display question
-----------
The questions will be displayed by showing the buttons that allow for answering, hiding the start button, hiding the landing page text, and generating the question in the h1 tag.
```
function displayQuestion() {
  responses.style.display = "block" 
  startBtn.style.display = "none"
  intro.textContent = ""
  h1Body.textContent = questionResponse[questionNumber].q
}
```

Generate responses
----------------
The possible choices for the answer generated in the array will be inserted into each button that is created for answers from the HTML.
```
function createResponses() {
  btn1.textContent = questionResponse[questionNumber].response.a
  btn2.textContent = questionResponse[questionNumber].response.b
  btn3.textContent = questionResponse[questionNumber].response.c
  btn4.textContent = questionResponse[questionNumber].response.d
}
```

Check response
----------
This function checks the user's response against the correct answers set in the questions array. It will also check to make sure that there is a question that exists to prevent the program from asking more questions than exist.
```
function checkResponse() {
  if (questionNumber < questionResponse.length -1) {
  responses.addEventListener("click", function(event) {
    event.preventDefault()
    var element = event.target
    if (element.matches("#button1") === true && questionResponse[questionNumber].correctResponse === "a") {
      result.textContent = "Correct"
      startGame()
      setTimeout(function() {
        result.textContent = ""
      }, 1000)
    }
```

End game
--------------------
This ends the game by displaying the high scores, removing all the responses, and stopping the timer.
```
function endGame() {
  h1Body.textContent = "High score!"
  responses.style.display = "none"
  clearInterval(timeLeft)
}
```

Lessons Learned
----------------

I ran into a strange situation where the incrementing variable is called 1 + (n+1) times for reasons unknown to me. Things I have tried were:
* reconstruct the questions array to house an individual true or false response for the possible answers.
* change where the check for question length happens to before an answer check is run
* have the answers increment instead of the start game function
* remove the click event listener since it appeared as though multiple clicks were being counted despite only a single click being used when I checked in the console logs

The solution still eludes me from these steps.


Credits
---------------
LinkedIn: [https://www.linkedin.com/in/vincent-nguyen-74226a107/](https://www.linkedin.com/in/vincent-nguyen-74226a107/) <br />
GitHub: [https://github.com/vincent-nguyen8931](https://github.com/vincent-nguyen8931)


License
----------
MIT License

Copyright (c) [2020] [Vincent Nguyen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.