import Square from "../Square/Square";
import S from "./Squares.module.css";
import { bool, func, array, object } from "prop-types";

Squares.propTypes = {
  currentPlayer: bool,
  setcurrentPlayer: func,
  winnerInfo: object,
  setWinnerInfo: func,
  setIsDraw: func,
  squares: array,
  setSquares: func,
  history: array,
  setHistory: func,
};

function Squares({
  currentPlayer,
  setcurrentPlayer,
  winnerInfo,
  setWinnerInfo,
  setIsDraw,
  squares,
  setSquares,
  history,
  setHistory,
}) {
  return (
    <div className={S.Squares}>
      {squares.map((el, index) => (
        <Square
          key={index}
          currentPlayer={currentPlayer}
          squares={squares}
          setSquares={setSquares}
          setcurrentPlayer={setcurrentPlayer}
          index={index}
          winnerInfo={winnerInfo}
          setWinnerInfo={setWinnerInfo}
          setIsDraw={setIsDraw}
          history={history}
          setHistory={setHistory}></Square>
      ))}
    </div>
  );
}

export default Squares;
