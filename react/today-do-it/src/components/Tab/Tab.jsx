import { useGlobalStore } from "../../store/useGlobalStore";
export default function Tab() {
  const list = useGlobalStore((state) => state.list);
  const todo = useGlobalStore((state) => state.todo);
  const done = useGlobalStore((state) => state.done);
  const archived = useGlobalStore((state) => state.archived);
  const setCurrentTab = useGlobalStore((state) => state.setCurrentTab);

  return (
    <div className="tab">
      <div
        onClick={() => {
          setCurrentTab("all");
        }}>
        모두 {list.length}
      </div>
      <div
        onClick={() => {
          setCurrentTab("todo");
        }}>
        할일 {todo.length}
      </div>
      <div
        onClick={() => {
          setCurrentTab("done");
        }}>
        한일 {done.length}
      </div>
      <div
        onClick={() => {
          setCurrentTab("archived");
        }}>
        저장 {archived.length}
      </div>
    </div>
  );
}
