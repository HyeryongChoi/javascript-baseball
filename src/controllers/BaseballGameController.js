const BaseballGame = require('../models/BaseballGame');
const { GAME_RESULT } = require('../utils/constants');
const { printGameStart, printCurrent } = require('../views/OutputView');
const { readPlayerNumbers } = require('../views/InputView');

class BaseballGameController {
  #baseballGame;

  playGame() {
    printGameStart();
    this.#baseballGame = new BaseballGame();
    readPlayerNumbers(this.onReadPlayerNumbers.bind(this));
  }

  onReadPlayerNumbers(input) {
    const result = this.#baseballGame.renewPlayer(input);
    printCurrent(result);
    this.goNextStep(result);
  }

  goNextStep(result) {
    return result == GAME_RESULT.threeStrike
      ? 1
      : readPlayerNumbers(this.onReadPlayerNumbers.bind(this));
  }
}
module.exports = BaseballGameController;
