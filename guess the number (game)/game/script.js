const correctAnswer = document.querySelector(".correct");
const guessinput = document.querySelector(".guessinput");
const check = document.querySelector(".check");
const answer = document.querySelector(".answer");
const scorespan = document.querySelector(".scoresapn");
const highscorespan = document.querySelector(".highscorespan")
const htmlscore = document.querySelector(".score")
const again = document.querySelector(".again");
let randomnumber = Math.trunc(Math.random()*30)+1;
let highscore = 0
const body = document.body;
let score  = 20;
check.addEventListener("click"  , function(){
    guess = Number(document.querySelector(".guessinput").value) ;
     
    if (!guess) {
        answer.textContent = "No number!";
        return;
    }

    if (score > 1) {
        if (guess > randomnumber) {
            answer.textContent = 'Too high!';
            body.style.background = "red";
            score--;
            scorespan.textContent = score;
        } else if (guess < randomnumber) {
            answer.textContent = 'Too low!';
            body.style.background = "red";
            score--;
            scorespan.textContent = score;
        } else if (guess === randomnumber) {
            answer.textContent = 'Correct!';
            body.style.background = "green";
            correctAnswer.textContent = randomnumber
            if (score > highscore) {
                highscore = score;
                highscorespan.textContent = highscore;
            }
        }
    } else if (score === 1) {
        answer.textContent = "You lose!";
        scorespan.textContent = 0;
    }
});
again.addEventListener("click", function() {
    score = 20;
    randomnumber = Math.trunc(Math.random() * 30) + 1;
    scorespan.textContent = score;
    correctAnswer.textContent = "?"
    answer.textContent = 'Start guessing...';
    guessinput.value = '';
    body.style.background = '#222';
});