let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const getCompChoice = () => {
  let options = ["rock", "paper", "scissors"]
  const randomIndx = Math.floor(Math.random() * 3)
  return options[randomIndx]
}

const DrawGame = () => {
  msg.innerText = "Game was Draw.Play Again."
  msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userScore++
    userScorePara.innerText = userScore
    msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
  } else {
    compScore++
    compScorePara.innerText = compScore
    msg.innerText = `You Lost! ${compChoice} beats your ${userchoice}`
    msg.style.backgroundColor = "red"
  }
}

const playGame = (userchoice) => {

  const compChoice = getCompChoice()

  if (userchoice === compChoice) {
    DrawGame()
  } else {
    let userWin = true
    if (userchoice === "rock") {
      //scissors,paper
      userWin = compChoice == "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissors
      userWin = compChoice == "scissors" ? false : true;
    } else {
      //paper,rock
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice)
  }
}

choices.forEach((choice) => {
  console.log(choice)
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id")
    console.log("choice was clicked", userchoice)
    playGame(userchoice)
  })
})