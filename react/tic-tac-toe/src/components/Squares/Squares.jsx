import { useState } from "react";
import Square from "../Square/Square";
import S from "./Squares.module.css";

function Squares({ isNext, setIsNext }) {
  const [squares, setSquares] = useState(Array(9).fill(null)); //9칸에 뭐가 있는지 저장하는 배열

  return (
    <div className={S.Squares}>
      {squares.map((el, index) => (
        <Square
          key={index}
          isNext={isNext}
          squares={squares}
          setSquares={setSquares}
          setIsNext={setIsNext}
          index={index}></Square>
      ))}
    </div>
  );
}

export default Squares;
