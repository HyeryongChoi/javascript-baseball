const { Random } = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER } = require('../utils/constants');

const RandomNumbersMaker = {
  makeRandomNumbers(size) {
    const computer = [];
    while (computer.length < size) {
      const number = Random.pickNumberInRange(RANDOM_NUMBER.min, RANDOM_NUMBER.max);
      if (!computer.includes(number)) computer.push(number);
    }
    return Object.freeze(computer);
  },
};

module.exports = RandomNumbersMaker;
