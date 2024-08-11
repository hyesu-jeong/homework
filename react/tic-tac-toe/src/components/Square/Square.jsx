import S from "./Square.module.css";
import { PLAYER } from "../../constants";
import { calculateWinner } from "../../constants";
import { bool, func, number, array, object } from "prop-types";

Square.propTypes = {
  currentPlayer: bool,
  squares: array,
  setSquares: func,
  setcurrentPlayer: func,
  index: number,
  setWinnerInfo: func,
  setIsDraw: func,
  winnerInfo: object,
  history: array,
  setHistory: func,
};

function Square({
  currentPlayer,
  setcurrentPlayer,
  squares,
  setSquares,
  index,
  winnerInfo,
  setWinnerInfo,
  setIsDraw,
  history,
  setHistory,
}) {
  const handleClick = () => {
    if (squares[index] !== null || winnerInfo) return;

    // squares 배열 업데이트 코드
    const newPlayer = currentPlayer ? PLAYER.ONE : PLAYER.TWO;

    //squares를 직접 바꾸지 못하기때문에 newSquares에 복사
    const newSquares = [...squares];

    //선택한 square의 값을 newSquares 배열에 저장
    newSquares[index] = newPlayer;

    //squares 배열을 newSquares 배열로  업데이트
    setSquares(newSquares);
    const newWinnerInfo = calculateWinner(newSquares);
    setWinnerInfo(newWinnerInfo);

    //빈칸이 있을때는 배열에 null값이 있어서 false, 꽉차면 true
    if (!newWinnerInfo) {
      setIsDraw(newSquares.every(Boolean));
    }

    setcurrentPlayer(!currentPlayer);
    //history 배열에 newSquares 배열 저장
    setHistory([...history, newSquares]);
  };

  return (
    <button
      type="button"
      className={`${S.Square} ${
        winnerInfo?.condition.includes(index) ? S.active : ""
      }`}
      onClick={handleClick}>
      {squares[index]}
    </button>
  );
}

export default Square;
