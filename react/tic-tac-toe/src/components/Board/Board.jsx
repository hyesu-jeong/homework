import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";

import { useState } from "react";

// Stateless Component
function Board() {
  let [isNext, setIsNext] = useState(true);
  let [winnerInfo, setWinnerInfo] = useState(null);
  return (
    <div className={S.Board}>
      <Status isNext={isNext} winnerInfo={winnerInfo} />
      <Squares
        isNext={isNext}
        setIsNext={setIsNext}
        setWinnerInfo={setWinnerInfo}
      />
    </div>
  );
}

export default Board;
