import SlideItem from "./SlideItem";
import { data } from "../data/data";
import { getRandomImageType } from "../utils/randomNumber";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const SlideListPage = () => {
  return (
    <main className="section">
      <h1 className="section-title label-small">Component PropTypes</h1>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}>
        {data.map((el, idx) => {
          return (
            <SwiperSlide key={idx}>
              <SlideItem slideItem={el} imageType={getRandomImageType()} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default SlideListPage;
