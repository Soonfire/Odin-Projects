let clickCount = 0;
const btn = document.createElement('button')
document.body.appendChild(btn)
btn.textContent = "Rock"
btn.addEventListener('click', function gameEngine() {
    bestOfOne("rock",computerPlay());
    clickCount++
    scores.textContent = "Your score: " + playerWins + "\r\n" + "Computer score: " + computerWins;
    const nodeButtons = document.getElementsByTagName('button')
    const buttons = [...nodeButtons]
        if (playerWins === 5) {
            const bofWinner = document.createElement('div');
            bofWinner.classList.add("winner")
            document.body.appendChild(bofWinner)
            bofWinner.textContent = "Player wins the best of five with " + playerWins + " wins to " + computerWins + " !"
            buttons.forEach(element => {
                element.style.pointerEvents = "none"                
            });
        }
        else if(computerWins === 5) {
            const bofWinner = document.createElement('div');
            bofWinner.classList.add("winner")
            document.body.appendChild(bofWinner)
            bofWinner.textContent = "Computer wins the best of five with " + computerWins + " wins to " + playerWins + " !"
            buttons.forEach(element => {
                element.style.pointerEvents = "none"                
            });
        }
})

const btn1 = document.createElement('button')
document.body.appendChild(btn1)
btn1.textContent = "Paper"
btn1.addEventListener('click', function gameEngine() {
    bestOfOne("paper",computerPlay());
    clickCount++;
    scores.textContent = "Your score: " + playerWins + "\r\n" + "Computer score: " + computerWins;
    const nodeButtons = document.getElementsByTagName('button')
    const buttons = [...nodeButtons]
        if (playerWins === 5) {
            const bofWinner = document.createElement('div');
            bofWinner.classList.add("winner")
            document.body.appendChild(bofWinner)
            bofWinner.textContent = "Player wins the best of five with " + playerWins + " wins to " + computerWins + " !"
            buttons.forEach(element => {
                element.style.pointerEvents = "none"                
            });
        }
        else if(computerWins === 5) {
            const bofWinner = document.createElement('div');
            bofWinner.classList.add("winner")
            document.body.appendChild(bofWinner)
            bofWinner.textContent = "Computer wins the best of five with " + computerWins + " wins to " + playerWins + " !"
            buttons.forEach(element => {
                element.style.pointerEvents = "none"                
            });
        }
})

const btn2 = document.createElement('button')
document.body.appendChild(btn2)
btn2.textContent = "Scissors"
btn2.addEventListener('click', function gameEngine() {
    bestOfOne("scissors",computerPlay());
    clickCount++;
    scores.textContent = "Your score: " + playerWins + "\r\n" + "Computer score: " + computerWins;
    const nodeButtons = document.getElementsByTagName('button')
    const buttons = [...nodeButtons]
        if (playerWins === 5) {
            const bofWinner = document.createElement('div');
            bofWinner.classList.add("winner")
            document.body.appendChild(bofWinner)
            bofWinner.textContent = "Player wins the best of five with " + playerWins + " wins to " + computerWins + " !"
            buttons.forEach(element => {
                element.style.pointerEvents = "none"                
            });
        }
        else if(computerWins === 5) {
            const bofWinner = document.createElement('div');
            bofWinner.classList.add("winner")
            document.body.appendChild(bofWinner)
            bofWinner.textContent = "Computer wins the best of five with " + computerWins + " wins to " + playerWins + " !"
            buttons.forEach(element => {
                element.style.pointerEvents = "none"                
            });
        }
})

const div = document.createElement('div')
document.body.appendChild(div)
div.textContent = "Results:"
const para = document.createElement('p')
div.appendChild(para)

const scores = document.createElement('div')
scores.classList.add("scores")
document.body.appendChild(scores)
scores.setAttribute('style', 'white-space: pre;')


function computerPlay (computerSelection) {
    const choiceArr = ["rock", "paper", "scissors"];
    computerSelection = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return computerSelection;

}

function bestOfOne (thePlayerSelection, computerSelection) {
    if(thePlayerSelection === "rock"){
        if (computerSelection === "scissors") {
             playerWins ++;
            return para.textContent = "You win! Rock beats Scissors!"
        }
        else if (computerSelection === "paper") {
                computerWins ++;
                return para.textContent = "Computer wins! Paper beats Rock!"
        }
        else {
            return para.textContent = "It's a tie!"
            }
        }
        if(thePlayerSelection === "scissors"){
            if (computerSelection === "paper") {
                playerWins ++;
                return para.textContent = "You win! Scissors beat Paper!"
            }
            else if (computerSelection === "rock") {
                computerWins ++;
                return para.textContent = "Computer wins! Rock beats Scissors!"
            }
            else {
                return para.textContent = "It's a tie!"
            }
        }
        if(thePlayerSelection === "paper"){
            if (computerSelection === "rock") {
                playerWins ++;
                return para.textContent = "You win! Paper beats Rock!"
            }
            else if (computerSelection === "scissors") {
                computerWins ++;
                return para.textContent = "Computer wins! Scissors beat Paper!"
            }
            else {
                return para.textContent = "It's a tie!"
            }
        }
}

let playerWins = parseInt(0)
let computerWins = parseInt(0)

/* when the site is opened, ask the user to input rock, paper or scissors.
    the computer will then output one of the following choices: rock, paper, scissors.
    if one selected rock and the other scissors, then rock wins
    if one selected scissors and the other paper, then scissors win
    if one selected paper and the other rock, then paper wins.
    this game has 5 rounds, so the same game has to be run 5 times,
    while keeping count of the games.
when game 5 finishes, the game should announce the winner and the result */