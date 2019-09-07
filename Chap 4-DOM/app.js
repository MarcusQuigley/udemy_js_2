/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// const btnNew = document.querySelector('.btn-new');
// const btnRoll = document.querySelector('.btn-roll');
// const btnHold = document.querySelector('.btn-hold');
const imgDice = document.querySelector('.dice');
 
var scores, currentScore,currentPlayer, dice;

setup();
//newGame();

function setup(){
    
    scores = [0,0];
    currentScore = 0;
    currentPlayer = 0;
    dice = 6;

    document.querySelector('.btn-new').addEventListener('click', newGame);
    document.querySelector('.btn-roll').addEventListener('click', rollDice);
    document.querySelector('.btn-hold').addEventListener('click', hold);
   
}

function newGame(e ){
    console.log('newGame');
    e.preventDefault();
     
    imgDice.style.display = 'none';//`dice-${dice}.png`;
    
    currentScore = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}

function rollDice(e){
    
    e.preventDefault();
    imgDice.style.display = 'block';
    imgDice.src = `dice-${dice}.png`;

    dice = Math.floor(Math.random() * 6) + 1;
    if (dice == 1){
        currentScore = 0;
        changePlayer();
        return;
    } else {
        currentScore += dice;
    }
    
    document.getElementById(`current-${currentPlayer}`).textContent = currentScore;
}

function changePlayer(){
    document.getElementById(`current-${currentPlayer}`).textContent = 0;
    document.querySelector(`.player-${currentPlayer}-panel`).classList.remove('active');
    scores[currentPlayer] += currentScore;
    (currentPlayer == 0) ? currentPlayer=1: currentPlayer=0;
    document.querySelector(`.player-${currentPlayer}-panel`).classList.add('active');
     
    currentScore = 0;
}

function hold(e){
    //console.log(typeof(document.getElementById(`score-${currentPlayer}`).textContent))
    console.log('hold');
    
    e.preventDefault();
    scores[currentPlayer] += currentScore;
    //console.log(typeof(document.getElementById(`score-${currentPlayer}`).innerHTML))
    //score = document.getElementById(`score-${currentPlayer}`).textContent
    //score += currentScore;
    document.getElementById(`score-${currentPlayer}`).textContent = scores[currentPlayer];
   
    changePlayer();
}

