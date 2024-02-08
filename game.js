
const getComputerChoice = () => {
    const numericChoice = Math.round(Math.random() * 2) + 1; // Between 1 and 3 inclusive: 2 + 1 = 3
    let choice = ''; // Initialise choice as empty string
    // The following will assign a string containing the respective term from a number from 1 to 3
    switch(numericChoice) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break
        default:
            choice = 'no choice';
            break; // Default for debugging purposes
    }
    return choice;
}

const getPlayerChoice = (choices) => {
    const promise = new Promise(resolve => {
        choices.forEach(choice => {
            choice.addEventListener('click', () => {
                resolve(choice.id);
            });
            
        })
    })
    
    return promise;
}

const gameRound = (playerSelection, computerSelection) => {
    let winner = ''; // Initialise winner as empty string
    // Array of participants for reference
    const participants = ['Player', 'Computer'];
    if (playerSelection == computerSelection) {
        return 'Tie'; // If both selections are same, then tie
    }
    // Nested switch statements: first one being the player, second being computer for all player cases
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'paper':
                    winner = participants[1];
                    break;
                case 'scissors':
                    winner = participants[0];
                    break;
                default:
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    winner = participants[0];
                    break;
                case 'scissors':
                    winner = participants[1];
                    break;
                default:
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    winner = participants[1];
                    break;
                case 'paper':
                    winner = participants[0];
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return winner;
}

const playFullGame = async () => {
    // Retrieve contents element containing 'Start Game' button
    const content = document.querySelector('.contents');
    // Remove 'Start Game' button
    content.innerHTML = '';
    // Replace with choices
    // Rock
    const button_rock = document.createElement('button');
    button_rock.setAttribute('id', 'rock');
    content.appendChild(button_rock);
    button_rock.textContent = 'Rock';
    // Paper
    const button_paper = document.createElement('button');
    button_paper.setAttribute('id', 'paper');
    content.appendChild(button_paper);
    button_paper.textContent = 'Paper';
    // Scissors
    const button_scissors = document.createElement('button');
    button_scissors.setAttribute('id', 'scissors');
    content.appendChild(button_scissors);
    button_scissors.textContent = 'Scissors';
    // Insert one event listener for all buttons
    const choices = document.querySelectorAll('button');
    // Get player choice
    const playerChoice = await getPlayerChoice(choices);
    // Get computer choice
    const computerChoice = getComputerChoice();
    // Compare choices
    const result = gameRound(playerChoice, computerChoice);
    // Remove all choices
    content.removeChild(button_rock);
    content.removeChild(button_paper);
    content.removeChild(button_scissors);
    // Replace with another div container
    const resultContent = document.createElement('div');
    resultContent.classList.add('result');
    content.appendChild(resultContent);
    // Player move display
    const text_playerMove = document.createElement('div');
    text_playerMove.textContent = `You selected ${playerChoice}`;
    resultContent.appendChild(text_playerMove);
    // Computer move display
    const text_computerMove = document.createElement('div');
    text_computerMove.textContent = `Your opponent selected ${computerChoice}`;
    resultContent.appendChild(text_computerMove);
    // Determine which participant won or whether they scored a tie
    let res = '';
    if (result == 'Tie') {
        res = `${result}! Neither won.`;
    }
    else {
        res = `${result} won.`;
    }
    // Display the final result
    const text_result = document.createElement('div');
    text_result.textContent = res;
    resultContent.appendChild(text_result);
    // Option to restart game
    restartGame(content);
}

const restartGame = (content) => {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    content.appendChild(restartButton);
    restartButton.addEventListener('click', playFullGame);
}

const main = () => {
    const playGame = document.querySelector('button');
    playGame.addEventListener('click', playFullGame);
}
main();