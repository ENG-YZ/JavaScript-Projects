'use strict';
//selecting elemnts
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0EL  = document.getElementById('current--0')
const current1EL  = document.getElementById('current--1')
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore , activePlayer , playing;
function initialization(){
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    playing = true;
    scores =[0 , 0];
    currentScore = 0;
    activePlayer = 0;
    //starting condition 
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    diceEl.classList.add('hidden');
}



const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    currentScore = 0; 
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

//rolling dice functionality
btnRoll.addEventListener('click' , function(){
    // 1. Generating a random dice roll
    if(playing){
    const dice = Math.trunc(Math.random()*6)+1;
    // 2. display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. check for rrolled 1 
    if (dice !== 1){
        //add dice to current score 
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } 
    else {
        //switch to next player
        switchPlayer();
    }
}
})
btnHold.addEventListener('click' , function(){
    if(playing){
    // 1. add current score to the active player's score 
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. check if player score is >= 100
    if(scores[activePlayer] >= 100){
        playing = false
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        document.querySelector(`.player--${activePlayer}`).classList.remove("active--player")
    } 
    else{
        // 4. switch to the next player
        switchPlayer();
    }
    // 3. finish the game 
    }
})
initialization();

btnNew.addEventListener('click',function(){
    initialization()
})