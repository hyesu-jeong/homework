import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";

import { useState } from "react";

// Stateless Component
function Board() {
  let [isNext, setIsNext] = useState(true);
  return (
    <div className={S.Board}>
      <Status isNext={isNext} />
      <Squares isNext={isNext} setIsNext={setIsNext} />
    </div>
  );
}

export default Board;
