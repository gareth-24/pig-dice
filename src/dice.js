//Buisness Logic for Game

export function Game(){
  this.gamePlayers = {};
  this.currentId = 1;
  this.maxId = 0;
}

Game.prototype.addPlayer = function(player){
  player.id = this.assignId();
  this.gamePlayers[player.id] = player;
};

Game.prototype.assignId = function(){

  this.maxId += 1;
  return this.maxId;
};

Game.prototype.findPlayer = function(){

  let currentPlayer;
  Object.keys(this.gamePlayers).forEach(function(key) {
    if(Game.currentId.toString() ===  key){
      currentPlayer = this.gamePlayers[key];
    }
  });
  return currentPlayer;
};

Game.prototype.updateCurrentId = function(){
  if(this.currentId >= this.maxId){
    this.currentId = 1;
  } else {
    this.currentId += 1;
  }
};

//Business Logic for Players
export function Player(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;  
  this.roundScore = 0;
  this.roll = 0;
}

//Business Logic for Player Turns

Player.prototype.playerTurn = function() {
  this.rollDice();

  this.roundScore += this.roll;
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
