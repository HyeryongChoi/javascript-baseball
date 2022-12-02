const { printGameStart } = require('../views/OutputView');

class BaseballGameController {
  playGame() {
    printGameStart();
  }
}
module.exports = BaseballGameController;
