const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/constants');
const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.gameStart);
  },
};

module.exports = OutputView;
