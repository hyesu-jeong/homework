import { useGlobalStore } from "../../store/useGlobalStore";
import Card from "../Card/Card";

export default function CardList() {
  const list = useGlobalStore((state) => state.list);
  const todo = useGlobalStore((state) => state.todo);
  const done = useGlobalStore((state) => state.done);
  const archived = useGlobalStore((state) => state.archived);
  const currentTab = useGlobalStore((state) => state.currentTab);

  return (
    <div>
      {currentTab === "all" &&
        list.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}

      {currentTab === "todo" &&
        todo.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}

      {currentTab === "done" &&
        done.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}

      {currentTab === "archived" &&
        archived.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
    </div>
  );
}
