const { makeRandomNumbers } = require('./RandomNumbersMaker');
const { RANDOM_NUMBER } = require('../utils/constants');

class BaseballGame {
  #computer;

  constructor() {
    this.createComputer(RANDOM_NUMBER.size);
  }

  createComputer(size) {
    this.#computer = makeRandomNumbers(size);
  }
}
module.exports = BaseballGame;
