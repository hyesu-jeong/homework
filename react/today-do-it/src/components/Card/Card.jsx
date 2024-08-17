import PropTypes from "prop-types";
import { useGlobalStore } from "../../store/useGlobalStore";

Card.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default function Card({ item, index }) {
  const list = useGlobalStore((state) => state.list);
  const setList = useGlobalStore((state) => state.setList);

  const handleClick = () => {
    list[index].isChecked = !list[index].isChecked;
    setList([...list]);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    list.splice(index, 1);
    setList([...list]);
  };

  const handleArchive = (e) => {
    e.preventDefault();
    e.stopPropagation();
    list[index].isArchived = !list[index].isArchived;
    setList([...list]);
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
