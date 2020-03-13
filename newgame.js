function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        return 'Please enter valid option';
    }
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'You have eaten by a bear';
        } else {
            return 'You have taken the gun';
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have shot by a gun booohooo!!!!!!!!';
        } else {
            return 'You have killed the human';
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You have shot a bear';
        }
    }
}
11.
function playGame() {
    var promptUsesChoice = prompt("Please choose bear, human or gun");
    var userChoice = getUserChoice(promptUsesChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
