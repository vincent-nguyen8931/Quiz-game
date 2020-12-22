var h1Body = document.querySelector("h1")
var pTag = document.querySelector("p")
var startBtn = document.querySelector("#start-game")
var responses = document.querySelector("#Responses")
var timer = 0
var questionNumber = 0
var questionResponse = [
  {q: "question 1", a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"},
  {q: "question 1", a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"}
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
  h1Body.textContent= questionResponse[questionNumber].q
  // h1Body.textContent = "Test"
  var li = document.createElement("li")
  responses.appendChild(li)

  // checkResponse(response)
}

function endGame() {
  h1Body.textContent("High score!")
}