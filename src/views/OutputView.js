const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/constants');

const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.gameStart);
  },

  printCurrent(result) {
    Console.print(result);
  },

  printGameFinish() {
    Console.print(OUTPUT_MESSAGE.gameFinish);
  },

  printRealGameFinish() {
    Console.print(OUTPUT_MESSAGE.gameRealFinish);
    Console.close();
  },
};

module.exports = OutputView;
