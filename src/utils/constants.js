const INPUT_MESSAGE = Object.freeze({
  enterNumbers: '숫자를 입력해주세요 : ',
});

const OUTPUT_MESSAGE = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  gameFinish: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
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

const GAME_RESULT = Object.freeze({
  threeStrike: '3스트라이크',
  nothing: '낫싱',
  ballOnly: (ball) => `${ball}볼`,
  strikeOnly: (strike) => `${strike}스트라이크`,
  ballAndStrike: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  strikeAll: (strike) => `${strike}스트라이크`,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  RANDOM_NUMBER,
  ERROR_MESSAGE,
  GAME_RESULT,
};
