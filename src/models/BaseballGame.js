const { makeRandomNumbers } = require('./RandomNumbersMaker');
const { RANDOM_NUMBER, GAME_RESULT } = require('../utils/constants');
const Player = require('./Player');

class BaseballGame {
  #computer = makeRandomNumbers(RANDOM_NUMBER.size);
  #player = new Player();

  renewPlayer(input) {
    this.#player.renew(input);
    return this.getResult(this.#computer);
  }

  getResult(computer) {
    const score = this.#player.getScore(computer);
    if (score.ball === 0 && score.strike === 0) return GAME_RESULT.nothing;
    if (score.ball > 0 && score.strike === 0) return GAME_RESULT.ballOnly(score.ball);
    if (score.ball === 0 && score.strike > 0) return GAME_RESULT.strikeOnly(score.strike);
    if (score.ball > 0 && score.strike > 0)
      return GAME_RESULT.ballAndStrike(score.ball, score.strike);
  }
}
module.exports = BaseballGame;
