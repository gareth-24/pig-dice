import {Game, Player} from "./../src/dice.js";

describe('Game', () => {

  test('should correctly create a game object with no players', () => {
    const game = new Game();
    expect(game.gamePlayers).toEqual({});
    expect(game.currentId).toEqual(1);
    expect(game.maxId).toEqual(0);
  });

  test('should correctly assign an ID number by increments of 1', () => {
    const game = new Game();
    game.assignId();
    expect(game.maxId).toEqual(1);
  });

  test('should correctly add a player to the game object', () => {
    const game = new Game();
    const player1 = new Player("player1");
    const player2 = new Player("player2");
    game.addPlayer(player1);
    game.addPlayer(player2);
    expect(game.gamePlayers[1]).toEqual(player1);
    expect(game.gamePlayers[2]).toEqual(player2);
  })

});

describe('Player', () => {

  test('should correctly create a player object with a name and intial scores of 0', () => {
    const player = new Player("player1");
    expect(player.playerName).toEqual("player1");
    expect(player.totalScore).toEqual(0);
    expect(player.roundScore).toEqual(0);
    expect(player.roll).toEqual(0);
  });

  test('should correctly assing a random roll number for the player', ()=> {
    const playerWhoRolled = new Player("player1");
    playerWhoRolled.rollDice();
    expect(playerWhoRolled.roll).toBeLessThanOrEqual(6);
  });

  test('should correctly update the player total score when they hold and reset their round score back to 0', () => {
    const playerWhoHolds = new Player("player1");
    playerWhoHolds.roundScore = 12;
    playerWhoHolds.totalScore = 0;
    playerWhoHolds.holdDice();
    expect(playerWhoHolds.totalScore).toEqual(12);
    expect(playerWhoHolds.roundScore).toEqual(0);
  });
  
  test('it should correctly return true and alert the player when their score reaches 100', () => {
    const playerWhoWins = new Player("player1");
    const playerWhoLoses = new Player("player2");
    playerWhoWins.totalScore = 99;
    playerWhoWins.roundScore = 1;
    playerWhoLoses.totalScore = 90;
    playerWhoLoses.roundScore = 0;
    // expect(playerWhoWins.checkWin()).toBeTruthy();
    expect(playerWhoWins.checkWin()).toEqual(true);
    // expect(playerWhoLoses.checkWin()).toBeFalsy();
    expect(playerWhoLoses.checkWin()).toEqual(false);
  });

  test('it should correctly call the .rollDice method and add the dice roll value to the round score', () => {
    const thisPlayersTurn = new Player("player1");
    thisPlayersTurn.playerTurn();
    expect(thisPlayersTurn.roundScore).toBeLessThanOrEqual(6);
    expect(thisPlayersTurn.roundScore).toBeGreaterThan(0);
    expect(thisPlayersTurn.roundScore).toEqual(thisPlayersTurn.roll);
  });

});