import { SlideItemType } from "../@types/items.d";
import PropTypes from "../utils/prop-types";

import partlyCloudyImagePath from "../assets/partly-cloudy.svg?url";
import sunnyImagePath from "../assets/sunny.svg?url";
import rainyImagePath from "../assets/rainy.svg?url";
import lightningImagePath from "../assets/lightning.svg?url";
import fineDustImagePath from "../assets/fine-dust.svg?url";

const IMAGE_TYPES = [
  "partly-cloudy",
  "sunny",
  "rainy",
  "lightning",
  "fine-dust",
];

function SlideItem({ slideItem, imageType }) {
  const { title, episode, photo } = slideItem;

  let imagePath = "";
  let weatherMessage = "";

  switch (imageType.toLowerCase()) {
    default:
    case "partly-cloudy":
      imagePath = partlyCloudyImagePath;
      weatherMessage = "한때 흐림";
      break;
    case "sunny":
      imagePath = sunnyImagePath;
      weatherMessage = "맑음";
      break;
    case "rainy":
      imagePath = rainyImagePath;
      weatherMessage = "비";
      break;
    case "lightning":
      imagePath = lightningImagePath;
      weatherMessage = "뇌우";
      break;
    case "fine-dust":
      imagePath = fineDustImagePath;
      weatherMessage = "미세먼지";
      break;
  }

  return (
    <>
      <div className="thumbnail-wrapper">
        <div className="icon-weather">
          <img src={imagePath} alt={weatherMessage} />
        </div>
        <img src={`/thumbnail/${photo}`} alt={title} />
      </div>
      <div className="title-wrapper">
        <div className="title paragraph-medium">{title}</div>
        <div className="episode paragraph-small">{episode}화</div>
      </div>
    </>
  );
}

export default SlideItem;

SlideItem.propTypes = {
  slideItem: SlideItemType.isRequired,
  imageType: PropTypes.oneOf(IMAGE_TYPES),
};
