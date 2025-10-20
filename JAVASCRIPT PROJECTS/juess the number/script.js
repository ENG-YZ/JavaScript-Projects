  
// //   select HTML elements and the main variable 
//   const maxAttempts = 10;
//   let targetNumber = generateRandomNumber(1, 100);
//   let remainingAttempts = maxAttempts;
//   let hintUsed = false;




//   // function to make a random number each time we click try button or reload the page 
// function generateRandomNumber (min , max) {
//     return Math.floor(Math.random() * (max - min + 1) * min);
// } 
// console.log(targetNumber);
// // set feedback messege 
// feedbackEl.textContent = 'اضغط "حاول" بعد ما تدخل رقمك'
// function setFeedback (msg) {
//     feedbackEl.textContent  = msg;
// }


















// generate random number 
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
// define the number of tring 
  let guessHistory = [];

// DOM elements 
  const guessInput = document.getElementById('guessInput');
  const submitBtn = document.getElementById('submitBtn');
  const restartBtn = document.getElementById('restartBtn');
  const hintBtn = document.getElementById('hintBtn');

  const feedbackEl = document.getElementById('feedback');
  const attemptsEl = document.getElementById('attempts');
  const historyEl = document.getElementById('history');
  const lastResultEl = document.getElementById('last-result');
  const rangeEl = document.getElementById('range');

//   first function 
// gusses input 
document.getElementById('submitBtn').addEventListener('click', function () {
  const userGuess = Number(document.getElementById('guessInput').value);
  console.log('رقم المستخدم:', userGuess);
  if(!userGuess)
    {
        document.getElementById('feedback').textContent = "من فضلك ادنخل رقم صالح"
    }
attemptsLeft--;
    if(userGuess === randomNumber)
        {
            feedbackEl.textContent = "مبرزك تخمينك صح  🎉"
        }
    else if (userGuess > randomNumber)
         {
         document.getElementById('feedback').textContent = '🔻 الرقم أصغر من كده.';
    } 
    else 
        {
            document.getElementById('feedback').textContent = '🔺 الرقم أكبر من كده.';
        }
        document.getElementById('attempts').textContent = attemptsLeft;


        lastResultEl.textContent = userGuess;
        if(!window.guessHistory) window.guessHistory=[];
        window.guessHistory.push(userGuess);
        document.getElementById('history').textContent = 'التاريخ: ' + window.guessHistory.join(', ');

        if (attemptsLeft <= 0 && userGuess !== randomNumber) {
            document.getElementById('feedback').textContent = `💀 انتهت اللعبة! الرقم الصحيح كان ${randomNumber}.`;
            document.getElementById('submitBtn').disabled = true;
            document.getElementById('guessInput').disabled = true;
}

});

restartBtn.addEventListener('click' , function(){
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  window.guessHistory = [];
  document.getElementById('guessInput').value = '';
  document.getElementById('feedback').textContent = 'اضغط "حاول" بعد ما تدخل رقمك.';
  document.getElementById('attempts').textContent = attemptsLeft;
  document.getElementById('history').textContent = 'التاريخ: لا توجد محاولات بعد';
  document.getElementById('last-result').textContent = '--';
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('guessInput').disabled = false;
})

document.getElementById('hintBtn').addEventListener('click', function () {
  const minHint = randomNumber - 10 < 1 ? 1 : randomNumber - 10;
  const maxHint = randomNumber + 10 > 100 ? 100 : randomNumber + 10;

  document.getElementById('feedback').textContent =
    `💡 التلميح: الرقم بين ${minHint} و ${maxHint}`;
});
