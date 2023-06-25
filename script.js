function getComputerChoice() {
    let computerChoice = [`rock`, `paper`, `scissors`];
    let choice = Math.floor(Math.random() * 3);
    return computerChoice[choice];
}

function playRound(playerSelection, computerSelection) {
computerSelection = getComputerChoice();
playerSelection = prompt('Enter rock, paper, or scissors');
playerSelection = playerSelection.toLowerCase();
        
 if (
playerSelection !== 'rock' &&
playerSelection !== 'paper' &&
playerSelection !== 'scissors'
) { 
     do {
     
playerSelection = prompt(`Please enter a valid value of the given above:
1. rock 
2. paper  
3. scissors`);
playerSelection = playerSelection.toLowerCase();
 }
     while (playerSelection !== 'rock' &&
playerSelection !== 'paper' &&
playerSelection !== 'scissors')
 }
     
 if (playerSelection === computerSelection) {
     return 0;
 }
 else if (playerSelection === `rock` && computerSelection === `paper`) {
     return -1;
     // Lose
 }
else if (playerSelection === `rock` && computerSelection === `scissors`) {
     return 1;
    // Win
 }
else if (playerSelection === `paper` && computerSelection === `rock`) {
     return 1;
    // Win
 }
else if (playerSelection === `paper` && computerSelection === `scissors`) {
     return -1;
    // Lose
 }
else if (playerSelection === `scissors` && computerSelection === `paper`) {
     return 1;
    // Win
 }
else if (playerSelection === `scissors` && computerSelection === `rock`) {
     return -1;
    // Lose
 }
      }
      
function game() {
    let userCount = 0;
    let computerCount = 0;
    let tieGame = 0;
    for (let i = 0; i < 5; i++) {
    const result = playRound ();
    if (result === 1) {
    userCount++;}
    else if (result === -1) {
    computerCount++;}
    else tieGame++;
    }
    
const userScore = userCount;
const computerScore = computerCount;
const evenScore = tieGame;

console.log(`Your Score: ${userScore}`);
console.log(`Computer Score: ${computerScore}`);
console.log(`Number of tie games: ${tieGame}`);
};