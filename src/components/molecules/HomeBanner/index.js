import React from "react";
import { cx } from "@emotion/css";
import { BannerData } from "../../../DummyData";
import { bannerContainer, btnSeeAllPromo } from "./styles";
import CarouselComp from "../CarouselComp";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const HomeBanner = () => {
  return (
    <div className={cx(bannerContainer)}>
      <CarouselComp>
        {BannerData.map((banner, i) => {
          return (
            <SwiperSlide>
              <div
                style={{ borderRadius: 15, height: 302, overflow: "hidden" }}
              >
                <a href={banner.redirect} key={i}>
                  <img src={banner.img} alt={`banner ${i + 1}`} />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </CarouselComp>
      <Link to="/promo" className={cx(btnSeeAllPromo)}>
        Lihat Promo Lainnya
      </Link>
    </div>
  );
};

export default HomeBanner;
