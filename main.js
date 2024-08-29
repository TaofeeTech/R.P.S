const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById('result');

let playerScore = 0;

let computerScore = 0;

const playerScoreEl = document.getElementById('user-score');

const computerScoreEl = document.getElementById('computer-score')

buttons.forEach(button => {
  
  button.addEventListener('click', () => {
    
   // console.log('user choice:', button.id, 'computer choice:', computerPlay());
   
   const result = playRound(button.id, computerPlay());
   
  // console.log(result);
  
  resultEl.textContent = result;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  
  })
  
})

function computerPlay() {
  
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
  
}

function playRound(playerSelection, computerSelection){
  
  if(playerSelection === computerSelection){
    
    return "it's a tie";
    
  }else if(
    
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    
  ) {
    
    playerScore++
    return 'you win ' + playerSelection + ' beats ' + computerSelection;
    
  }else{
    
    computerScore++
    return 'you loose ' + computerSelection + ' beats ' + playerSelection;
    
  }
  
}