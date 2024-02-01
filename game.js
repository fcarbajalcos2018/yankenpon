
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

const getPlayerChoice = () => {
    // Enable user to enter a text parametre
    const choice = prompt('Enter your choice: Rock, Paper or Scissors');
    // Convert any uppercase letter to lowercase for case-insensitiveness
    const caseCorrectChoice = choice.toLowerCase();
    let response = ''; // Initialise response as empty string
    if (['rock', 'paper', 'scissors'].includes(caseCorrectChoice)) {
        response = caseCorrectChoice; // If choice is valid, set response to choice
    }
    else {
        console.warn('You have entered an invalid choice.')
        response = getPlayerChoice(); // If choice is not valid, recursively call function until valid
    }
    return response;
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

const main = () => {
    const playerChoice = getPlayerChoice();
    document.getElementById('player').innerHTML = `You entered: ${playerChoice}`;
    const computerChoice = getComputerChoice();
    document.getElementById('computer').innerHTML = `Your opponent entered: ${computerChoice}`;
    const result = gameRound(playerChoice, computerChoice);
    let res = '';
    if (result == 'Tie') {
        res = `${result}! Neither won.`;
    }
    else {
        res = `${result} won.`;
    }
    document.getElementById('response').innerHTML = res;
}
main();