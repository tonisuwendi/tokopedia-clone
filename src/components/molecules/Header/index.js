import React from "react";
import { cx } from "@emotion/css";
import {
  squareHoverGrey,
  centerElement,
  downloadAppItem,
  header,
  headerMiddle,
  headerTop,
  normalText,
  verticalLine,
  iconSize,
  photoProfile,
  profileWrapper,
  titleProfile,
  trendingPopKey,
  locationSent,
} from "./styles";
import { boxShadow, textHoverPrimaryColor } from "../../../assets/styles";
import {
  ArrowBottomLocationIcon,
  CartIcon,
  DefaultLogoToko,
  DefaultPhotoProfile,
  LocationSentIcon,
  MessageIcon,
  MobileAppIcons,
  NotificationIcon,
  PrimaryLogo,
} from "../../../assets";
import { MenuTopHeader, TrendingPopularKeywords } from "./DummyData";
import { Link } from "react-router-dom";
import { InputForm } from "../..";

const Header = () => {
  return (
    <div className={cx(header, boxShadow)}>
      <div className={cx(headerTop)}>
        <div className={cx(downloadAppItem)}>
          <img
            style={{ marginRight: 8 }}
            src={MobileAppIcons}
            alt="mobile app icon"
          />
          <a href="/" className={cx(normalText(31), textHoverPrimaryColor)}>
            Download Tokopedia App
          </a>
        </div>
        <div>
          {MenuTopHeader.map((menu, index) => {
            return (
              <a
                href={menu.href}
                key={index}
                style={{ marginLeft: 25 }}
                className={cx(normalText(31), textHoverPrimaryColor)}
              >
                {menu.title}
              </a>
            );
          })}
        </div>
      </div>
      <div className={cx(headerMiddle)}>
        <div
          style={{
            display: "flex",
            height: 56,
          }}
        >
          <div className={cx(centerElement)}>
            <Link to="/" style={{ height: 32 }}>
              <img src={PrimaryLogo} alt="logo tokopedia" />
            </Link>
          </div>
          <div className={cx(centerElement)}>
            <span className={cx(squareHoverGrey, textHoverPrimaryColor)}>
              Kategori
            </span>
          </div>
          <div className={cx(centerElement)} style={{ marginLeft: 15 }}>
            <InputForm
              height={32}
              width="calc(100vw - 760px)"
              placeholder="Cari sesuatu disini"
              button
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 56,
          }}
        >
          <div className={cx(centerElement)} style={{ marginLeft: 15 }}>
            <div style={{ display: "flex" }}>
              <img
                className={cx(squareHoverGrey, iconSize)}
                src={CartIcon}
                alt="cart icon"
              />
              <img
                className={cx(squareHoverGrey, iconSize)}
                src={NotificationIcon}
                alt="notification icon"
              />
              <img
                className={cx(squareHoverGrey, iconSize)}
                src={MessageIcon}
                alt="message icon"
              />
            </div>
          </div>
          <div className={cx(centerElement)}>
            <div className={cx(verticalLine)}></div>
          </div>
          <div className={cx(centerElement)}>
            <div className={cx(squareHoverGrey, profileWrapper)}>
              <img
                src={DefaultLogoToko}
                className={cx(photoProfile)}
                alt="foto toko"
              />
              <span className={cx(titleProfile)}>Tonisu Official</span>
            </div>
          </div>
          <div className={cx(centerElement)}>
            <div className={cx(squareHoverGrey, profileWrapper)}>
              <img
                src={DefaultPhotoProfile}
                className={cx(photoProfile)}
                alt="foto toko"
              />
              <span className={cx(titleProfile)}>Toni</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(trendingPopKey)}>
        {TrendingPopularKeywords.map((keyword, index) => {
          return (
            <a
              href={keyword.href}
              style={{ marginRight: 15 }}
              className={cx(normalText(""), textHoverPrimaryColor)}
              key={index}
            >
              {keyword.title}
            </a>
          );
        })}
      </div>
      <div className={cx(locationSent)}>
        <LocationSentIcon />{" "}
        <span className={cx(normalText(""))}>
          Dikirim ke <span style={{ fontWeight: 600 }}>Rumah Toni Suwendi</span>
          <ArrowBottomLocationIcon />
        </span>
      </div>
    </div>
  );
};

export default Header;
