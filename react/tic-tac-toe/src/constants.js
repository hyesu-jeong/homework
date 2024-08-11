// 게임에서 사용되는 말을 상수로 정의
export const PLAYER = {
  ONE: "🎃",
  TWO: "🤖",
};

// 게임 초기 상태 값
export const INITIAL_SQUARES = Array(9).fill(null);

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

// 게임이 끝났는지 진행중인지 확인 후 결과를 반환
export const calculateWinner = (squares) => {
  let winnerInfo = null;
  for (const [a, b, c] of WINNER_CONDITIONS) {
    const winner = squares[a];
    if (winner && winner === squares[b] && winner === squares[c]) {
      console.log("GAME OVER");
      winnerInfo = { winner, condition: [a, b, c] };
      break;
    }
  }
  return winnerInfo;
};
