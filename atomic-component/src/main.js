import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function SlideItem({ title, episode, photo, weather = "partly-cloudy" }) {
  let iconPath = "";
  let weatherMessage = "";

  switch (weather) {
    default:
    case "partly-cloudy":
      iconPath = "/icons/partly-cloudy.svg";
      weatherMessage = "한때흐림";
      break;
    case "sunny":
      iconPath = "/icons/sunny.svg";
      weatherMessage = "맑음";
      break;
    case "lightning":
      iconPath = "/icons/lightning.svg";
      weatherMessage = "뇌우";
      break;
    case "rainy":
      iconPath = "/icons/rainy.svg";
      weatherMessage = "비";
      break;
    case "fine-dust":
      iconPath = "/icons/fine-dust.svg";
      weatherMessage = "미세먼지";
      break;
  }

  const label = `${title} (${weatherMessage})`;

  return (
    <div className="swiper-slide" aria-label={label} title={label}>
      <div className="thumbnail-wrapper">
        <div className="icon-weather">
          <img src={iconPath} alt="" />
        </div>
        <img src={`/thumbnail/${photo}`} alt={title} />
      </div>
      <div className="title-wrapper">
        <div className="title">{title}</div>
        <div className="episode">{episode}화</div>
      </div>
    </div>
  );
}

function SlideListPage() {
  return (
    <section className="section">
      <h1 className="section-title">Atomic Component</h1>
      <div className="swiper">
        <div className="swiper-wrapper">
          <SlideItem
            title="JTBC 뉴스룸"
            episode="1"
            photo="thumbnail-1.webp"
            weather="partly-cloudy"
          />
          <SlideItem
            title="휴먼다큐 <나는 살기로 했다>"
            episode="10"
            photo="thumbnail-2.webp"
            weather="rainy"
          />
          <SlideItem
            title="건강면세점"
            episode="130"
            photo="thumbnail-3.webp"
            weather="sunny"
          />
          <SlideItem
            title="차이나는 클라스"
            episode="254"
            photo="thumbnail-4.webp"
            weather="lightning"
          />
          <SlideItem
            title="알맹이"
            episode="208"
            photo="thumbnail-5.webp"
            weather="fine-dust"
          />
          <SlideItem
            title="엄마의 봄날"
            episode="380"
            photo="thumbnail-6.webp"
            weather="partly-cloudy"
          />
        </div>
      </div>
    </section>
  );
}

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<SlideListPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
