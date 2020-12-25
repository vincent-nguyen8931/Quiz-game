var h1Body = document.querySelector("h1")
var intro = document.querySelector("#intro")
var startBtn = document.querySelector("#start-game")
var result = document.querySelector("#result")
var submitBtn = document.querySelector("#submit")
var highscore = document.querySelector("#highscoreInput")
var responses = document.querySelector("#Responses")
var remainingTime = document.querySelector("#Timer")
var timeLeft = 0
var timer = 120
var questionNumber = 0
var questionResponse = [
  { q: "What is the temperature of water freezing?", response: { a: "30 F", b: "32 F", c: "33 F", d: "31 F"}, correctResponse: "32 F" },
  { q: "Which is the max amount of times a piece of paper can be folded?", response: { a: "6", b: "8", c: "7", d: "5"}, correctResponse: "7" },
  { q: "What do blue whales eat?", response: { a: "Krill", b: "Plankton", c: "Coral", d: "Algae", }, correctResponse: "Krill" },
  { q: "In the US, which car color has the least amount of accidents?", response: { a: "Silver", b: "Blue", c: "Red", d: "White", }, correctResponse: "White" },
  { q: "Which fast food restaurant is the most popular in the US?", response: { a: "Jack in the Box", b: "McDonalds", c: "Burger King", d: "Taco Bell", }, correctResponse: "McDonalds" }
]
// event listern will wait for responses on any of the buttons when answering a question.
responses.addEventListener("click", checkResponse);

// waits for the click of the start button before responding
startBtn.addEventListener("click", startGame);

// hides the highscore input
highscore.setAttribute("class", "d-none")

// hides the submit button upon start
submitBtn.style.display = "none"

// starts the game and sets up the game for the first question.
function startGame() {
  displayQuestion();
  createButtons();
  displayTimer();
}
// makes the questions visible while hiding the landing page information
function displayQuestion() {
  startBtn.style.display = "none";
  intro.textContent = "";
  h1Body.textContent = questionResponse[questionNumber].q;
}
// timer that counts down during the course of the game
function displayTimer() {
  timeLeft = setInterval(function () {
    remainingTime.textContent = ("Timer: " + timer--)
    // prevents timer from dropping below 0
    if (timer < 0) {
      clearInterval(timeLeft)
    }
  }, 1000)
}

// Generates the buttons, empties the text within the buttons for following questions, fills in the buttons with text from the responses in the questionResponse object, and appends the response to the responses list as a button.
function createButtons() {
    // creates variable holding the object response within the questionResponse object
    var resp = questionResponse[questionNumber].response
    // takes value of the response object and places them into the answers variable
    var answers = Object.values(resp);
    // clears text for the next question value to be entered
    responses.innerHTML = ""
    // creates the button, sets the class to button, fills the textcontent with answers variable, and appends the child to the responses list
    answers.forEach(element => {
      var li = document.createElement("button");
      li.setAttribute("class", "button");
      li.textContent = element;
      responses.appendChild(li);
    });
}

// checks the response of the answer and makes sure that there are questions left to ask.
function checkResponse(event) {
  if (questionNumber < questionResponse.length - 1) {
    // event.preventDefault()
    var element = event.target
    console.log(element.textContent, questionResponse[questionNumber].correctResponse)
  
    if (element.matches("button") === true && questionResponse[questionNumber].correctResponse === element.textContent) {
      result.textContent = "Correct"
      setTimeout(function () {
        result.textContent = ""
      }, 1000);
    } else {
      result.textContent = "Incorrect"
      setTimeout(function () {
        result.textContent = ""
      }, 1000)
    }
    questionNumber++;
    displayQuestion();
    createButtons();
  } else {
    endGame()
  }
}
// ends the game and displays the high score board
  function endGame() {
    h1Body.textContent = "Quiz complete!"
    highscore.setAttribute("class", "d-block")
    responses.setAttribute("class", "d-none")
    submitBtn.style.display = "block"
    clearInterval(timeLeft)
  }