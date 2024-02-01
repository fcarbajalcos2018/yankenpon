
const getComputerChoice = () => {
    const numericChoice = Math.round(Math.random() * 2) + 1; // Between 1 and 3 inclusive: 2 + 1 = 3
    let choice = '';
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
            break;
    }
    return choice;
}

const getPlayerChoice = () => {
    const choice = prompt('Enter your choice: Rock, Paper or Scissors');
    const caseCorrectChoice = choice.toLowerCase();
    console.log(caseCorrectChoice);
    return 0;
}

const main = () => {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
}
main();