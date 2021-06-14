const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('Error!')
    }
}
console.log(getUserChoice('rock'))

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock'
            break
        case 1:
            return 'paper'
            break
        case 2:
            return 'scissors'
    }
}
console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => { //0

    if (userChoice === computerChoice) { //1
        return 'The game is a tie!'

    } else if (userChoice === 'rock') {  // 1
        if (computerChoice === 'paper') {
            return 'The computer won!'
        } else {
            return 'You won'
        }
    } else if (userChoice === 'paper') {  // 1
        if (computerChoice === 'scissors') {
            return 'The computer won!'
        } else {
            return 'You won!'
        }
    } else if (userChoice === 'scissors') { // 1
        if (computerChoice === 'rock') {
            return 'The computer won'
        } else {
            return 'You won!'
        }
    }
}                                       // 0



const playGame = () => {
    const userChoice = getUserChoice('scissors')
    const computerChoice = getComputerChoice()
    console.log('You threw: ' + userChoice)
    console.log('The computer threw: ' + computerChoice)
    console.log(determineWinner(userChoice, computerChoice))

}

playGame()









