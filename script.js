let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const userScreen_div = document.getElementById("user-screen");
const comScreen_div = document.getElementById("com-screen");
const continueButton = document.getElementById("continue");
const quitButton = document.getElementById("quit");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    displayChoices(userChoice, computerChoice);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " loses to " + computerChoice + ". You lose!";
    displayChoices(userChoice, computerChoice);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = userChoice + " equals " + computerChoice + ". It's a draw!";
    displayChoices(userChoice, computerChoice);
}

function displayChoices(userChoice, computerChoice) {
    const userChoiceImage = document.createElement('img');
    userChoiceImage.src = userChoice + '.png';
    userChoiceImage.alt = userChoice;
    userScreen_div.innerHTML = '';
    userScreen_div.appendChild(userChoiceImage);

    const computerChoiceImage = document.createElement('img');
    computerChoiceImage.src = computerChoice + '.png';
    computerChoiceImage.alt = computerChoice;
    comScreen_div.innerHTML = '';
    comScreen_div.appendChild(computerChoiceImage);
}

function resetScreens() {
    userScreen_div.innerHTML = '<img src="user-default.jpg" alt="user\'s move">';
    comScreen_div.innerHTML = '<img src="com-default.png" alt="computer\'s move">';
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })

    continueButton.addEventListener('click', function() {
        resetScreens();
        result_p.innerHTML = '';
    });

    quitButton.addEventListener('click', function() {
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        resetScreens();
        result_p.innerHTML = '';
    });
}

main();
