const RESULT_WIN  = 1;
const RESULT_LOSE = 2;
const RESULT_DRAW = 3;

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
    let result;

    if(computerSelection == playerSelectionFormatted){
        result = RESULT_DRAW
    }else if(computerSelection == "Rock" && playerSelectionFormatted == "Paper" || 
                computerSelection == "Paper" && playerSelectionFormatted == "Scissors" || 
                computerSelection == "Scissors" && playerSelectionFormatted == "Rock"){
        result = RESULT_WIN;
    } else {
        result = RESULT_LOSE;
    }

    switch(result){
        case RESULT_WIN:
            displayResult(`Round Won - ${playerSelectionFormatted} beats ${computerSelection}`);
            break;
        case RESULT_LOSE:
            displayResult(`Round Lost - ${computerSelection} beats ${playerSelectionFormatted}`);
            break;
        case RESULT_DRAW:
            displayResult(`Tie Round`);
            break;
    }

    updateScores(result);
}

function updateScores(result){
    const playerScore = document.querySelector("#player-score .score-value");
    const computerScore = document.querySelector("#computer-score .score-value");

    switch(result){
        case RESULT_WIN:
            +playerScore.innerText++;
            if (+playerScore.innerText === 5) finishGame(result);
            break;
        case RESULT_LOSE:
            +computerScore.innerText++;
            if (+computerScore.innerText === 5) finishGame(result);
            break;
        case RESULT_DRAW:
            break;
    }
}

function finishGame(result){
    const display = document.querySelector("#game-result");
    const gameControls = document.querySelector("#selection");
    const message = document.querySelector("#game-result h1");

    if(result === RESULT_WIN){
        message.innerText = "You Win!";
    } else {
        message.innerText = "You Lose!";
    }

    display.style.display = "block";
    gameControls.style.display = "none";
}

function displayResult(result){
    const display = document.querySelector("#round-result") 
    display.innerText = result;
}

function getValidChoice(){
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

function getButtonPlayRound(e){
    let choice = this.id;
    playRound(computerPlay(), choice);
}

const choice = document.querySelectorAll(".choice");
choice.forEach(button => button.addEventListener("click", getButtonPlayRound));

const reload = document.querySelector("#reload");
reload.addEventListener("click", function(e){
    location.reload();
    return false;
});