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
}

module.exports = Player;
