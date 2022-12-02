const GAME = Object.freeze({
  retry: '1',
  finish: '2',
});

const INPUT_MESSAGE = Object.freeze({
  enterNumbers: '숫자를 입력해주세요 : ',
  enterRetryOrFinish: `게임을 새로 시작하려면 ${GAME.retry}, 종료하려면 ${GAME.finish}를 입력하세요.\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  gameFinish: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  gameRealFinish: '게임을 완전히 종료합니다.',
  newLine: '\n',
});

const RANDOM_NUMBER = Object.freeze({
  min: 1,
  max: 9,
  size: 3,
});

const ERROR_MESSAGE = Object.freeze({
  invalidInput: `[ERROR] ${RANDOM_NUMBER.min}~${RANDOM_NUMBER.max}까지 서로 다른 임의의 수 ${RANDOM_NUMBER.size}개를 입력해야 합니다.`,
  invalidRetryOrFinish: `[ERROR] 게임을 새로 시작하려면 ${GAME.retry}, 게임을 종료하려면 ${GAME.finish}를 입력해야 합니다.`,
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
  GAME,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  RANDOM_NUMBER,
  ERROR_MESSAGE,
  GAME_RESULT,
};
