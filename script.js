

const totalScore = {
  computerScore : 0,
  playerScore : 0
}

function getComputerChoice() {
  const rpsChoices = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * rpsChoices.length)
  return rpsChoices[randomNumber]
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0
  }
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }
  else {
    score = -1
  }
  return score

}


function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
const playerScoreDiv = document.getElementById('player-score')
  if(score == -1){
    resultDiv.innerText = 'You Lose!'
  }
  else if(score == 0){
    resultDiv.innerText = 'Its a tie!'
  }
  else{
    resultDiv.innerText = 'You Won!'
  }
  handsDiv.innerText = `👨:  ${playerChoice} vs 🤖: ${computerChoice}`
  playerScoreDiv.innerText = `Your Score:${totalScore['playerScore']}`
}


function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  const computerChoice = getComputerChoice()
  console.log({ computerChoice })
  const score = getResult(playerChoice,computerChoice)
  console.log(score)
  totalScore['playerScore'] += score
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice)
}

function playGame() {

  const rpsButtons = document.querySelectorAll('.rpsButton')
  console.log(rpsButtons)

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
  const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => endGame(totalScore)
}


function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
const playerScoreDiv = document.getElementById('player-score')
  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()