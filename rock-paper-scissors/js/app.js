function computerPlay (computerSelection) {
    const choiceArr = ["rock", "paper", "scissors"];
    computerSelection = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return computerSelection;

}

function bestOfOne (thePlayerSelection, computerSelection) {
    if(thePlayerSelection === "rock"){
        if (computerSelection === "scissors") {
            playerWins ++;
            return "You win! Rock beats Scissors!";
        }
        else if (computerSelection === "paper") {
            computerWins ++;
            return "Computer wins! Paper beats Rock!"
        }
        else {
            return "It's a tie!"
        }
    }
    if(thePlayerSelection === "scissors"){
        if (computerSelection === "paper") {
            playerWins ++;
            return "You win! Scissors beat Paper!";
        }
        else if (computerSelection === "rock") {
            computerWins ++;
            return "Computer wins! Rock beats Scissors!"
        }
        else {
            return "It's a tie!"
        }
    }
    if(thePlayerSelection === "paper"){
        if (computerSelection === "rock") {
            playerWins ++;
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection === "scissors") {
            computerWins ++;
            return "Computer wins! Scissors beat Paper!"
        }
        else {
            return "It's a tie!"
        }
    }
}

let playerWins = parseInt(0)
let computerWins = parseInt(0)

for (let i = 1; i <= 5; i++){
let thePlayerSelection = prompt("Input 'Rock', 'Paper' or 'Scissors'").toLowerCase()
const computerSelection = computerPlay();
console.log("Your score: " + playerWins)
console.log("Computer score: " + computerWins)
console.log(bestOfOne(thePlayerSelection, computerSelection))
}
if (playerWins > computerWins){
    console.log("Player wins with " + playerWins + " games to " + computerWins + " !")
}
else if (playerWins < computerWins) {
    console.log("Computer wins with " + computerWins + " games to " + playerWins + " !")
}
else {
    console.log("Player and computer are tied at " + playerWins + " : " + computerWins)
} 

/* when the site is opened, ask the user to input rock, paper or scissors.
    the computer will then output one of the following choices: rock, paper, scissors.
    if one selected rock and the other scissors, then rock wins
    if one selected scissors and the other paper, then scissors win
    if one selected paper and the other rock, then paper wins.
    this game has 5 rounds, so the same game has to be run 5 times,
    while keeping count of the games.
    when game 5 finishes, the game should announce the winner and the result */