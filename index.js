const gameInfo = {
  maxNumRange: 2,
  randomNumber: 1
};

const playerInfo = {
  points: 0,
  stage: 1,
  username: ''
};

function genRandomNumber(endNumRange) {
  return Math.ceil((Math.random() * endNumRange));
}

function playGame(maxRange) {
  gameInfo.randomNumber = genRandomNumber(maxRange);

  const playerGuess = prompt(`Guess the number between 1 and ${maxRange}`);

  if (gameInfo.randomNumber === parseInt(playerGuess)) {
    console.log(`You guessed correctly ${playerInfo.username}`);
    playerInfo.points += 1;
    playerInfo.stage += 1;
    gameInfo.maxNumRange += 1;
    playGame(gameInfo.maxNumRange);
  } else {
    console.log(`You guessed wrongly ${playerInfo.username}`);
    const { username, points } = playerInfo;
    console.log(`You had ${points} point${points > 1 ? 's' : ''} ${username}`);
    restartGame();
  }
}

function restartGame() {
  const userInput = prompt(`Do you want to continue ${playerInfo.username} (Yes or No)`);

  if (userInput.toLowerCase() === 'no') {
    return;
  }
  resetGameStats();
  playGame(2);
}

function resetGameStats() {
  playerInfo.points = 0;
  playerInfo.stage = 1;
  gameInfo.maxNumRange = 2;
}

playerInfo.username = prompt('What is your username?');
playGame(gameInfo.maxNumRange);