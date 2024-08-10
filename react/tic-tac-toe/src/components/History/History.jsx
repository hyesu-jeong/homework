import { calculateWinner } from "../../constants";
import S from "./History.module.css";

function History({ history, setHistory, setSquares, setWinnerInfo }) {
  function handleClick(index) {
    setSquares([...history[index]]);

    //버튼 클릭 시 해당 히스토리만큼 배열을 잘라서 업데이트
    setHistory(history.slice(0, index + 1));
    setWinnerInfo(calculateWinner([...history[index]]));
  }

  return (
    <div className={S.History}>
      <ol>
        <li>
          <button
            type="button"
            onClick={() => {
              setSquares(Array(9).fill(null));
              setHistory([]);
            }}>
            게임 시작
          </button>
        </li>
        {history.map((el, index) => (
          <li key={index}>
            <button type="button" onClick={() => handleClick(index)}>
              게임 #{index + 1}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default History;
