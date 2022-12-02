const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/constants');

const InputView = {
  readPlayerNumbers(callback) {
    Console.readLine(INPUT_MESSAGE.enterNumbers, callback);
  },

  readRetryOrFinish(callback) {
    Console.readLine(INPUT_MESSAGE.enterRetryOrFinish, callback);
  },
};

module.exports = InputView;
