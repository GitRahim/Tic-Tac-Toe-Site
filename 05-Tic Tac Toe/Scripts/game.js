function startNewGame() {
  if (
    players[0].name === "" ||
    players[1].name === "" ||
    players[0].name === players[1].name
  ) {
    alert("Please set names for players. Names can't be equal or empty.");
    return;
  }

  resetGame();

  activePlayerNameEl.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  gameFinished = false;
  gameOverEl.firstElementChild.innerHTML = `you won <span id="winner-name">Player Name</span>!`;
  gameOverEl.style.display = "none";
  turnParagraphEl.style.display = "block";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }

  gameBoardCells.forEach((cell) => {
    cell.classList.remove("disabled");
    cell.textContent = "";
  });
}

function clickBoard(e) {
  if (
    e.target.tagName !== "LI" ||
    e.target.classList.contains("disabled") ||
    gameFinished === true
  ) {
    return;
  }
  const selectedCell = e.target;
  selectedCell.textContent = players[activePlayer].symbol;
  selectedCell.classList.add("disabled");

  const selectedCol = +selectedCell.dataset.col;
  const selectedRow = +selectedCell.dataset.row;

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerId = gameIsOver();
  if (winnerId !== 0) {
    gameEnd(winnerId);
  }

  currentRound++;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  activePlayerNameEl.textContent = players[activePlayer].name;
}

function gameIsOver() {
  //checking vertically
  for (let row = 0; row < 3; row++) {
    if (
      gameData[row][0] > 0 &&
      gameData[row][0] === gameData[row][1] &&
      gameData[row][1] === gameData[row][2]
    ) {
      return gameData[row][0];
    }
  }

  //checking horizentally
  for (let col = 0; col < 3; col++) {
    if (
      gameData[0][col] > 0 &&
      gameData[0][col] === gameData[1][col] &&
      gameData[1][col] === gameData[2][col]
    ) {
      return gameData[0][col];
    }
  }

  //checking diognally (\)
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  )
    return gameData[0][0];

  //checking diognally (/)
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  )
    return gameData[0][2];

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function gameEnd(winnerId) {
  gameFinished = true;

  turnParagraphEl.style.display = "none";
  gameOverEl.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    document.getElementById("winner-name").textContent = winnerName;
  } else {
    gameOverEl.firstElementChild.textContent = "It's a draw!";
  }
}
