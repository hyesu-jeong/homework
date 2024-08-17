import { useRef } from "react";
import { Sheet } from "react-modal-sheet";
import { useGlobalStore } from "../../store/useGlobalStore";
import Button from "../Button/Button";

export default function Modal() {
  const isOpen = useGlobalStore((state) => state.isOpen);
  const setIsOpen = useGlobalStore((state) => state.setIsOpen);

  const list = useGlobalStore((state) => state.list);
  const setList = useGlobalStore((state) => state.setList);

  const textValueRef = useRef();
  const textAreaValueRef = useRef();
  const timeARef = useRef();
  const timeBRef = useRef();

  const handleClick = () => {
    setIsOpen(false);
    setList([
      ...list,
      {
        textValue: textValueRef.current,
        textAreaValue: textAreaValueRef.current,
        timeA: timeARef.current,
        timeB: timeBRef.current,
        id: Date.now(),
        isChecked: false,
        isArchived: false,
      },
    ]);
  };

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <p>오늘 뭐할래?</p>
          <input
            type="text"
            placeholder="치맥 파티!"
            onChange={(e) => {
              console.log(e.target.value);
              textValueRef.current = e.target.value;
            }}
          />
          <p>간단히 적어볼까?</p>
          <textarea
            placeholder="오늘 베프가 집에 놀러 오니까, 저녁에는 베프랑 테라스에서 치맥 파티닷!"
            onChange={(e) => {
              console.log(e.target.value);
              textAreaValueRef.current = e.target.value;
            }}
          />
          <p>언제 할거야?</p>
          <input
            type="time"
            step="60"
            onChange={(e) => {
              timeARef.current = e.target.value;
              console.log(e.target.value);
            }}
          />
          <input
            type="time"
            step="60"
            onChange={(e) => (timeBRef.current = e.target.value)}
          />
          <div className="btnWrapper">
            <Button onClick={handleClick}>저장</Button>
            <Button onClick={() => setIsOpen(false)}>취소</Button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onClick={() => setIsOpen(false)} />
    </Sheet>
  );
}
