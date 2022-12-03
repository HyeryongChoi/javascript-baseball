const { RANDOM_NUMBER, ERROR_MESSAGE } = require('../utils/constants');
const { isCorrectComposition, isAllDifferent } = require('../utils/Validator');

class Player {
  #numbers;

  renew(input) {
    this.#numbers = this.makeNumbers(input);
    if (!this.validate(input)) throw new Error(ERROR_MESSAGE.invalidInput);
  }

  makeNumbers(input) {
    return [...input].map(Number);
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
    this.#numbers.forEach((number, index) => {
      const isStrike = computer[index] === number;
      const isBall = !isStrike && computer.includes(number);
      if (isStrike) score.strike += 1;
      if (isBall) score.ball += 1;
    });
    return Object.freeze(score);
  }
}

module.exports = Player;
