let userPoint = 0;
let computerPoint = 0;

const userDisplay = document.querySelector("#user-point");
const computerDisplay = document.querySelector("#computer-point");
const outcomeText = document.querySelector("#outcome-text");
const userSelection = document.querySelector(".user-selection");
const computerSelection = document.querySelector(".computer-selection");

//play a round, add a point and return outcome message
function playRound(player, computer) {
    if (player == computer) { return ('Issa draw') }
    else if (player == 'rock') {
        if (computer == 'paper') {
            computerPoint++;
            return ('You lose, paper beats rock!');
        }
        else if (computer == 'scissors') {
            userPoint++;
            return ('You win, rock beats scissors!');
        }
    }
    else if (player == 'paper') {
        if (computer == 'rock') {
            userPoint++;
            return ('You win, paper beats rock!');
        }
        else if (computer == 'scissors') {
            computerPoint++;
            return ('You lose, scissors beat paper!');
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            computerPoint++;
            return ('You lose, rock beats scissors!');
        }
        else if (computer == 'paper') {
            userPoint++;
            return ('You win, scissors beat paper!');
        }
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(
    button => button.addEventListener("click", function () {
        if (userPoint !== 5 && computerPoint !== 5) {
            //record user's and computer's choices
            let userChoice = button.id;

            let computerChoice = '';

            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    computerChoice = computerChoice.concat('rock');
                    break;
                case 1:
                    computerChoice = computerChoice.concat('paper');
                    break;
                case 2:
                    computerChoice = computerChoice.concat('scissors');
                    break;
            }

            //display outcome message and scores after each round
            let thisRound = playRound(userChoice, computerChoice);
            if (userPoint == 5) {
                outcomeText.textContent = "Congrats, you won!";
            }
            else if (computerPoint == 5) {
                outcomeText.textContent = "Game over, you lost :(";
            }
            else {
                outcomeText.textContent = thisRound;
            }
            userDisplay.textContent = userPoint;
            computerDisplay.textContent = computerPoint;

            //display user's and computer's choices each round
            const userSelect = document.createElement("li");
            // userSelect.classList.add("style-li");
            userSelect.textContent = userChoice;
            userSelection.appendChild(userSelect);

            const computerSelect = document.createElement("li");
            // computerSelect.classList.add("style-li");
            computerSelect.textContent = computerChoice;
            computerSelection.appendChild(computerSelect);
        }
    })
);