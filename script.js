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
var response = 1
var questionResponse = [
  {q: "question 1", response: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4", }, correctResponse: "b"},
  {q: "question 2", response: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4", }, correctResponse: "c"},
  {q: "question 3", response: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4", }, correctResponse: "a"},
  {q: "question 4", response: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4", }, correctResponse: "d"},
  {q: "question 5", response: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4", }, correctResponse: "b"}
]

responses.style.display = "none" 
startBtn.addEventListener("click", startGame)


function startGame() {
  if (questionNumber < questionResponse.length) {
    displayTimer()
    displayQuestion()
    createResponses()
    checkResponse()
    questionNumber++
  } else {
    endGame()
  }
}

function displayQuestion() {
  responses.style.display = "block" 
  startBtn.style.display = "none"
  intro.textContent = ""
  h1Body.textContent = questionResponse[questionNumber].q
}

function displayTimer() {
  setInterval(function() { 
    remainingTime.textContent = ("Time Remaining: " + timer--)
     }, 1000)
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
  console.log(questionResponse[questionNumber].response.a)
  btn1.textContent = questionResponse[questionNumber].response.a
  btn2.textContent = questionResponse[questionNumber].response.b
  btn3.textContent = questionResponse[questionNumber].response.c
  btn4.textContent = questionResponse[questionNumber].response.d
}

function checkResponse(response) {
  responses.addEventListener("click", function(event) {
    event.preventDefault()
    var element = event.target
    if (element.matches("#button1") === false && questionResponse[questionNumber].correctResponse === "a") {
      result.textContent = "Correct"
      setTimeout(function() {
        result.textContent = ""
      }, 1000)
     return 
    }

    else if (element.matches("#button2") === true && questionResponse[questionNumber].correctResponse === "b") {
      result.textContent = "Correct"
      setTimeout(function() {
        result.textContent = ""
      }, 1000)
      return 
    }

    else if (element.matches("#button3") === true && questionResponse[questionNumber].correctResponse === "c") {
      result.textContent = "Correct"
      setTimeout(function() {
        result.textContent = ""
      }, 1000)
      return 
    }

    else if (element.matches("#button4") === true && questionResponse[questionNumber].correctResponse === "d") {
      result.textContent = "Correct"
      setTimeout(function() {
        result.textContent = ""
      }, 1000)
      return 
    } 
  })
} 

// result.textContent = "Incorrect"
// setTimeout(function() {
//   result.textContent = ""
// }, 1000)

function endGame() {
  h1Body.textContent = "High score!"
  responses.style.display = "none"
}