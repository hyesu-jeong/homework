const SlideItem = ({
  title,
  episode,
  photo,
  iconPath = "partly-cloudy",
  weatherMessage,
}) => {
  return (
    <>
      <div className="thumbnail-wrapper">
        <div className="icon-weather">
          <img src={`/icons/${iconPath}.svg`} alt={weatherMessage} />
        </div>
        <img src={`/thumbnail/${photo}`} alt={title} />
      </div>
      <div className="title-wrapper">
        <div className="title paragraph-medium">{title}</div>
        <div className="episode paragraph-small">{episode}화</div>
      </div>
    </>
  );
};

export default SlideItem;
