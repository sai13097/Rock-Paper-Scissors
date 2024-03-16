window.onload = () => {
  const name = getPlayerName();
  playGame(name)
}

const getPlayerName = function() {
  let name = prompt("Please Enter Your Name bro");
  return name;
}


const totalScore = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {
  let score = []
  if (playerChoice === computerChoice) {
    score[0] = 0;
    score[1] = 0;
  }
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score[0] = 1;
    score[1] = -1;
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score[0] = 1;
    score[1] = -1;
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score[0] = 1;
    score[1] = -1;
  }
  else {
    score[0] = -1;
    score[1] = 1;
  }
  return score;
}

function showResult(name, score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')
  if (score[0] == -1) {
    resultDiv.innerText = 'You Lose'
  }
  else if (score[0] == 0) {
    resultDiv.innerText = "it's a draw"
  }
  else {
    resultDiv.innerText = 'You Win'
  }
  handsDiv.innerText = ` 🥷🏻${playerChoice} vs 🤓 ${computerChoice}`
  playerScoreDiv.innerText = `${name[0].toUpperCase() + name.slice(1)} Total Score: ${totalScore['playerScore']}`
  computerScoreDiv.innerText = `Narasimha Total Score: ${totalScore['computerScore']}`
}

function onClickRPS(name, playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score[0]
  totalScore['computerScore'] += score[1]
  showResult(name, score, playerChoice, computerChoice)
}

function playGame(name) {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => {
      onClickRPS(name, rpsButton.value)
    }
  })

  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => {
    endGame(totalScore);
  }
}

function endGame(totalScore) {
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')
  handsDiv.innerText = ""
  playerScoreDiv.innerText = ""
  resultDiv.innerText = ""
  computerScoreDiv.innerText = ""
}

