var h1Body = document.querySelector("h1")
var pTag = document.querySelector("p")
var startBtn = document.querySelector("#start-game")
var responses = document.querySelector("#Responses")
var btn1 = document.querySelectorAll("#button1")
var btn2 = document.querySelectorAll("#button2")
var btn3 = document.querySelectorAll("#button3")
var btn4 = document.querySelectorAll("#button4")
var timer = 0
var questionNumber = 0
var questionResponse = [
  {q: "question 1", a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 2", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 3", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 4", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 5", b: "answer 2", c: "answer 3", d: "answer 4"}
]
  
startBtn.addEventListener("click", startGame)


function startGame() {

  if (questionNumber > questionResponse.length -1) {
    endGame()
  } else {
    displayQuestion()
  }
}


function displayQuestion() {
  startBtn.style.display = "none"
  pTag.textContent = ""
  h1Body.textContent = questionResponse[questionNumber].q
  createResponses()

  // checkResponse(response)
}

function createResponses() {

  var li = document.createElement("button")
  li.textContent = questionResponse[questionNumber].a
  responses.appendChild(li)
  var li = document.createElement("button")
  li.textContent = questionResponse[questionNumber].b
  responses.appendChild(li)
  var li = document.createElement("button")
  li.textContent = questionResponse[questionNumber].c
  responses.appendChild(li)
  var li = document.createElement("button")
  li.textContent = questionResponse[questionNumber].d
  responses.appendChild(li)
}

function endGame() {
  h1Body.textContent("High score!")
}