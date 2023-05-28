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

/**
 * Add event listeners to all of the buttons
 * this will listen for any of the buttons
 * that are clicked
 */
function setUp() {
    rockDiv.addEventListener('click', function () {
        playerChoice('rock');
    });

    paperDiv.addEventListener('click', function () {
        playerChoice('paper');
    });

    scissorsDiv.addEventListener('click', function () {
        playerChoice('scissors');
    });

    restartDiv.addEventListener('click', function () {

    });

}

setUp();

/**
 * This function calls the players choice for
 * rock,paper,scissors 
 */
function playerChoice(option) {
    console.log(option);
    player.innerHTML = '<img src="assets/images/' + option + '.png" />';

}