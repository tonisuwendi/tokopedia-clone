import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Navigation]);

const CarouselComp = ({
  children,
  spaceBetween = 0,
  slidesPerView = 1,
  slidesPerGroup = 1,
  navigation = true,
  loop = true,
  autoplay = true,
  autoplayDelay = 5000,
  miniSliderClass,
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      navigation={navigation}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
            }
          : false
      }
      className={miniSliderClass && "miniSlider"}
    >
      {children}
    </Swiper>
  );
};

export default CarouselComp;
