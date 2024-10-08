import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import CardList from "./components/CardList/CardList";
import Modal from "./components/Modal/Modal";
import Tab from "./components/Tab/Tab";
import { useGlobalStore } from "./store/useGlobalStore";

function App() {
  const date = useGlobalStore((state) => state.date);

  const setIsOpen = useGlobalStore((state) => state.setIsOpen);
  const list = useGlobalStore((state) => state.list);
  const setTodo = useGlobalStore((state) => state.setTodo);
  const setDone = useGlobalStore((state) => state.setDone);
  const setArchived = useGlobalStore((state) => state.setArchived);

  useEffect(() => {
    setTodo(list.filter((item) => !item.isChecked));
    setDone(list.filter((item) => item.isChecked));
    setArchived(list.filter((item) => item.isArchived));
  }, [list]);

  return (
    <>
      <h1>우리, 오늘 뭐할까?</h1>
      <p>{`${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`}</p>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}>
        생각났어?
      </Button>
      <Tab />

      <CardList />
      <Modal />
    </>
  );
}

export default App;
