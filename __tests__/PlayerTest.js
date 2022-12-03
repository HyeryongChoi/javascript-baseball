const Player = require('../src/models/Player');

describe('Player 테스트', () => {
  test.each([[['012']], [['122']], [['12a']]])(
    '유효한 숫자입력이 아니면 예외를 발생시킨다.',
    (input) => {
      const player = new Player();
      expect(() => player.renew(input)).toThrow('[ERROR]');
    },
  );

  test.each([
    [[1, 2, 3], '123', { strike: 3, ball: 0 }],
    [[1, 2, 3], '124', { strike: 2, ball: 0 }],
    [[1, 2, 3], '321', { strike: 1, ball: 2 }],
    [[1, 2, 3], '456', { strike: 0, ball: 0 }],
  ])('입력한 수에 대한 결과를 볼, 스트라이크 개수로 반환한다.', (computer, numbers, score) => {
    const player = new Player();
    player.renew(numbers);
    expect(player.getScore(computer)).toEqual(score);
  });
});
