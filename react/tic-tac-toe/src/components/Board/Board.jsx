import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";
import { array, func, object, bool } from "prop-types";

Board.propTypes = {
  squares: array,
  setSquares: func,
  history: array,
  setHistory: func,
  winnerInfo: object,
  setWinnerInfo: func,
  currentPlayer: bool,
  setcurrentPlayer: func,
  isDraw: bool,
  setIsDraw: func,
};

function Board({
  squares,
  setSquares,
  history,
  setHistory,
  winnerInfo,
  setWinnerInfo,
  currentPlayer,
  setcurrentPlayer,
  isDraw,
  setIsDraw,
}) {
  return (
    <div className={S.Board}>
      <Status
        currentPlayer={currentPlayer}
        winnerInfo={winnerInfo}
        isDraw={isDraw}
      />
      <Squares
        currentPlayer={currentPlayer}
        setcurrentPlayer={setcurrentPlayer}
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
