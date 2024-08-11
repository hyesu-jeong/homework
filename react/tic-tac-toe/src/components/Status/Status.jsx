import S from "./Status.module.css";
import { PLAYER } from "../../constants";
import { bool, object } from "prop-types";

Status.propTypes = {
  currentPlayer: bool,
  winnerInfo: object,
  isDraw: bool,
};

function Status({ currentPlayer, winnerInfo, isDraw }) {
  return (
    <h2 className={S.Status}>
      {/* winnerInfo가 null이 아닐때 */}
      {winnerInfo
        ? `위너!! ${winnerInfo.winner}`
        : isDraw
        ? `음... 비겼네. 😩 한 판 더?!`
        : `다음 플레이어 : ${currentPlayer ? PLAYER.ONE : PLAYER.TWO}`}
    </h2>
  );
}

export default Status;
