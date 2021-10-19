// Generate random output between given choices: rock, paper, scissors
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);

    switch (selection) {
        case 0:
            console.log("Computer throws rock!");
            return "rock";
        case 1:
            console.log("Computer throws paper!");
            return "paper";
        case 2:
            console.log("Computer throws scissors!");
            return "scissors";
    }
}

function playerScore() {
    _playerScore++;

}

function computerScore() {
    _computerScore++;
}

// Play a round of Rock Paper Scissors using player and computer outputs
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "You and the computer tied.";
    } 
    else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore();
        return "Paper beats rock!";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore();
        return "Rock beats scissors.";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore();
        return "Paper beats rock.";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore();
        return "Scissors beat paper!";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore();
        return "Rock beats scissors!";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore();
        return "Scissors beat paper.";
    } else {
        computerScore();
        return "Invaild input. Computer gets +1 point.";
    }
}

function tallyScore() {
    if (_playerScore == _computerScore) {
        console.log("Game tied.");
    } else if (_playerScore > _computerScore) {
        console.log("You win!");
    } else if (_playerScore < _computerScore) {
        console.log("Computer wins.");
    }
}

function game() {
    // Generate player choice
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();;
    // Get computer choice
    const computerSelection = computerPlay();

    // Output the results of the game
    console.log(playRound(playerSelection, computerSelection));
}

let _playerScore = 0;
let _computerScore = 0;

for (let i = 0; i < 5; i++) {
    game();
}

tallyScore();

console.log(`Total score 
Computer: ${_computerScore}  
Player: ${_playerScore}`);
