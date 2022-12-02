const { makeRandomNumbers } = require('./RandomNumbersMaker');
const { RANDOM_NUMBER } = require('../utils/constants');
const Player = require('./Player');

class BaseballGame {
  #computer = makeRandomNumbers(RANDOM_NUMBER.size);
  #player = new Player();

  renewPlayer(input) {
    this.#player.renew(input);
  }
}
module.exports = BaseballGame;
