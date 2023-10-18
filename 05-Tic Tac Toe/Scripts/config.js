function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayEl.style.display = "block";
  backdropEl.style.display = "block";
}

function cancelConfig() {
  playerConfigOverlayEl.style.display = "none";
  backdropEl.style.display = "none";
  configFormName.classList.remove("error");
  formErrorEl.textContent = "";
  document.getElementById("playername").value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get("playername").trim();

  // if(playerName==='')
  if (!playerName) {
    configFormName.classList.add("error");
    formErrorEl.textContent = "Please enter your name.";
    return;
  }

  const updatedPlayerDataEl = document.getElementById(
    `player-${editedPlayer}-data`
  );

  updatedPlayerDataEl.children[1].textContent = playerName;

  players[editedPlayer - 1].name = playerName;
  cancelConfig();
}
