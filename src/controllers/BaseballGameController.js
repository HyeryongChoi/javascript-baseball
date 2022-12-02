const BaseballGame = require('../models/BaseballGame');
const { printGameStart } = require('../views/OutputView');
const { readPlayerNumbers } = require('../views/InputView');

class BaseballGameController {
  #baseballGame;

  playGame() {
    printGameStart();
    this.#baseballGame = new BaseballGame();
    readPlayerNumbers(this.onReadPlayerNumbers.bind(this));
  }

  onReadPlayerNumbers(input) {
    this.#baseballGame.renewPlayer(input);
  }
}
module.exports = BaseballGameController;
