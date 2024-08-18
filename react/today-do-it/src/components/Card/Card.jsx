import { bool, number, shape, string } from "prop-types";
import { updatePb } from "../../api/update";
import { useGlobalStore } from "../../store/useGlobalStore";

Card.propTypes = {
  item: shape({
    id: number,
    isArchived: bool,
    isChecked: bool,
    textAreaValue: string,
    textValue: string,
  }).isRequired,
  index: number,
};

export default function Card({ item, index }) {
  const list = useGlobalStore((state) => state.list);
  const setList = useGlobalStore((state) => state.setList);
  const id = item.id;

  const handleClick = () => {
    list[index].isChecked = !list[index].isChecked;
    setList([...list]);
    const data = {
      field: [...list],
    };
    updatePb(data);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const filteredList = list.filter((list) => list.id !== id);
    setList([...filteredList]);

    const data = {
      field: [...filteredList],
    };
    updatePb(data);
  };

  const handleArchive = (e) => {
    e.preventDefault();
    e.stopPropagation();
    list[index].isArchived = !list[index].isArchived;
    setList([...list]);
    const data = {
      field: [...list],
    };
    updatePb(data);
  };
  return (
    <div key={index} className="card" onClick={handleClick}>
      <p className={`care-title ${item.isChecked ? "checked" : ""}`}>
        {item.textValue}
      </p>
      <p>{item.textAreaValue}</p>
      <p>{item.id}</p>
      <p>오늘 {`${item.timeA} ~ ${item.timeB}`}</p>
      <p>{item.isChecked ? "v" : "o"}</p>
      <button onClick={handleArchive}>archived</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}
