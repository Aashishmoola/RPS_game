/* 
Write function getComputerChoice
Write function getHumanChoice
Declare player score variables in global scope
Write function playRound => play one round and Outputs the winner
Write function game =>plays five rounds of the game and outputs the final winner
*/

let humanScore = 0;
let computerScore = 0;
const rounds = 5;
const choices= ["rock","paper","scissors"];


 function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
 }

 function getHumanChoice(){
    while (true){ 
        let choice = prompt("Choose from rock, paper, scissors").toLowerCase().trim();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
    }
}

 function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice === humanChoice){
        console.log(`Its is tie. Computer also chose ${computerChoice}!`);
    }
    else if (computerChoice === "rock") {
        if(humanChoice === "paper"){
            console.log("paper beats rock. You win");
            humanScore++;
        }
        else if(humanChoice === "scissors"){
            console.log("rock beats scissors. You lose");
            computerScore++;
        }
    }
    else if (computerChoice === "paper") {
        if(humanChoice === "rock"){
            console.log("paper beats rock. You lose");
            computerScore++;
        }
        else if(humanChoice === "scissors"){
            console.log("scissors beats paper. You win");
            humanScore++;
        }
    }
    else if (computerChoice === "scissors") {
        if(humanChoice === "paper"){
            console.log("scissors beats paper. You lose");
            computerScore++;
        }
        else if(humanChoice === "rock"){
            console.log("rock beats scissors. You win");
            humanScore++;
        }
    }
 }

 function game(){
    for(i=0;i<rounds;i++){
        playRound();
    }
    if (computerScore === humanScore){
        console.log ("Overall, its a tie")
    }
    else if (computerScore > humanScore) {
        console.log("Overall, The computer won")
    }
    else if(humanScore > computerScore) {
        console.log("Overall, you won!")
    }
 }

 game();