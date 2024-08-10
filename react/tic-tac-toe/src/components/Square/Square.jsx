import S from "./Square.module.css";
import { useState } from "react";
import { PLAYER } from "../../constants";

function Square({ isNext, setIsNext }) {
  let [player, setPlayer] = useState(null);

  const handleClick = () => {
    if (player !== null) return; //빈칸일때만
    isNext ? setPlayer(PLAYER.ONE) : setPlayer(PLAYER.TWO);
    setIsNext(!isNext);
  };

  return (
    <button className={S.Square} onClick={handleClick}>
      {player}
    </button>
  );
}

export default Square;
