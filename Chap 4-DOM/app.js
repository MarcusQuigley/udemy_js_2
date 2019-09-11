/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
 const btnHold = document.querySelector('.btn-hold');
const imgDice = document.querySelector('.dice');
const imgPreviousDice = document.querySelector('.previous-dice');
 let winningScore = 20;
var scores, currentScore, previousDice, currentPlayer, dice ;

setup();
 

function setup(){
    initControls();
    btnNew.addEventListener('click', newGame);
    btnRoll.addEventListener('click', rollDice);
    btnHold.addEventListener('click', hold);
    btnRoll.style.display = 'none';
    btnHold.style.display = 'none';
}

function initControls(){
    scores = [0,0];
    currentScore = 0;
    currentPlayer = 0;
    imgDice.style.display = 'none'; 
    imgPreviousDice.style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}

function newGame(  ){
    initControls();   
    btnRoll.style.display = 'block';
    btnHold.style.display = 'block';
    setWinningScore();
}

function setWinningScore(){
    var tempVal = document.querySelector('.winning-score-input').value;
    tempVal === "" || isNaN(tempVal) ?  winningScore = 100 : winningScore = tempVal;
   
    console.log(`winning score is ${winningScore}`);
}

function rollDice( ){
    dice = Math.floor(Math.random() * 6) + 1;
 
   
    // imgDice.style.display = 'block';
    // imgDice.src = `dice-${dice}.png`;
    displayDice(dice);
    if (dice == 1){
        changePlayer();
    } else if (dice === 6 && previousDice === 6){
        scores[currentPlayer] = 0
        document.getElementById(`score-${currentPlayer}`).textContent = 0;
        changePlayer();
    } else {
        currentScore += dice;
        previousDice = dice;
        document.getElementById(`current-${currentPlayer}`).textContent = currentScore;
    }  
 }

function displayDice(dice){
 
    imgDice.style.display = 'block';
    imgDice.src = `dice-${dice}.png`;

    if (previousDice>0){
        imgPreviousDice.style.display = 'block';
        imgPreviousDice.src = `dice-${previousDice}.png`;
    }
}

function changePlayer(){
    document.getElementById(`current-${currentPlayer}`).textContent = 0;
    document.querySelector(`.player-${currentPlayer}-panel`).classList.toggle('active');

    (currentPlayer == 0) ? currentPlayer=1: currentPlayer=0;
    document.querySelector(`.player-${currentPlayer}-panel`).classList.toggle('active');

    previousDice = 0;
    currentScore = 0;
}

function hold(){
    imgDice.style.display = 'none';
    imgPreviousDice.style.display = 'none';

    scores[currentPlayer] += currentScore;
    document.getElementById(`score-${currentPlayer}`).textContent = scores[currentPlayer];
    if (scores[currentPlayer] >= winningScore)
    {
        //game over
        document.querySelector(`#name-${currentPlayer}`).textContent = 'Winner!';
        btnRoll.style.display = 'none';
        btnHold.style.display = 'none';
    } else{
        changePlayer();
    }
}

