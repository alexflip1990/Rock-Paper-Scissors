/**
 * Create constants for dom elements 
 * to be used later
 */
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('comp-score');
const results = document.querySelector('#results');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const restartDiv = document.getElementById('restart');
const choices = ['rock', 'paper', 'scissors'];
let playerChoice = '';
let computerChoice = '';

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

    });

}

setUp();

/**
 * This function calls the players choice for
 * rock,paper,scissors 
 */
function playerOption(option) {
    player.innerHTML = '<img src="assets/images/' + option + '.png" />';
    playerChoice = option;
    computerOption();

}

/**
 * This function generates the computers
 * random choice
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
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        alert("Paper beats Rock, sorry you LOSE!");
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        alert("Paper beats Rock, you WIN!");
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        alert("Scissors beats Paper, sorry you LOSE!");
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        alert("Scissors beats Paper, you WIN!");
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        alert("Rock beats Scissors, sorry you LOSE!");
    }

}

