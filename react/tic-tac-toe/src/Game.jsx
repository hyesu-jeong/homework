import History from "./components/History/History";
import Board from "./components/Board/Board";
import S from "./styles/Game.module.css";
import "./styles/main.css";

import { useState } from "react";

function Game() {
  const [history, setHistory] = useState([]);
  const [squares, setSquares] = useState(Array(9).fill(null)); //9칸에 뭐가 있는지 저장하는 배열

  return (
    <div className={S.component}>
      <Board
        squares={squares}
        setSquares={setSquares}
        history={history}
        setHistory={setHistory}
      />
      <History history={history} setSquares={setSquares} />
    </div>
  );
}

export default Game;
