const { RANDOM_NUMBER, ERROR_MESSAGE } = require('../utils/constants');
const { isCorrectComposition, isAllDifferent } = require('../utils/Validator');

class Player {
  #numbers;

  renew(input) {
    this.#numbers = input;
    if (!this.validate(input)) throw new Error(ERROR_MESSAGE.invalidInput);
  }

  validate(input) {
    if (
      isCorrectComposition(input) &&
      isAllDifferent(input) &&
      input.length === RANDOM_NUMBER.size
    ) {
      return true;
    }
    return false;
  }

  getScore(computer) {
    const score = { strike: 0, ball: 0 };
    for (let i = 0; i < this.#numbers.length; i++) {
      if (computer[i] === parseInt(this.#numbers[i])) {
        score.strike += 1;
        continue;
      }
      if (computer.includes(parseInt(this.#numbers[i]))) score.ball += 1;
    }
    return Object.freeze(score);
  }
}

module.exports = Player;
