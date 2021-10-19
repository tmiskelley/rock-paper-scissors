// Generate random output between given choices: rock, paper, scissors
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);

    switch (selection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
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

    const div = document.getElementById('results');
    const para = document.createElement('p');
    const score = document.createElement('p');
    score.style.color = 'blue';
    
    if (computerSelection == playerSelection) {
        para.textContent = "You and the computer tied.";
        div.appendChild(para);
        score.textContent = `you: ${_playerScore} computer: ${_computerScore}`;
        div.appendChild(score);
    } 
    else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore();
        para.textContent = "Paper beats rock!";
        para.style.color = 'green';
        div.appendChild(para);
        score.textContent = `you: ${_playerScore} computer: ${_computerScore}`;
        div.appendChild(score);
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore();
        para.textContent = "Rock beats scissors.";
        para.style.color = 'red';
        div.appendChild(para);
        score.textContent = `you: ${_playerScore} computer: ${_computerScore}`;
        div.appendChild(score);
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore();
        para.textContent = "Paper beats rock.";
        para.style.color = 'red';
        div.appendChild(para);
        score.textContent = `you: ${_playerScore} computer: ${_computerScore}`;
        div.appendChild(score);
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore();
        para.textContent = "Scissors beat paper!";
        para.style.color = 'green';
        div.appendChild(para);
        score.textContent = `you: ${_playerScore} computer: ${_computerScore}`;
        div.appendChild(score);
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore();
        para.textContent = "Rock beats scissors!";
        para.style.color = 'green';
        div.appendChild(para);
        score.textContent = `you: ${_playerScore} computer: ${_computerScore}`;
        div.appendChild(score);
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore();
        para.textContent = "Scissors beat paper.";
        para.style.color = 'red';
        div.appendChild(para);
        score.textContent = `you: ${_playerScore} computer: ${_computerScore}`;
        div.appendChild(score);
    }
}

function tallyScore() {

    if (!executed) {
        executed = true;

        const div = document.getElementById('results');
        const winner = document.createElement('p');

        if (_playerScore == _computerScore) {
            winner.textContent = "Game tied";
            div.appendChild(winner);
        } else if (_playerScore > _computerScore) {
            winner.textContent = "You win!";
            winner.style.color = 'gold';
            div.appendChild(winner);
        } else if (_playerScore < _computerScore) {
            winner.textContent = "Computer wins.";
            winner.style.color = '#cd7f32';
            div.appendChild(winner);
        }
    }
}

function game() {

    const rock =  document.getElementById("rock");
    const paper =  document.getElementById("paper");
    const scissors =  document.getElementById("scissors");

    rock.addEventListener('click', function play() {
        if(_playerScore == 5 || _computerScore == 5) {
            tallyScore();
            rock.removeEventListener('click', play);
        } else {
            let computer = computerPlay();
            playRound("rock", computer);
        }
    });

    paper.addEventListener('click', function play() {
        if(_playerScore == 5 || _computerScore == 5) {
            tallyScore();
            paper.removeEventListener('click', play);
        } else {
            let computer = computerPlay();
            playRound("paper", computer);
        }
    });

    scissors.addEventListener('click', function play() {
        if(_playerScore == 5 || _computerScore == 5) {
            tallyScore();
            scissors.removeEventListener('click', play);
        } else {
            let computer = computerPlay();
            playRound("scissors", computer);
        }
    });
}

let executed = false;

let _playerScore = 0;
let _computerScore = 0;

game();
