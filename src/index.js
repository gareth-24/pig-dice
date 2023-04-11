//UI Logic
//Global Variable for Game - database
let game = new Game();

function displayGame(gameToDisplay, branch)  {
  let currentPlayer = gameToDisplay.gamePlayers[1];
  console.log(currentPlayer);
  let rolledOne = false;
  switch(branch){
    case(1): 
      // if(gameToDisplay.maxId === 1){
      //   currentPlayer = gameToDisplay.gamePlayers[1];
      // }
    break;
    case(2):
      Object.keys(gameToDisplay.gamePlayers).forEach(function(key) {
        //  console.log("key",key,typeof(gameToDisplay.currentId),gameToDisplay.currentId.toString() ===  key)
        if(gameToDisplay.currentId.toString() ===  key){
          currentPlayer = gameToDisplay.gamePlayers[key];
          currentPlayer.playerTurn();
        }
      });
      if(currentPlayer.roll === 1){
        rolledOne = true;
        currentPlayer.roundScore = 0;
        gameToDisplay.updateCurrentId();
        currentPlayer = gameToDisplay.gamePlayers[gameToDisplay.currentId];
      }
      currentPlayer.checkWin();
      break;
    case(3):
    Object.keys(gameToDisplay.gamePlayers).forEach(function(key) {
      //  console.log("key",key,typeof(gameToDisplay.currentId),gameToDisplay.currentId.toString() ===  key)
      if(gameToDisplay.currentId.toString() ===  key){
        currentPlayer = gameToDisplay.gamePlayers[key];
        currentPlayer.holdDice();
      }
    });
    gameToDisplay.updateCurrentId();
    currentPlayer = gameToDisplay.gamePlayers[gameToDisplay.currentId];
    break;
}
    changeInfoPlayer(currentPlayer,rolledOne);

}

function changeInfoPlayer(currentPlayer,rolledOne){
  if(rolledOne){
    document.querySelector("#rolled-one").innerText = "Sorry the previous player rolled a one and it is not there turn anymore!";
  } else{
    document.querySelector("#rolled-one").innerText = "";
  }
  document.querySelector("#player-name").innerText = currentPlayer.playerName;
  document.querySelector("#roll-amount").innerText = currentPlayer.roll;
  document.querySelector("#round-amount").innerText = currentPlayer.roundScore;
  document.querySelector("#total-score").innerText = currentPlayer.totalScore;  
  //   document.querySelector("#everyone-score").innerText = player.totalScore;
}

function updateTotalPlayers(game){
  document.querySelector("#total-player").innerText ="";
  let totalPlayers = [];
  Object.keys(game.gamePlayers).forEach(function(key){
    totalPlayers.push(" " + game.gamePlayers[key].playerName)
  })
  document.querySelector("#total-player").append(totalPlayers);
  
}

function handleFormSubmission(event)  {
  event.preventDefault();
  const inputtedPlayerName = document.querySelector("input#name1").value;
  let newPlayer = new Player(inputtedPlayerName);
  console.log("the new player constructor: ",newPlayer)
  game.addPlayer(newPlayer);
  // add newPlayer to game here if we make a Game() constructor
  displayGame(game,1); 
  updateTotalPlayers(game);
  document.querySelector("input#name1").value = null;
}

function handleRollButton(event)  {
  //Need to find which id to grab
  event.preventDefault();
  displayGame(game,2);
}

function handlePassButton(event)  {
  event.preventDefault();
  displayGame(game,3);
  
}
  
window.addEventListener("load", function(){
  document.querySelector("form#game-setup").addEventListener("submit", handleFormSubmission);
  document.querySelector("button#roll").addEventListener("click", handleRollButton);
  document.querySelector("button#hold").addEventListener("click", handlePassButton);
});
