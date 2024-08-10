import { useState } from "react";
import Square from "../Square/Square";
import S from "./Squares.module.css";
import { bool, func } from "prop-types";

Squares.propTypes = {
  isNext: bool,
  setIsNext: func,
  setWinnerInfo: func,
  setIsDraw: func,
};

function Squares({
  isNext,
  setIsNext,
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
          isNext={isNext}
          squares={squares}
          setSquares={setSquares}
          setIsNext={setIsNext}
          index={index}
          setWinnerInfo={setWinnerInfo}
          setIsDraw={setIsDraw}
          history={history}
          setHistory={setHistory}></Square>
      ))}
    </div>
  );
}

export default Squares;
