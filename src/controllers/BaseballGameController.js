const BaseballGame = require('../models/BaseballGame');
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
  }
}
module.exports = BaseballGameController;
