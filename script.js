var h1Body = document.querySelector("h1")
var pTag = document.querySelector("p")
var startBtn = document.querySelector("#start-game")
var responses = document.querySelector("#Responses")
var btn1 = document.querySelector("#button1")
var btn2 = document.querySelector("#button2")
var btn3 = document.querySelector("#button3")
var btn4 = document.querySelector("#button4")
var timer = 0
var questionNumber = 0
var questionResponse = [
  {q: "question 1", response: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"}, correctResponse: "b"},
  {q: "question 2", resposne: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"}, correctResponse: "c"},
  {q: "question 3", resposne: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"}, correctResponse: "a"},
  {q: "question 4", resposne: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"}, correctResponse: "d"},
  {q: "question 5", resposne: {a: "answer 1", b: "answer 2", c: "answer 3", d: "answer 4"}, correctResponse: "c"},
]
  
startBtn.addEventListener("click", startGame)

function startGame() {

  if (questionNumber > questionResponse.length -1) {
    endGame()
  } else {
    displayQuestion()
    questionNumber++
  }
}

function displayQuestion() {
  startBtn.style.display = "none"
  pTag.textContent = ""
  h1Body.textContent = questionResponse[questionNumber].q
  createResponses()
  console.log("button1")
  console.log("button2")
  console.log("button3")
  console.log("button4")
  // checkResponse(response)
}

function createResponses() {
  var li = document.createElement("button")
  li.setAttribute("id", "button1")
  li.textContent = questionResponse[questionNumber].response.a
  responses.appendChild(li)
  var li = document.createElement("button")
  li.setAttribute("id", "button2")
  li.textContent = questionResponse[questionNumber].response.b
  responses.appendChild(li)
  var li = document.createElement("button")
  li.setAttribute("id", "button3")
  li.textContent = questionResponse[questionNumber].response.c
  responses.appendChild(li)
  var li = document.createElement("button")
  li.setAttribute("id", "button4")
  li.textContent = questionResponse[questionNumber].response.d
  responses.appendChild(li)
}

// function checkResponse(response) {

// }

function endGame() {
  h1Body.textContent("High score!")
}