/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// GAME VALUES
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;


// PLAY AGAIN EVENT LISTENER
game.addEventListener('mousedown', function(e){
  // Enact action when clicked on element with class ='play-again'
  if(e.target.className === 'play-again'){
    // reloads the page
    window.location.reload();
  }
}) 

// LISTEN FOR GUESS
guessBtn.addEventListener('click', function(){
  /* 
    parseInt - converts string into integer
               to verify check console if value is in blue(int) or black(string)
  */
  let guess = parseInt(guessInput.value);
  
  // Validate - NaN - Not a Number
  if(isNaN(guess) || guess < min || guess > max){
    // backticks are used to use string interpolation such as ${min} and ${max}
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');

  // Check if won
  } else if (guess === winningNum){
    // Game Over won
    gameOver(true, `${winningNum} is correct! You won!`);

  // If wrong number
  } else {
    guessesLeft -= 1;
    // Game continues - answer wrong

     // Change border color
    guessInput.style.borderColor = 'red';

    // Clear Input
    guessInput.value = '';

    // Tell user its the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')

    if(guessesLeft === 0 ){
      // Game over - lost
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
    }
  }
});

// GAME OVER
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input - prevents user from inputting value
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}


// GET RANDOM WINNING NUMBER
function getRandomNum(min, max){
  //Math.random()*10 would give random number 1-9 hence added +min to get random 1-10
  return Math.floor(Math.random()*(max-min+1)+min);
}

// SET MESSAGE
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}