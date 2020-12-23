var h1Body = document.querySelector("h1")
var intro = document.querySelector("#intro")
var startBtn = document.querySelector("#start-game")
var result = document.querySelector("#result")
var responses = document.querySelector("#Responses")
var remainingTime = document.querySelector("#time")
var btn1 = document.querySelector("#button1")
var btn2 = document.querySelector("#button2")
var btn3 = document.querySelector("#button3")
var btn4 = document.querySelector("#button4")
var timer = 120
var questionNumber = 0
var questionResponse = [
  {q: "What is the temperature of water freezing?", response: {a: "30 F", b: "32 F", c: "33 F", d: "31 F", }, correctResponse: "b"},
  {q: "Which is the max amount of times a piece of paper can be folded?", response: {a: "6", b: "8", c: "7", d: "5", }, correctResponse: "c"},
  {q: "What do blue whales eat?", response: {a: "Krill", b: "Plankton", c: "Coral", d: "Algae", }, correctResponse: "a"},
  {q: "In the US, which car color has the least amount of accidents?", response: {a: "Silver", b: "Blue", c: "Red", d: "White", }, correctResponse: "d"},
  {q: "Which fast food restaurant is the most popular in the US?", response: {a: "Jack in the Box", b: "McDonalds", c: "Burger King", d: "Taco Bell", }, correctResponse: "b"}
]
// hides the buttons created in the html
responses.style.display = "none" 
// waits for the click of the start button before responding
startBtn.addEventListener("click", startGame)

// starts the game and continues it each time there is a call
function startGame() {
  // if (questionNumber < questionResponse.length) {
    displayTimer()
    displayQuestion()
    createResponses()
    checkResponse()
    questionNumber++
  // } else {
  //   endGame()
  }
// }
// makes the questions visible while hiding the landing page information
function displayQuestion() {
  responses.style.display = "block" 
  startBtn.style.display = "none"
  intro.textContent = ""
  h1Body.textContent = questionResponse[questionNumber].q
}
// timer that counts down during the course of the game
function displayTimer(timeLeft) {
  var timeLeft = setInterval(function() { 
    remainingTime.textContent = ("Time Remaining: " + timer--)
     if (timer < 0) {
       clearInterval(timeLeft)
     }}, 1000)
}
// function createButtons() {
//   var li = document.createElement("button")
//   li.setAttribute("id", "button1")
//   console.log(responses.btn1.value)
//   // li.textContent = questionResponse[questionNumber].response.a
//   responses.appendChild(li)
//   var li = document.createElement("button")
//   li.setAttribute("id", "button2")
//   // li.textContent = questionResponse[questionNumber].response.b
//   responses.appendChild(li)
//   var li = document.createElement("button")
//   li.setAttribute("id", "button3")
//   // li.textContent = questionResponse[questionNumber].response.c
//   responses.appendChild(li)
//   var li = document.createElement("button")
//   li.setAttribute("id", "button4")
//   // li.textContent = questionResponse[questionNumber].response.d
//   responses.appendChild(li)
// }


// generate the responses for each question
function createResponses() {
  btn1.textContent = questionResponse[questionNumber].response.a
  btn2.textContent = questionResponse[questionNumber].response.b
  btn3.textContent = questionResponse[questionNumber].response.c
  btn4.textContent = questionResponse[questionNumber].response.d
}
// checks the response of the answer and makes sure that there are questions left to ask.
function checkResponse() {
  if (questionNumber < questionResponse.length - 1) {
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

    else if (element.matches("#button2") === true && questionResponse[questionNumber].correctResponse === "b") {
      result.textContent = "Correct"
      startGame()
      setTimeout(function() {
        result.textContent = ""
      }, 1000)
    }

    else if (element.matches("#button3") === true && questionResponse[questionNumber].correctResponse === "c") {
      result.textContent = "Correct"
      startGame()
      setTimeout(function() {
        result.textContent = ""
      }, 1000) 
    }

    else if (element.matches("#button4") === true && questionResponse[questionNumber].correctResponse === "d") {
      result.textContent = "Correct"
      startGame()
      setTimeout(function() {
        result.textContent = ""
      }, 1000) 
    } else {

      result.textContent = "Incorrect"
      startGame()
      setTimeout(function() {
        result.textContent = ""
      }, 1000)
    } 
    // responses.removeEventListener("click", function(event)) {}
    // startGame()
  })
}
else {
  endGame()
}
  }

// result.textContent = "Incorrect"
// setTimeout(function() {
//   result.textContent = ""
// }, 1000)

function endGame() {
  h1Body.textContent = "High score!"
  responses.style.display = "none"
  clearInterval(timeLeft)
}