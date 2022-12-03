const BaseballGame = require('../models/BaseballGame');
const { GAME, GAME_RESULT, ERROR_MESSAGE } = require('../utils/constants');
const {
  printGameStart,
  printCurrent,
  printGameFinish,
  printGameQuit,
} = require('../views/OutputView');
const { readPlayerNumbers, readRestartOrQuit } = require('../views/InputView');

class BaseballGameController {
  #baseballGame;

  playGame() {
    printGameStart();
    this.restartGame();
  }

  restartGame() {
    this.#baseballGame = new BaseballGame();
    readPlayerNumbers(this.onReadPlayerNumbers.bind(this));
  }

  onReadPlayerNumbers(input) {
    const result = this.#baseballGame.getResult(input);
    printCurrent(result);
    this.finishOrRetry(result);
  }

  finishOrRetry(result) {
    return result === GAME_RESULT.threeStrike
      ? this.finishGame()
      : readPlayerNumbers(this.onReadPlayerNumbers.bind(this));
  }

  finishGame() {
    printGameFinish();
    readRestartOrQuit(this.onReadRestartOrQuit.bind(this));
  }

  onReadRestartOrQuit(input) {
    if (input === GAME.restart) this.restartGame();
    if (input === GAME.quit) printGameQuit();
    if (input !== GAME.restart && input !== GAME.quit) {
      throw new Error(ERROR_MESSAGE.invalidCommand);
    }
  }
}
module.exports = BaseballGameController;
