// 게임에서 사용되는 말을 상수로 정의합니다.
export const PLAYER = {
  ONE: "🎃",
  TWO: "🤖",
};

// 게임의 승리 조건
export const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
