const INPUT_MESSAGE = Object.freeze({
  enterNumbers: '숫자를 입력해주세요 : ',
});

const OUTPUT_MESSAGE = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  newLine: '\n',
});

const RANDOM_NUMBER = Object.freeze({
  min: 1,
  max: 9,
  size: 3,
});

const ERROR_MESSAGE = Object.freeze({
  invalidInput: `[ERROR] ${RANDOM_NUMBER.min}~${RANDOM_NUMBER.max}까지 서로 다른 임의의 수 ${RANDOM_NUMBER.size}개를 입력해야 합니다.`,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  RANDOM_NUMBER,
  ERROR_MESSAGE,
};
