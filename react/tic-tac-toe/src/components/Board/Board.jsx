import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";
import { useState } from "react";

// Stateless Component
function Board({ squares, setSquares, history, setHistory }) {
  let [isNext, setIsNext] = useState(true);
  let [winnerInfo, setWinnerInfo] = useState(null);
  let [isDraw, setIsDraw] = useState(false);

  return (
    <div className={S.Board}>
      <Status isNext={isNext} winnerInfo={winnerInfo} isDraw={isDraw} />
      <Squares
        isNext={isNext}
        setIsNext={setIsNext}
        winnerInfo={winnerInfo}
        setWinnerInfo={setWinnerInfo}
        setIsDraw={setIsDraw}
        squares={squares}
        setSquares={setSquares}
        history={history}
        setHistory={setHistory}
      />
    </div>
  );
}

export default Board;
