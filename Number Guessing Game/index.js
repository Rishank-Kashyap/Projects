let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#guessbutton')
const userInput = document.querySelector('#input')
const previousGuess = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.counter')
const startOver = document.querySelector('.result')
const messageBox = document.querySelector('#message');

let prevGuess = []
let countGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess<1 || guess>100) {
        alert('Please enter a number between the valid range')
    }
    else{
        prevGuess.push(guess);
        if(countGuess>=10){
            clearGuess(guess)
            displayMessage(`You lost the game😥. The random number was ${randomNumber}`)
            endGame()
        }
        else{
            clearGuess(guess)
            checkGuess(guess)
        }
    }
}

function  checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage('Congratulations😍, You won the game.')
        endGame()
    }
    else if (guess > randomNumber) {
        displayMessage('Your Guess is High👍.');
    }
    else if (guess < randomNumber) {
        displayMessage('Your Guess is Low👎.');
    }
}

function clearGuess(guess) {
    userInput.value = ''
    previousGuess.innerHTML += `${guess} `
    countGuess++
    remainingGuess.innerHTML = `${11-countGuess}`
}

function displayMessage(message) {
    messageBox.innerHTML = `<p>${message}</p>`
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    const p = document.createElement('p')
    p.classList.add('startButton')
    p.innerHTML = `<button id="startGame">Play Again 😉</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#startGame')
    newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        countGuess = 1
        previousGuess.innerHTML = ''
        remainingGuess.innerHTML = `${11-countGuess}`
        userInput.removeAttribute('disabled', '')
        startOver.removeChild(document.querySelector('.startButton'))
        messageBox.innerHTML = ''
        playGame = true
    })
}