import React, { useState, useEffect } from "react";
import { cx } from "@emotion/css";
import { BannerData } from "../../../DummyData";
import { bannerContainer, btnSeeAllPromo } from "./styles";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    buttonArrowSetting();
  }, []);

  const buttonArrowSetting = (hover = false) => {
    const btnArrow = document.querySelectorAll(
      "button.BrainhubCarousel__arrows"
    );
    const btnArrowSpan = document.querySelectorAll(
      "button.BrainhubCarousel__arrows span"
    );
    const btnArrowLeft = document.querySelector(
      "button.BrainhubCarousel__arrowLeft"
    );
    const btnArrowRight = document.querySelector(
      "button.BrainhubCarousel__arrowRight"
    );
    if (btnArrow) {
      btnArrow.forEach((btn) => {
        btn.style.backgroundColor = "white";
        btn.style.borderRadius = "50%";
        btn.style.boxShadow = "0 1px 6px 0 rgba(49,53,59,0.12)";
        btn.style.color = "#333";
        btn.style.position = "absolute";
        btn.style.opacity = hover ? "1" : "0";
        btn.style.zIndex = "1";
        btn.style.transition = "0.3s";
      });
      btnArrowSpan.forEach((span) => {
        span.style.borderColor = "black";
      });
      btnArrowLeft.style.left = "-20px";
      btnArrowLeft.style.transform = `translate(${hover ? "0" : "30px"},0)`;
      btnArrowRight.style.right = "-20px";
      btnArrowRight.style.transform = `translate(${hover ? "0" : "-30px"},0)`;
    }
  };

  return (
    <div>
      <div
        className={cx(bannerContainer)}
        onMouseEnter={() => buttonArrowSetting(true)}
        onMouseLeave={() => buttonArrowSetting(false)}
      >
        <Carousel
          value={value}
          onChange={(data) => setValue(data)}
          slides={BannerData.map((banner, i) => {
            return (
              <a href={banner.redirect}>
                <img key={i} src={banner.img} alt={`banner ${i + 1}`} />
              </a>
            );
          })}
          plugins={[
            "arrows",
            "clickToChange",
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 5000,
              },
            },
          ]}
        />
        <Link to="/promo" className={cx(btnSeeAllPromo)}>
          Lihat Promo Lainnya
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
