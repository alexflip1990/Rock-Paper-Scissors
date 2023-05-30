/**
 * Create constants for dom elements 
 * to be used later
 */
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('comp-score');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const restartDiv = document.getElementById('restart');
const choices = ['rock', 'paper', 'scissors'];
let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

/**
 * Add event listeners to all of the buttons
 * this will listen for any of the buttons
 * that are clicked
 */
function setUp() {
    rockDiv.addEventListener('click', function () {
        playerOption('rock');
    });

    paperDiv.addEventListener('click', function () {
        playerOption('paper');
    });

    scissorsDiv.addEventListener('click', function () {
        playerOption('scissors');
    });

    restartDiv.addEventListener('click', function () {
        reset();
    });

}

setUp();

/**
 * This function calls the players choice for
 * rock,paper,scissors, the code on line 51 I received help from
 * a family friend Dylan 
 */
function playerOption(option) {
    player.innerHTML = '<img src="assets/images/' + option + '.png" />';
    playerChoice = option;
    computerOption();

}

/**
 * This function generates the computers
 * random choice for rock, paper, scissors, the code on line
 * 64 I received help from a family friend Dylan
 */
function computerOption() {
    let choice = Math.floor(Math.random() * 3);
    computer.innerHTML = '<img src="assets/images/' + choices[choice] +
        '.png" />';
    computerChoice = choices[choice];
    decidesWinner();
}

/**
 * This function decides who
 * wins and loses
 */
function decidesWinner() {
    console.log(playerChoice + ' : ' + computerChoice);
    if (playerChoice === computerChoice) {
        alert("It's a draw!!!!");
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        alert("Rock beats Scissors, you WIN!");
        playerWins();
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        alert("Paper beats Rock, sorry you LOSE!");
        playerLoses();
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        alert("Paper beats Rock, you WIN!");
        playerWins();
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        alert("Scissors beats Paper, sorry you LOSE!");
        playerLoses();
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        alert("Scissors beats Paper, you WIN!");
        playerWins();
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        alert("Rock beats Scissors, sorry you LOSE!");
        playerLoses();
    }

}

/**
 * This function increase the players score
 * by one 
 */
function playerWins() {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;

}
/**
 *This function increase the computers score
 by one
 */
function playerLoses() {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
}

/**
 * This function resets the scores back to
 * zero when reset button is clicked
 */
function reset() {
    playerScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScore = 0;
    computerScoreSpan.innerHTML = computerScore;
}