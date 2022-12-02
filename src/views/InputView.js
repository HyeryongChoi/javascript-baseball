const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/constants');

const InputView = {
  readPlayerNumbers(callback) {
    Console.readLine(INPUT_MESSAGE.enterNumbers, callback);
  },
};

module.exports = InputView;
