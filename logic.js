/* 
Write function getComputerChoice
Write function getHumanChoice
Declare player score variables in global scope
Write function playRound => play one round and Outputs the winner
Write function game =>plays five rounds of the game and outputs the final winner
*/

let humanScore = 0;
let computerScore = 0;
const rounds = 1;
const choices= ["rock","paper","scissors"];
const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const resultText = document.querySelector(".result")


 function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
 }

 function getHumanChoice(){
    let humanChoice = ""
    let rockInputReceived = false
    let paperInputReceived = false
    let scissorsInputReceived = false

    //while(true){
        rockBtn.addEventListener("click", () => {
            humanChoice = "rock"
            rockInputReceived = true
            rockBtn.style.backgroundColor = "Green"
        })
        paperBtn.addEventListener("click", () => {
            humanChoice = "paper"
            paperInputReceived = true
            paperBtn.style.backgroundColor = "Green"
        })
        scissorsBtn.addEventListener("click", () => {
            humanChoice = "scissors"
            scissorsInputReceived = true
            scissorsBtn.style.backgroundColor = "Green"
        })
        if (rockInputReceived || paperInputReceived || scissorsInputReceived){
            return humanChoice
        }  
    //}
 }

 function playRound(){
    let result = ""
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice === humanChoice){
        result = `Its is tie. Computer also chose ${computerChoice}!`
    }
    else if (computerChoice === "rock") {
        if(humanChoice === "paper"){
            result = "paper beats rock. You win"
            humanScore++;
        }
        else if(humanChoice === "scissors"){
            result = "rock beats scissors. You lose"
            computerScore++;
        }
    }
    else if (computerChoice === "paper") {
        if(humanChoice === "rock"){
            result = "paper beats rock. You lose"
            computerScore++;
        }
        else if(humanChoice === "scissors"){
            result = "scissors beats paper. You win"
            humanScore++;
        }
    }
    else if (computerChoice === "scissors") {
        if(humanChoice === "paper"){
            result = "scissors beats paper. You lose"
            computerScore++;
        }
        else if(humanChoice === "rock"){
            result = "rock beats scissors. You win"
            humanScore++;
        }
    }
    resultText.textContent = result
 }

 function game(){
    for(i=0;i<rounds;i++){
        playRound();
    }
 }

 game();