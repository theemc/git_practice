/*

let userChoice ='';
function computerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
      case 0: return 'rock';
        break;
      case 1: return 'paper';
        break;
      case 2: return 'scissors';
        break;
      default: return 'error has occured'
        break;
    }
}

if (userChoice === 'rock' && computerChoice() === rock) {
    console.log('It\'s a tie!');
} else if (userChoice === 'rock' && computerChoice() === 'paper') {
    console.log('The user wins!')
}

*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Please enter either rock, paper, or scissors.'
  }
}

const getComputerChoice = () => {
  let roll = Math.floor(Math.random() * 3);
  switch(roll) {
    case 0: 
    return 'rock';
    break;
    case 1: 
    return 'paper';
    break;
    case 2: 
    return 'scissors';
    break;
    default: 
    return 'error has occured'
    break;
  }
}

function determineWinner(getUserChoice, getComputerChoice) {
  if (userChoice === computerChoice) {
  }
}