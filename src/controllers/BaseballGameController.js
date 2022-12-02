const BaseballGame = require('../models/BaseballGame');
const { GAME, GAME_RESULT, ERROR_MESSAGE } = require('../utils/constants');
const {
  printGameStart,
  printCurrent,
  printGameFinish,
  printRealGameFinish,
} = require('../views/OutputView');
const { readPlayerNumbers, readRetryOrFinish } = require('../views/InputView');

class BaseballGameController {
  #baseballGame;

  playGame() {
    printGameStart();
    this.retryGame();
  }

  retryGame() {
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
      ? this.finishGame()
      : readPlayerNumbers(this.onReadPlayerNumbers.bind(this));
  }

  finishGame() {
    printGameFinish();
    readRetryOrFinish(this.onReadRetryOrFinish.bind(this));
  }

  onReadRetryOrFinish(input) {
    if (input === GAME.retry) this.retryGame();
    if (input === GAME.finish) printRealGameFinish();
    if (input !== GAME.retry && input !== GAME.finish) {
      throw new Error(ERROR_MESSAGE.invalidRetryOrFinish);
    }
  }
}
module.exports = BaseballGameController;
