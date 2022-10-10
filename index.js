// Generate random number
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// start the game
function startGame() {
  console.log("GAME START");
  let correct = true;
  const username = prompt('Enter your username: ');
  let min = 1;
  let max = 2;
  let point = 0;
  let stage = 1;
  while (correct) {
    console.log(`==================================================`)
    console.log(`(${username}): STAGE ${stage}`)
    const randomNumber = generateRandomNumber(min, max);
    const answer = prompt(`Predict the generated number between the range of ${min} and ${max} `);
    if (parseInt(answer) === randomNumber) {
      point += 3;
      console.log(`Your Answer (${answer}) is Correct`);
      console.log(`Points: ${point}`);
      max += 1;
      stage += 1;
    } else {
      correct = false;
      console.log(`Your Answer (${answer}) is Incorrect`);
      console.log(`Total points earned: ${point}`);
      console.log("GAME OVER")
    }
  }

}

startGame();