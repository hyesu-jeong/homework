import S from "./Status.module.css";
import { PLAYER } from "../../constants";
import { Boolean, Object } from "prop-types";

Status.propTypes = {
  isNext: Boolean,
  winnerInfo: Object,
};

function Status({ isNext, winnerInfo }) {
  return (
    <h2 className={S.Status}>
      {/* winnerInfo가 null이 아닐때 */}
      {winnerInfo ? (
        <>위너!! {winnerInfo.winner}</>
      ) : (
        <>다음 플레이어 : {isNext ? PLAYER.ONE : PLAYER.TWO}</>
      )}
    </h2>
  );
}

export default Status;
