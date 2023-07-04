// GAME LOGIC: START

let computerScore = 0;
let userScore = 0;
let tieGame = 0;

function getComputerChoice() {
    let computerChoice = [`rock`, `paper`, `scissors`];
    let choice = Math.floor(Math.random() * 3);
    return computerChoice[choice];
}

function playRound(playerSelection, computerSelection) {
computerSelection = getComputerChoice();

 if (playerSelection === computerSelection) {
    tieGame++;
 }
 else if (playerSelection === `rock` && computerSelection === `paper`) {
    computerScore++;
     // Lose
 }
else if (playerSelection === `rock` && computerSelection === `scissors`) {
     userScore++;
    // Win
 }
else if (playerSelection === `paper` && computerSelection === `rock`) {
     userScore++;
    // Win
 }
else if (playerSelection === `paper` && computerSelection === `scissors`) {
     computerScore++;
    // Lose
 }
else if (playerSelection === `scissors` && computerSelection === `paper`) {
     userScore++;
    // Win
 }
else if (playerSelection === `scissors` && computerSelection === `rock`) {
     computerScore++;
    // Lose
 }

 scoreUpdate();
    }

function scoreUpdate() {
    userWinner.textContent = `Your Wins: ${userScore}`;
    computerWinner.textContent = `Computer Wins: ${computerScore}`;
    evenGame.textContent = `Tie Game: ${tieGame}`;

    if (userScore === 5) {
      newChildren.textContent = `You Won! The World is Saved!`;
      endGame.replaceChildren(newChildren, refreshBtn);
   }
     else if (computerScore === 5) {
      newChildren.textContent = `You Lost! Now Only SonGoku Can Save Us`;
      endGame.replaceChildren(newChildren, refreshBtn);
     }
    else if (tieGame === 5) {
      newChildren.textContent = `It's a Tie! Keep it up! You're halfway there!`;
      endGame.replaceChildren(newChildren, refreshBtn);
    }
}
      

// GAME LOGIC END

// UI START


const iconRock = document.querySelector(`.rock`);
const iconPaper = document.querySelector(`.paper`);
const iconScissors = document.querySelector(`.scissors`);
const userWinner = document.querySelector(`.user-wins`);
const computerWinner = document.querySelector(`.computer-wins`);
const evenGame = document.querySelector(`.tie-game`);
const endGame = document.querySelector(`.score-container`);
const newChildren = document.createElement(`h4`);
const refreshBtn = document.createElement(`button`);


refreshBtn.textContent = `Click Here to Restart the Game`;

newChildren.style.color = `#F2E9E4`;
newChildren.style.fontSize = `2.0em`;

refreshBtn.style.padding = `15px`;
refreshBtn.style.fontSize = `20px`;
refreshBtn.style.color = `#F2E9E4`;
refreshBtn.style.background = `#333648`;
refreshBtn.style.letterSpacing = `1px`;
refreshBtn.style.border = `3px solid #9A8C98`;
refreshBtn.style.borderRadius = `35px`;
refreshBtn.style.cursor = `pointer`;

function animateButton() {
  refreshBtn.style.transform = 'scale(1.5)';
}
refreshBtn.addEventListener('mouseover', animateButton);

function resetButton () {
   refreshBtn.style.transform = `scale(1)`;
}
refreshBtn.addEventListener(`mouseout`, resetButton);

function pageReload() {
   location.reload();
}
refreshBtn.addEventListener(`click`, pageReload);


iconRock.addEventListener(`click`, () => {const playerSelection = `rock`;
playRound(playerSelection, getComputerChoice());});

iconPaper.addEventListener(`click`, () => {const playerSelection = `paper`;
playRound(playerSelection, getComputerChoice());});

iconScissors.addEventListener(`click`, () => {const playerSelection = `scissors`;
playRound(playerSelection, getComputerChoice());});

// UI END