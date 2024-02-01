
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
    console.log(caseCorrectChoice);
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

const main = () => {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
}
main();