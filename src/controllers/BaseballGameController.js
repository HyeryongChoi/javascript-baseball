const BaseballGame = require('../models/BaseballGame');
const { GAME_RESULT } = require('../utils/constants');
const { printGameStart, printCurrent, printGameFinish } = require('../views/OutputView');
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
      ? this.finishGame()
      : readPlayerNumbers(this.onReadPlayerNumbers.bind(this));
  }

  finishGame() {
    printGameFinish();
  }
}
module.exports = BaseballGameController;
