const BaseballGame = require('../models/BaseballGame');
const { printGameStart } = require('../views/OutputView');

class BaseballGameController {
  #baseballGame;

  playGame() {
    printGameStart();
    this.#baseballGame = new BaseballGame();
  }
}
module.exports = BaseballGameController;
