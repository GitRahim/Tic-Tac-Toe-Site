let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameFinished = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const playerConfigOverlayEl = document.getElementById("config-overlay");

const backdropEl = document.getElementById("backdrop");

const formEl = document.querySelector("form");

const btnEditPlayer1El = document.getElementById("btn-edit-player-1");

const btnEditPlayer2El = document.getElementById("btn-edit-player-2");

const btnConfigCancelEl = document.getElementById("btn-config-cancel");

const btnConfigSubmitEl = document.getElementById("btn-config-submit");

const configFormName = document.getElementById("config-name");

const formErrorEl = document.getElementById("form-errors");

const btnStartGameEl = document.getElementById("start-game-btn");
const gameArea = document.getElementById("active-game");

const gameBoard = document.getElementById("game-board");
const gameBoardCells = document.querySelectorAll("#game-board li");

const activePlayerNameEl = document.getElementById("active-player-name");

const gameOverEl = document.getElementById("game-over");

const turnParagraphEl = document.getElementById("turn-p");

//listeners
btnEditPlayer1El.addEventListener("click", openPlayerConfig);
btnEditPlayer2El.addEventListener("click", openPlayerConfig);

btnConfigCancelEl.addEventListener("click", cancelConfig);
backdropEl.addEventListener("click", cancelConfig);

formEl.addEventListener("submit", savePlayerConfig);

btnStartGameEl.addEventListener("click", startNewGame);

gameBoard.addEventListener("click", clickBoard);
