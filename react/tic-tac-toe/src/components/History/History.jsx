import S from "./History.module.css";

function History() {
  return (
    <div className={S.History}>
      <ol>
        <li>
          <button type="button">게임 시작</button>
        </li>
      </ol>
    </div>
  );
}

export default History;
