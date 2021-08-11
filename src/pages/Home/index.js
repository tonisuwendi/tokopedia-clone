import { cx } from "@emotion/css";
import React from "react";
import { HomeBanner } from "../../components";
import BaseApp from "../BaseApp";
import { marginYElm } from "./styles";

const Home = () => {
  return (
    <BaseApp>
      <div className={cx(marginYElm)}>
        <HomeBanner />
      </div>
    </BaseApp>
  );
};

export default Home;
