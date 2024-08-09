import History from "./components/History/History";
import Board from "./components/Board/Board";
import S from "./styles/Game.module.css";
import "./styles/main.css";

function Game() {
  return (
    <div className={S.component}>
      <Board />
      <History />
    </div>
  );
}

export default Game;
