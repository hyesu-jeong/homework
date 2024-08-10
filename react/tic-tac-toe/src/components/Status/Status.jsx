import S from "./Status.module.css";
import { PLAYER } from "../../constants";
import { bool, object } from "prop-types";
import { useEffect } from "react";

Status.propTypes = {
  isNext: bool,
  winnerInfo: object,
  isDraw: bool,
};

function Status({ isNext, winnerInfo, isDraw }) {
  useEffect(() => {
    console.log("winnerInfo", winnerInfo, "isDraw", isDraw);
  }, [winnerInfo, isDraw]);
  return (
    <h2 className={S.Status}>
      {/* winnerInfo가 null이 아닐때 */}
      {winnerInfo
        ? `위너!! ${winnerInfo.winner}`
        : isDraw
        ? `음... 비겼네. 😩 한 판 더?!`
        : `다음 플레이어 : ${isNext ? PLAYER.ONE : PLAYER.TWO}`}
    </h2>
  );
}

export default Status;
