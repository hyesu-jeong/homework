import Square from "../Square/Square";
import S from "./Squares.module.css";

function Squares({ isNext, setIsNext }) {
  return (
    <div className={S.Squares}>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
      <Square isNext={isNext} setIsNext={setIsNext}></Square>
    </div>
  );
}

export default Squares;
