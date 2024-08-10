import S from "./History.module.css";

function History({ history, setSquares }) {
  function handleClick(index) {
    setSquares([...history[index]]);
  }

  return (
    <div className={S.History}>
      <ol>
        <li>
          <button type="button" onClick={() => setSquares(Array(9).fill(null))}>
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
