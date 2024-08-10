import S from "./Status.module.css";
import { PLAYER } from "../../constants";

function Status({ isNext }) {
  return (
    <h2 className={S.Status}>
      다음 플레이어 : {isNext ? PLAYER.ONE : PLAYER.TWO}
    </h2>
  );
}

export default Status;
