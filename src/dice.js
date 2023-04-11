//Buisness Logic for Game

function Game(){
  this.gamePlayers = {}
  this.currentId = 1;
  this.maxId = 0;
}

Game.prototype.addPlayer = function(player){
  player.id = this.assignId();
  this.gamePlayers[player.id] = player;
};

Game.prototype.assignId = function(){
//  this.currentId += 1;
  this.maxId += 1;
  return this.maxId;
};

Game.prototype.findPlayer = function(){
  // if(this.gamePlayers[id] !== undefined){
  //   return this.addPlayer[id];
  // } else {
  //   return this.addPlayer[0];
  // }
  let currentPlayer;
  Object.keys(this.gamePlayers).forEach(function(key) {
    //  console.log("key",key,typeof(gameToDisplay.currentId),gameToDisplay.currentId.toString() ===  key)
    if(game.currentId.toString() ===  key){
      currentPlayer = this.gamePlayers[key];
    }
  });
  return currentPlayer;
}

Game.prototype.updateCurrentId = function(){
  console.log("type current + max:",typeof(this.currentId),typeof(this.maxId));
  if(this.currentId >= this.maxId){
    this.currentId = 1;
  } else {
    this.currentId += 1;
  }
};

//Business Logic for Players
function Player(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;  
  this.roundScore = 0;
  this.roll = 0;
  //this.scoreHistory = [];
}

//Business Logic for Player Turns

Player.prototype.playerTurn = function() {
  this.rollDice();
  console.log(this.roll,this.roundScore);
  // if (this.roll === 1) {
  //   this.roundScore = 0;
  //   this.holdDice();
  //   console.log("roll = 0, pass turn");
  // } else  {
  //   this.roundScore += this.roll;
  // }
  this.roundScore += this.roll;
 // this.checkWin();
  
  // call function to show updated score
};

Player.prototype.rollDice = function() {
  this.roll = Math.ceil(Math.random()*6); 
};

Player.prototype.checkWin = function(){
  if(this.roundScore + this.totalScore >= 100){
    alert("This player has won the game");
  }
};

Player.prototype.holdDice = function(){
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  this.roll = 0;
};

// Player.prototype.passTurn = function() {

//   // WIP
//   // update database of palyers to go to next player in the list 
// };