// Generate random output between given choices: rock, paper, scissors
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);

    if (selection == 0) {
        console.log("Computer throws rock!");
        return "rock";
    } else if (selection == 1) {
        console.log("Computer throws paper!");
        return "paper";
    } else if (selection == 2) {
        console.log("Computer throws scissors!");
        return "scissors";
    }
}

// Play a round of Rock Paper Scissors using player and computer outputs
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Game tie";
    } 
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return "Paper beats rock, you win!";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "Rock beats scissors, you lose!";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "Paper beats rock, you lose!";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "Scissors beat paper, you win!";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "Rock beats scissors, you win!";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "Scissors beat paper, you lose!";
    } else {
        return "Invaild input."
    }
}

function game() {
    // Output the results of the game
    console.log(playRound(playerSelection, computerSelection));
}

// Generate player choice
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();;
// Get computer choice
const computerSelection = computerPlay();

game();
