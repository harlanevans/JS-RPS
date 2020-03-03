//* ROCK
let rock = document.getElementById("rock");
rock.value = "Rock";
let rockValue = rock.value;

//* PAPER
let paper = document.getElementById("paper");
paper.value = "Paper";
let paperValue = paper.value;

//* SCISSORS
let scissors = document.getElementById("scissors");
scissors.value = "Scissors";
let scissorsValue = scissors.value;

//* LISTENERS
var rockClick = rock.addEventListener("click", rockChoice);
var paperClick = paper.addEventListener("click", paperChoice);
var scissorsClick = scissors.addEventListener("click", scissorsChoice);

//* OTHER
let userChoice;
let theCompChoice;
let choice = document.getElementById("choice");
let compChoice = document.getElementById("comp-choice");
let userChoiceNew = document.createElement("DIV");
let compChoices = ["Rock", "Paper", "Scissors"];
let compuserChoiceNew = document.createElement("DIV");
let result = document.getElementById("result");

function rockChoice() {
  // grabbing the user choice
  userChoiceNew.innerHTML = rockValue;
  userChoice = rockValue;
  choice.appendChild(userChoiceNew);
  // We grab comp info
  computerChoice();
  // need to compare to compute
}

function paperChoice() {
  // grabbing the user choice
  userChoiceNew.innerHTML = paperValue;
  userChoice = paperValue;
  choice.appendChild(userChoiceNew);
  // We grab comp info
  computerChoice();
  // need to compare to compute
}

function scissorsChoice() {
  // grabbing the user choice
  userChoiceNew.innerHTML = scissorsValue;
  userChoice = scissorsValue;
  choice.appendChild(userChoiceNew);
  // We grab comp info
  computerChoice();
  // need to compare to compute
}

// get computer choice
function computerChoice() {
  theCompChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
  compuserChoiceNew.innerHTML = theCompChoice;
  compChoice.appendChild(compuserChoiceNew);
  compareAnswers();
}

//! COMPARE

function compareAnswers() {
  if (userChoice === theCompChoice) {
    result.innerHTML = "Tie";
  } else {
    if (userChoice === "Rock") rockCompare();
    if (userChoice === "Paper") paperCompare();
    else {
      scissorsCompare();
    }
  }
}

function rockCompare() {
  if (theCompChoice === "Paper") {
    result.innerHTML = "You Loser";
  } else {
    result.innerHTML = "You Won!";
  }
}
function paperCompare() {
  if (theCompChoice === "Scissors") {
    result.innerHTML = "You Loser";
  } else {
    result.innerHTML = "You Won!";
  }
}
function scissorsCompare() {
  if (theCompChoice === "Rock") {
    result.innerHTML = "You Loser";
  } else {
    result.innerHTML = "You Won!";
  }
}
