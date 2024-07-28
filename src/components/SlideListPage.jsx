import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";

import data from "../data/data";
import { Navigation } from "swiper/modules";

const SlideListPage = () => {
  return (
    <main className="section">
      <h1 className="section-title label-small">Atomic Component</h1>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}>
        {data.map((el, idx) => {
          return (
            <SwiperSlide key={idx}>
              <SlideItem
                title={el.title}
                photo={el.photo}
                episode={el.episode}
                iconPath={el.iconPath}
                weatherMessage={el.weatherMessage}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default SlideListPage;
