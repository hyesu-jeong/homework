import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import S from "./Board.module.css";

// Stateless Component
function Board() {
  return (
    <div className={S.Board}>
      <Status />
      <Squares />
    </div>
  );
}

export default Board;
