import { useEffect, useRef, useState } from "react";
import { Sheet } from "react-modal-sheet";
import pb from "../../api/pocketbase";
import { updatePb } from "../../api/update";
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

  const [isDisabled, setIsDisabled] = useState(true);

  const [textValue, setTextValue] = useState("");
  const [timeA, setTimeA] = useState("");
  const [timeB, setTimeB] = useState("");

  const handleClick = async () => {
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
    setIsDisabled(true);
    const data = {
      field: [
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
      ],
    };
    updatePb(data);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setIsDisabled(true);
  };

  useEffect(() => {
    console.log(pb);
    if (textValue.length > 0 && timeA.length > 0 && timeB.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [textValue, timeA, timeB]);

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
              textValueRef.current = e.target.value;
              setTextValue(e.target.value);
            }}
          />
          <p>간단히 적어볼까?</p>
          <textarea
            placeholder="오늘 베프가 집에 놀러 오니까, 저녁에는 베프랑 테라스에서 치맥 파티닷!"
            onChange={(e) => {
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
              setTimeA(e.target.value);
            }}
          />
          <input
            type="time"
            step="60"
            onChange={(e) => {
              timeBRef.current = e.target.value;
              setTimeB(e.target.value);
            }}
          />
          <div className="btnWrapper">
            <Button
              className={`${isDisabled ? "disabled" : ""}`}
              onClick={handleClick}>
              저장
            </Button>
            <Button onClick={handleCancel}>취소</Button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onClick={() => setIsOpen(false)} />
    </Sheet>
  );
}
