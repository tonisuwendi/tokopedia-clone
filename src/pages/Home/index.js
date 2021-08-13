import { cx } from "@emotion/css";
import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { fontTitle, textGreen } from "../../assets/styles";
import { CarouselComp, HomeBanner } from "../../components";
import { ChoiceCategoryData } from "../../DummyData";
import BaseApp from "../BaseApp";
import {
  categoriesTopupContent,
  containerCategoriesAndTopup,
  displayFlexAndGap,
  imgChoiceCategory,
  linkSeeAll,
  marginYElm,
} from "./styles";

const Home = () => {
  return (
    <BaseApp>
      <div className={cx(marginYElm)}>
        <HomeBanner />
        <div className={cx(containerCategoriesAndTopup)}>
          <div className={cx(displayFlexAndGap)}>
            <div
              className={cx(categoriesTopupContent)}
              style={{ marginRight: 10 }}
            >
              <h3 className={cx(fontTitle(22))}>Kategori Pilihan</h3>
              <div>
                <CarouselComp
                  slidesPerView={4}
                  spaceBetween={18}
                  miniSliderClass
                  autoplay={false}
                  slidesPerGroup={2}
                >
                  {ChoiceCategoryData.map((category, i) => {
                    return (
                      <SwiperSlide>
                        <Link key={i} href={category.url}>
                          <img
                            className={cx(imgChoiceCategory)}
                            src={category.img}
                            alt={`category ${i + 1}`}
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </CarouselComp>
              </div>
            </div>
            <div
              style={{ marginLeft: 10 }}
              className={cx(categoriesTopupContent)}
            >
              <h3 className={cx(fontTitle(22))}>
                Top Up &amp; Tagihan{" "}
                <Link
                  to="/top-up-tagihan"
                  className={cx(textGreen, linkSeeAll)}
                >
                  Lihat Semua
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </BaseApp>
  );
};

export default Home;
