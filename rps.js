function computerPlay(){
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice){
        case 1:
            return "Rock";
            break;
        case 2: 
            return "Paper";
            break;
        case 3: 
            return "Scissors";
            break;
        default: 
            return "ERROR";
    }
}

function capitalize(word){
    return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
} 

function playRound(computerSelection, playerSelection){
    let playerSelectionFormatted = capitalize(playerSelection);

    if(computerSelection == playerSelectionFormatted){
        return `It's a Draw!`
    }

    if(computerSelection == "Rock" && playerSelectionFormatted == "Paper" 
    || computerSelection == "Paper" && playerSelectionFormatted == "Scissors" 
    || computerSelection == "Scissors" && playerSelectionFormatted == "Rock"){
        return `You Win! ${playerSelectionFormatted} beats ${computerSelection}`
    }
    return `You Lose! ${computerSelection} beats ${playerSelectionFormatted}`
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let outcome;

    
    while(playerScore !== 5 && computerScore !== 5){
        outcome = playRound(computerPlay(), validChoice());
        if(outcome.slice(4,5) == "W"){
            playerScore++;
        } else if (outcome.slice(4,5) == "L"){
            computerScore++;
        }
        console.log(outcome);
    }

    if(playerScore >= computerScore){
        return `You Won the game! You Won ${playerScore} rounds and the computer Won ${computerScore}`
    }
    return `You Lost the game! The computer Won ${computerScore} rounds and you Won ${playerScore}`
}

function validChoice(){
    let playerSelectionFormatted; 
    let valid = false;
    while (!valid){
        playerSelectionFormatted = capitalize(prompt("Rock, Paper or Scissors?"));
        if(playerSelectionFormatted == "Rock" || playerSelectionFormatted == "Paper" || playerSelectionFormatted == "Scissors"){
            valid = true;
        }
    }
    return playerSelectionFormatted;
}
