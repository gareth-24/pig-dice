import {Game, Player} from "./../src/dice.js";

describe('Game', () => {

  test('should correctly create a game object with no players', () => {
    const game = new Game();
    expect(game.gamePlayers).toEqual({});
    expect(game.currentId).toEqual(1);
    expect(game.maxId).toEqual(0);
  });

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
    const player = new Player("player1");
    player.rollDice;
    expect(player.roll).toBeLessThanOrEqual(6);
  })

});