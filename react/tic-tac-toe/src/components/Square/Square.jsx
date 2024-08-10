import S from "./Square.module.css";
import { useState } from "react";
import { PLAYER } from "../../constants";
import { calculateWinner } from "../../constants";
import { bool, func, number, array } from "prop-types";

Square.propTypes = {
  isNext: bool,
  squares: array,
  setSquares: func,
  setIsNext: func,
  index: number,
  setWinnerInfo: func,
  setIsDraw: func,
};

function Square({
  isNext,
  setIsNext,
  squares,
  setSquares,
  index,
  setWinnerInfo,
  setIsDraw,
}) {
  let [player, setPlayer] = useState(null);

  const handleClick = () => {
    //버튼 값 바꿔주는 코드
    if (player !== null) return; //빈칸일때만
    isNext ? setPlayer(PLAYER.ONE) : setPlayer(PLAYER.TWO);
    setIsNext(!isNext);

    // squares 배열 업데이트 코드
    let newPlayer = isNext ? PLAYER.ONE : PLAYER.TWO;

    //squares를 직접 바꾸지 못하기때문에 newSquares에 복사
    let newSquares = [...squares];

    //선택한 square의 값을 newSquares 배열에 저장
    newSquares[index] = newPlayer;

    //squares 배열을 newSquares 배열로  업데이트
    setSquares(newSquares);
    setWinnerInfo(calculateWinner(newSquares));

    //빈칸이 있을때는 배열에 null값이 있어서 false, 꽉차면 true
    setIsDraw(newSquares.every(Boolean));
  };

  return (
    <button className={S.Square} onClick={handleClick}>
      {player}
    </button>
  );
}

export default Square;
