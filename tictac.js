let flag = 1;
let gameStatus = document.getElementById("game-status");

// Function to handle player turn
function handlePlayerTurn(boxId) {
  let box = document.getElementById(boxId);
  if (flag === 1) {
    box.innerHTML = "X";
    flag = 0;
  } else {
    box.innerHTML = "0";
    flag = 1;
  }
  checkGameStatus();
}

// Function to check game status
function checkGameStatus() {
  let boxes = [];
  for (let i = 1; i <= 9; i++) {
    boxes.push(document.getElementById("b" + i).innerHTML);
  }

  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    let condition = winConditions[i];
    if (boxes[condition[0]] === boxes[condition[1]] && boxes[condition[1]] === boxes[condition[2]] && boxes[condition[0]] !== "") {
      gameStatus.innerHTML = "Player " + boxes[condition[0]] + " won";
      disableAllBoxes();
      return;
    }
  }

  // Check for tie
  if (!boxes.includes("")) {
    gameStatus.innerHTML = "Match Tie";
  }
}

// Function to disable all boxes
function disableAllBoxes() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).style.pointerEvents = "none";
  }
}

// Function to reset game
function resetGame() {
  location.reload();
}

// Add event listeners to all boxes
for (let i = 1; i <= 9; i++) {
  document.getElementById("b" + i).addEventListener("click", function() {
    handlePlayerTurn(this.id);
  });
}

// Add event listener to reset button
document.getElementById("reset-button").addEventListener("click", resetGame);