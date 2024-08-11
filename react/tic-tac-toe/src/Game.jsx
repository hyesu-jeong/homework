import History from "./components/History/History";
import Board from "./components/Board/Board";
import S from "./styles/Game.module.css";
import "./styles/main.css";

import { useState } from "react";
import { INITIAL_SQUARES } from "./constants";

function Game() {
  const [history, setHistory] = useState([]);
  const [winnerInfo, setWinnerInfo] = useState(null);
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const [currentPlayer, setcurrentPlayer] = useState(true);
  const [isDraw, setIsDraw] = useState(false);

  return (
    <div className={S.component}>
      <Board
        squares={squares}
        setSquares={setSquares}
        history={history}
        setHistory={setHistory}
        winnerInfo={winnerInfo}
        setWinnerInfo={setWinnerInfo}
        currentPlayer={currentPlayer}
        setcurrentPlayer={setcurrentPlayer}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
      />
      <History
        history={history}
        setHistory={setHistory}
        setSquares={setSquares}
        setWinnerInfo={setWinnerInfo}
      />
    </div>
  );
}

export default Game;
